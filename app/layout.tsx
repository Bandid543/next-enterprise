import "styles/tailwind.css"
import "components/Appbar/appbar.tsx"
import MyAppBar from "components/Appbar/appbar"
import Footer from "components/Appbar/footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MyAppBar/>
        <main className="pt-5 px-0">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
