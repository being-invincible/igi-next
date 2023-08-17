
import EmblaCarousel from '../components/homeCarousel/EmblaCarousel';

import "../components/homeCarousel/css/base.css"
import "../components/homeCarousel/css/embla.css"
import "../components/homeCarousel/css/sandbox.css"


const HomeCarousel = ({dict}) => {
  

  const Carousel = dict.homeCarousel;
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = Carousel.length
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="w-full h-screen">
    <section id='home' className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} info={Carousel} />
    </section>
  </div>
  )
}

export default HomeCarousel