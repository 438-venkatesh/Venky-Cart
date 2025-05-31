import React from 'react'
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
     <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28'>
  <img
    className='w-full md:max-w-[480px] rounded-md shadow-lg'
    src={assets.contact_img}
    alt="Venky-Cart Store"
  />
  <div className='flex flex-col justify-center items-start gap-6 max-w-md'>
    <p className='font-semibold text-2xl text-gray-700'>Our Store</p>
    <p className='text-gray-600 leading-relaxed'>
      IIIT Nuzvid <br /> Vijayawada,521202
    </p>
    <p className='text-gray-600 leading-relaxed'>
      Tel: +91 6300043759 <br /> Email: support@venky-cart.com
    </p>
    <p className='font-semibold text-2xl text-gray-700 mt-6'>Careers at Venky-Cart</p>
    <p className='text-gray-700 leading-relaxed'>
      Explore exciting career opportunities and join our passionate team.
    </p>
    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded'>
      Explore Jobs
    </button>
  </div>
</div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact;
