import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "@/components/ui/ClientLayout"

export const metadata: Metadata = {
  title: "NEXOLIA",
  description: "Startup ERP and SAAS solutions",
  generator: "Salwej Med.Wahbi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-white text-gray-900">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
