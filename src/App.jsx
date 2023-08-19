
// Components
import Navbar from './components/Navbar'
import NewCarousel from './components/NewCarousel'
import ProductosYServicios from './components/ProductosYServicios'
import WhoAreWe from './components/WhoAreWe'
import Experiencia from './components/Experiencia'
import Contact from './components/Contact'
// import ContactForm from './components/ContactForm'
import { NewForm } from './components/NewForm'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

//Toaster
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Navbar />
    <NewCarousel />
    <ProductosYServicios />
    <WhoAreWe />
    <Experiencia />
    <Contact/>
    {/* <ContactForm /> */}
    <NewForm />
    <Footer/>
    <WhatsappButton />
    <Toaster position="bottom-left"
             reverseOrder={false} 
    />
    </>
  )
}

export default App
