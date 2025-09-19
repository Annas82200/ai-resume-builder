// frontend/app/api/request-example/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request) {
  try {
    const { industry, email } = await request.json();
    
    // Save to a JSON file for now (simple database)
    const fs = require('fs').promises;
    const path = require('path');
    const filePath = path.join(process.cwd(), 'example-requests.json');
    
    let requests = [];
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      requests = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, that's ok
    }
    
    // Add new request
    const newRequest = { 
      industry, 
      email, 
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    requests.push(newRequest);
    await fs.writeFile(filePath, JSON.stringify(requests, null, 2));
    
    // Send email notification if SendGrid is configured
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Email to yourself
        await sgMail.send({
          to: 'annas.dahrouj@gmail.com', // CHANGE THIS to your email!
          from: 'support@resumind.com', // CHANGE THIS to your verified sender
          subject: 'New Resume Example Request',
          text: `New example request received!\n\nIndustry: ${industry}\nEmail: ${email}\nTime: ${new Date().toLocaleString()}`,
          html: `
            <h3>New Resume Example Request</h3>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          `
        });
        
        // Email to the requester
        await sgMail.send({
          to: email,
          from: 'support@resumind.com', // CHANGE THIS to your verified sender
          subject: 'We received your resume example request!',
          text: `Thank you for requesting a ${industry} resume example! We'll add it to our collection soon.`,
          html: `
            <h3>Thank you for your request!</h3>
            <p>We received your request for a <strong>${industry}</strong> resume example.</p>
            <p>We're constantly adding new examples and will include this in our next update.</p>
            <p>In the meantime, feel free to explore our existing examples and create your own professional resume!</p>
            <br>
            <p>Best regards,<br>The Resumind Team</p>
          `
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't throw - still save the request even if email fails
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Request received! We\'ll add this example soon.' 
    });
    
  } catch (error) {
    console.error('Error saving request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save request' },
      { status: 500 }
    );
  }
}
