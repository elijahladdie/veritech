import React from 'react'
import { ImBookmark } from "react-icons/im";
import img from "../../assests/user_picture.jpg"
import { motion } from "framer-motion"

import { fadeIn } from "../variants";
const Head = () => {
    return (
        <header
            className=' flex flex-col items-center '>
            <div className=' relative h-16 flex justify-end -top-3  w-full'>
                <ImBookmark className='h-fit w-16 rotate-90  absolute  text-custom-neon-pink' />
            </div>
            <div className='w flex justify-center flex-col items-center w-4/5 gap-6'>

                <h1 className='bg-custom-neon-pink rounded text-white w-fit p-5 py-2 font-semibold'>Company Name</h1>
                <p >
                    Welcome to [Your company name], where a dedicated team of professionals works
                    together to bring innovation creativity and expertise to software industry, get to know the individuals who make our company thrive.
                </p>
                <h1 className='border-b border-dashed block border-b-2 border-custom-neon-pink w-96 '></h1>
            </div>
            <div className='py-4'>

                <h1 className='bg-custom-neon-pink rounded text-white 
                w-fit p-5 py-2 font-semibold'>Leadership/ Managment Team</h1>
            </div>
            <motion.div variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }} className='flex flex-wrap gap-4 p-5 justify-center'>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Founder Name]</h1>
                        <h2 className='text-custom-neon-pink'>Founder/CEO</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[Founder Name]</h1>
                        <h2 className='text-custom-neon-pink'>Founder/Ceo</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[VP Name]</h1>
                        <h2 className='text-custom-neon-pink'>Development & Growth</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[VP Name]</h1>
                        <h2 className='text-custom-neon-pink'>VP sales & Marketing</h2>
                    </div>
                </div>
                <div className=' flex flex-col items-center'>
                    <img src={img} alt="user profile logo" className='rounded-full h-48 w-48 shadow transition duration-300 hover:shadow-lg p-3 ' />
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold leading-8'>[VP Name]</h1>
                        <h2 className='text-custom-neon-pink'>VP , finance & Operations</h2>
                    </div>
                </div>



            </motion.div>
        </header>
    )
}

export default Head