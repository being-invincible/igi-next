import React, { useState, useEffect, useCallback } from 'react'
import { FaCircle } from 'react-icons/fa'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  DotButton,
  PrevButton,
  NextButton
} from './EmblaCarouselArrowsDotsButtons'

import { motion } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const EmblaCarousel = (props) => {
  const { slides, options, info } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({delay:10000})])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className='h-full'>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <img
                  className="h-screen w-full"
                  src={info[index % info.length].image}
                  alt="Your alt text"
                />
                <div className='h-screen absolute top-0 w-full flex justify-center items-center'>
                  <motion.div className='w-[50%] text-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0.5, y: +50 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <div className='bg-black/25 px-20 py-10 rounded-xl'>
                      <h1 className='text-xl lg:text-3xl font-semibold text-center mb-2 lg:mb-4 font-lato'>{info[index % info.length].heading}</h1>
                      <p className='text-sm lg:text-md lg:text-lg font-normal mb-2.5 lg:mb-5'>{info[index % info.length].desc}</p>
                      <div className="w-full flex place-content-center">
                        <a href={info[index % info.length].id} className='text-md py-1 px-3 lg:px-5 lg:py-1 text-magic-potion bg-white border-magic-potion border-2 rounded-full justify-center block place-content-center' >Learn More</a>
                      </div>
                    </div>

                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between w-full px-10 bottom-[50%] absolute">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="flex justify-center w-full px-10 bottom-0 absolute">
      <div className="flex gap-3 py-3">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={''.concat(index === selectedIndex ? 'text-white' : 'text-white/50')}
          ><FaCircle/></DotButton>
        ))}
      </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
