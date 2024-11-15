import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
            What people are saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimony, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin'>
                        <p>{testimony.text}</p>
                        <div className='flex mt-8 items-start'>
                            <img className='h-12 w-12 mr-6 rounded-full border border-neutral-300' src={testimony.image} alt={testimony.user} />
                            <div>
                                <h6>{testimony.user}</h6>
                                <p className='text-sm font-normal italic text-neutral-600'>{testimony.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials