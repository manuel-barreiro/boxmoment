import { useState, useEffect } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


export default function Carousel({
  autoSlide = true,
  autoSlideInterval = 8000,
}) {
 
  const slides = (window.innerWidth > 800 ) ? ["/images/slides/slide1.png", "/images/slides/slide4.png", "/images/slides/slide3.png"] : ["/images/slides/slide1Mobile.png", "/images/slides/slide2Mobile.png"]

  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative mt-32">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
         {slides.map((img) => (
          <img key={img} src={img} className="object-contain" alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/10 text-gray-800 hover:bg-white/30"
        >
          <BsChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/10 text-gray-800 hover:bg-white/30"
        >
        <BsChevronRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}