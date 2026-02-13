export const metadata = {
  title: 'A Journey of Love',
  description: 'Happy Valentine\'s Day!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
