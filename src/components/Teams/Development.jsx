import React from 'react'
import { ImBookmark } from "react-icons/im";
import img from "../../assests/user_picture.jpg"
import { motion } from "framer-motion"

import { fadeIn } from "../variants";
const Development = () => {
    return (
        <header className=' flex flex-col items-center '>
            <div className=' relative h-16 flex justify-start -top-3  w-full'>
                <ImBookmark className='h-fit w-16 -rotate-90  absolute  text-custom-neon-pink' />
            </div>

            <div className='py-4'>

                <h1 className='bg-custom-neon-pink rounded text-white 
                w-fit p-5 py-2 font-semibold'>Developer Team</h1>
            </div>
            <motion.div 
             variants={fadeIn("up", 0.2)}
             initial="hidden"
             whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            className='flex flex-wrap-reverse gap-4 p-5 justify-center'>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Developer Name]</h1>
                        <h2 className='text-custom-neon-pink'>Team leader, SE</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Developer Name]</h1>
                        <h2 className='text-custom-neon-pink'>Software Engineer</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Developer Name]</h1>
                        <h2 className='text-custom-neon-pink'>Software Engineer</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Developer Name]</h1>
                        <h2 className='text-custom-neon-pink'>Software Engineer</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Developer Name]</h1>
                        <h2 className='text-custom-neon-pink'>Software Engineer</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Developer Name]</h1>
                        <h2 className='text-custom-neon-pink'>Software Engineer</h2>
                    </div>
                </div>

            </motion.div>
        </header>
    )
}

export default Development