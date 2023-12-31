// Components
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Products from './components/Products'
import Services from './components/Services'
import WhoAreWe from './components/WhoAreWe'
import Experiencia from './components/Experiencia'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Buttons from './components/Buttons'

function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <section className="bg-[url('/images/backgrounds/starPattern.svg')] bg-center bg-cover">
        <Products />
        <Services />
    </section>
    <WhoAreWe />
    <Experiencia />
    <Contact/>
    <ContactForm />
    <Footer/>
    <Buttons />
    </>
  )
}

export default App
