import './globals.css'

export const metadata = {
  title: 'AI Resume Builder - Create ATS-Friendly Resumes in Minutes',
  description: 'Build professional resumes with AI. ATS-optimized templates, instant PDF download. Start free.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}