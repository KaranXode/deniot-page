import React from 'react'
import SliderCard from '../card/page'

export default function SliderComponent() {
  return (
    <div className='flex flex-wrap flex-col lg:flex-row align-center px-6 lg:px-0'>
      <SliderCard direction="left-to-right" />
      <SliderCard direction="right-to-left" />



    </div>
  )
}
