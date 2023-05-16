import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documents</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                    <li className='py-1'>Customer Support</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partner</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='uppercase'>Subscribe to our newsletter</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <form action="POSt">
                    <input className='px-1 py-1 rounded-lg' type="email" name="" placeholder="xyz@gmail.com" id=""  />
                    <button className='ml-2 text-sm px-1 py-1 rounded-lg'>Subcribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto items-center justify-between sm:flex-row text-center text-gray-500 '>
            <p>2022 Workflow, LLC. All rights reserved</p>
            <div className='flex justify-between sm:w-[500px] pt-4 text-2xl'>

                <FaFacebook/>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitch/>
                <FaTwitter/>
            </div>
        </div>
      
        
    </div>
  )
}

export default Footer
