
// Components
import Navbar from './components/Navbar'
import SlidesCarousel from './components/SlidesCarousel'
import ProductosYServicios from './components/ProductosYServicios'
import WhoAreWe from './components/WhoAreWe'
import Experiencia from './components/Experiencia'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

//Toaster
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Navbar />
    <SlidesCarousel />
    <ProductosYServicios />
    <WhoAreWe />
    <Experiencia />
    <Contact/>
    <ContactForm />
    <Footer/>
    <WhatsappButton />
    <Toaster position="bottom-left"
             reverseOrder={false} 
    />
    </>
  )
}

export default App
