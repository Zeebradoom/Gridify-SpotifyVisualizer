import React, { useState } from 'react'
import { songsImage } from './src/songsImage'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icon/fa'

const visualization = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {songsImage.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt='songs image' className='image' />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default visualization



