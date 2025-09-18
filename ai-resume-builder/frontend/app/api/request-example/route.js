// frontend/app/api/request-example/route.js

export async function POST(request) {
  try {
    const body = await request.json();
    const { industry, email } = body;

    // For now, we'll save to a JSON file
    // In production, you'd save to a database
    const fs = require('fs').promises;
    const path = require('path');
    
    const requestsFile = path.join(process.cwd(), 'example-requests.json');
    
    // Read existing requests
    let requests = [];
    try {
      const existingData = await fs.readFile(requestsFile, 'utf-8');
      requests = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist yet, that's okay
    }
    
    // Add new request
    requests.push({
      industry,
      email,
      timestamp: new Date().toISOString(),
      status: 'pending'
    });
    
    // Save updated requests
    await fs.writeFile(requestsFile, JSON.stringify(requests, null, 2));
    
    // Send notification email (optional)
    // You could use SendGrid, Resend, or any email service here
    
    return Response.json({ success: true, message: 'Request saved successfully' });
  } catch (error) {
    console.error('Error saving request:', error);
    return Response.json({ success: false, error: 'Failed to save request' }, { status: 500 });
  }
}
