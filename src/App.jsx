
// Components
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import WhatsappButton from './components/WhatsappButton'
import QuienesSomos from './components/quienesSomos'
import Footer from './components/Footer'


function App() {
  return (
    <div className='relative'>
      <Navbar />
      <Carousel />
      <QuienesSomos />
      <Footer/>
      <WhatsappButton />
    </div>
  )
}

export default App
