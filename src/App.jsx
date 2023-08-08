
// Components
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import WhatsappButton from './components/WhatsappButton'
import WhoAreWe from './components/WhoAreWe'
import Footer from './components/Footer'


function App() {
  return (
    <div className='relative'>
      <Navbar />
      <Carousel />
      <WhoAreWe />
      <Footer/>
      <WhatsappButton />
    </div>
  )
}

export default App
