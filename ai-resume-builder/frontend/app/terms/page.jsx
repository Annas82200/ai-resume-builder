export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using Resumind, you accept and agree to be bound by these Terms of Service.</p>
        
        <h2>Description of Service</h2>
        <p>Resumind is an AI-powered resume building platform that helps users create professional resumes.</p>
        
        <h2>Contact</h2>
        <p>Questions about the Terms of Service should be sent to us at terms@resumind.co</p>
      </div>
    </div>
  )
}
