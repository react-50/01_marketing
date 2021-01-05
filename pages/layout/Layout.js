import Navigation from './Navigation'
import Footer from '../footer/index'
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
