import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity';
import Link from 'next/link';

async function getData(){
  const query = "*[_type == 'heroImage'][0]";
  const dataFetch = await client.fetch(query);

  return dataFetch
}

async function Hero() {
  const data = await getData()
  return (
    <section className='mx-auto max-2xl px-4 lg:max-w-7xl lg:px-8 h-[calc(100vh-90px)]  '>
        <div className='flex flex-wrap justify-between'>
            <div className='flex w-full flex-col justify-center lg:w-1/3 gap-6'>
                <h1 className='text-4xl font-bold text-black sm:text-5xl md:text-6xl'>
                Modern Looks for Every Occasion!
                </h1>

                <p className='text-justify max-w-md leading-relaxed text-gray-600 xl:text-lg'>Find the newest styles for men and women at our online store. From everyday wear to special occasions, we have everything you need to look your best. Shop now and update your wardrobe with our trendy and affordable fashion!</p>
                
            </div>

            <div className='flex w-full lg:w-2/3 '>
              <div className='relative left-2 top-2 z-10 -ml-2 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-6 lg:ml-0'>
                <Image 
                src={urlFor(data.image1).url()}
                alt='Great'
                className='h-full w-full object-cover object-center hover:scale-125 cursor-pointer transition duration-300'
                width={500}
                height={500}
                priority
                />
              </div>

              <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                <Image 
                src={urlFor(data.image2).url()}
                alt='Great Photo'
                className='h-full w-full object-cover object-center  hover:scale-125 cursor-pointer transition duration-300'
                width={500}
                height={500}
                priority
                />
              </div>


            </div>

        </div>

        <div className='flex flex-col items-center justify-between md:flex-row mt-10'>
          <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">

            <Link href={'/Men'} className='flex w-1/3 items-center justify-center bg-blue-600 transition duration-100 hover:bg-blue-700 active:bg-gray-500 font-bold text-white'>Men</Link>

            <Link href={'/Women'} className='flex w-1/3 items-center justify-center bg-blue-600 transition duration-100 hover:bg-blue-700 active:bg-gray-500 font-bold text-white'>Women</Link>

            <Link href={'/Teens'} className='flex w-1/3 items-center justify-center bg-blue-600 transition duration-100 hover:bg-blue-700 active:bg-gray-500 font-bold text-white'>Teens</Link>

          </div>
        </div>
    </section>
  )
}

export default Hero