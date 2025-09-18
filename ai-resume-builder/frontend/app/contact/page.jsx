export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">Have questions? We're here to help.</p>
          <div className="space-y-2">
            <p><strong>Email:</strong> support@resumind.co</p>
            <p><strong>Response time:</strong> Within 24 hours</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <p>For technical issues or billing questions, please email us with:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your account email</li>
            <li>Description of the issue</li>
            <li>Any error messages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
