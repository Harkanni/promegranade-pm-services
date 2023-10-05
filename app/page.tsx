'use client'
import HeaderComponent from '@/components/HeaderComponent'
import Image from 'next/image'
import Link from 'next/link'
import { animate, motion } from "framer-motion"
import { img1, img2, img3, img4, img5, img7, } from '@/assets'
import { useEffect, useRef } from 'react'
import * as BSIcons from 'react-icons/bs'
import * as HIIcons from 'react-icons/hi'
import * as GOIcons from 'react-icons/go'
import * as BIIcons from 'react-icons/bi'
import { IconContext } from "react-icons";

import Counter from '@/components/Counter'


export default function Home() {
   const accolades = [
      { num: 300, text: 'Jobs Completed' },
      { num: 10, extra: 'k', text: 'Industry Experience' },
      { num: 48, text: 'Global Clients' },
      { num: 2, extra: 'k', text: 'Awards Winned' },
   ]

   const services = [
      {
         icon: <BSIcons.BsStar />,
         title: 'Paid Media',
         text: 'Sample text. Click to select the Text Element.',
         bgColor: '#b0d8d6',
         initial: { translateX: '-50%', opacity: 0 },
         animate: { translateX: 0, opacity: 1 }
      },
      {
         icon: <HIIcons.HiOutlineLightBulb />,
         title: 'Website Optimization',
         text: 'Sample text. Click to select the Text Element.',
         bgColor: '#e7cb57',
         initial: { translateY: '-50%', opacity: 0 },
         animate: { translateY: 0, opacity: 1 },
      },
      {
         icon: <GOIcons.GoGear />,
         title: 'SMS Marketing',
         text: 'Sample text. Click to select the Text Element.',
         bgColor: '#6d71e5',
         initial: { translateX: '50%', opacity: 0 },
         animate: { translateX: 0, opacity: 1 }
      }
   ]
   return (
      <main>
         <HeaderComponent>
            <h1 className='text-[55px] w-[75%] text-center dark:text-slate-200 break-words lg:tracking-wide leading-none lg:leading-[6rem] font-monteserat font-bold mb-3 xxs:mb-8'>Digital marketing agency</h1>
            <div className='w-[350px] lg:w-[500px] h-[5rem] xxs:h-[3rem] xxs:w-[300px] rounded-3xl absolute bottom-[8rem] sm:bottom-[11rem] lg:bottom-[9.5rem] -z-10  bg-[#b0d8d6] dark:bg-pink-700'></div>
            <p className='text-xs dark:text-slate-200'>
               Sample text. Click to select the Text Element. Image from
               <Link href={"#"} className='text-sm text-extrabold font-bold dark:text-blue-600 ml-1' >Freepik</Link>
            </p>
            <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
         </HeaderComponent>

         <div className='w-full -space-x-15 flex flex-col md:flex-row justify-center items-center'>
            <motion.div
               initial={{ translateX: '-30%', opacity: 0 }}
               animate={{ translateX: 0, opacity: 1 }}
               transition={{ duration: 1 }}
               className='p-10 h-[400px] w-[350px]'
            >
               <Image
                  src={img3}
                  alt='img1'
                  className='w-[100%] h-[100%] object-cover rounded-[3rem]'
               />
            </motion.div>


            <motion.div
               initial={{ translateY: '-30%', opacity: 0 }}
               animate={{ translateY: 0, opacity: 1 }}
               transition={{ duration: .75 }}
               className='p-10 h-[400px] w-[350px] flex justify-center items-center'
            >
               <Image
                  src={img1}
                  alt='img1'
                  className='w-[100%] h-[100%] object-cover rounded-[3rem] -translate-y-7 md:translate-y-20'
               />
            </motion.div>


            <motion.div
               initial={{ translateX: '30%', opacity: 0 }}
               animate={{ translateX: 0, opacity: 1 }}
               transition={{ duration: .75 }}
               className='p-10 h-[400px] w-[350px]'
            >
               <Image
                  src={img2}
                  alt='img1'
                  className='w-[100%] h-[100%] object-cover rounded-[3rem] -translate-y-12 md:translate-y-0'
               />
            </motion.div>
         </div>

         <div className='w-full min-h-full lg:h-[300px] p-10 md:p-20 bg-slate-200 dark:bg-slate-950'>
            <div className='w-[60%] h-full m-auto flex flex-col lg:flex-row justify-between items-center gap-5 '>
               {accolades.map((accolade, index) => (
                  <div key={index} className='flex flex-col items-center gap-5'>
                     <Counter from={0} to={accolade.num} extra={accolade.extra} />
                     <span className='dark:text-white font-bold'> {accolade.text} </span>
                  </div>
               ))}
            </div>
         </div>

         <HeaderComponent>
            <h1 className='text-[30px] w-[75%] text-center dark:text-slate-200 break-words lg:tracking-wide leading-none lg:leading-[6rem] font-monteserat font-bold mb-3'>
               Our services solve any business problem
            </h1>
            <div className='w-[150px] lg:w-[500px] h-[2.5rem] md:h-[5rem] rounded-3xl absolute bottom-[12.5rem] sm:bottom-[11rem] lg:bottom-[9.5rem] -z-10  bg-[#e7cb57] dark:bg-pink-700'></div>
            <p className='w-[80%] md:w-[full] text-xs dark:text-slate-200'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               <Link href={"#"} className='text-blue-600 ml-1' >Freepik</Link>
            </p>
            <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
         </HeaderComponent>

         <section className='w-full flex justify-center items-center'>
            <div className='w-[70%] flex flex-col md:flex-row gap-7 justify-between lg:[&>*:nth-child(2)]:mt-20 lg:[&>*:nth-child(3)]:mt-32 '>
               {services.map((service) => (
                  <div >
                     <motion.div
                        initial={service.initial}
                        animate={service.animate}
                        transition={{ duration: 1 }}
                        className={`px-7 py-5 rounded-[2.5rem] h-[17rem] flex flex-col items-start justify-center`} style={{ background: service.bgColor }}>
                        <IconContext.Provider value={{ color: service.bgColor, className: "text-center w-full" }}>
                           <div className='bg-white p-3 mb-5 rounded-full text-4xl'>{service.icon}</div>
                        </IconContext.Provider>
                        <h3 className='font-bold mb-5'>{service.title}</h3>
                        <p>{service.text}</p>
                     </motion.div>
                  </div>
               ))}
            </div>
         </section>

         <section className='w-full flex justify-center items-center md:my-20 bg-slate-200 dark:bg-slate-950 py-16'>
            <div className='flex flex-col md:flex-row justify-between gap-5 w-[70%]'>
               <div className='w-[]'>
                  <h1 className='text-bold text-xl leading-6 text-center md:text-left md:text-4xl dark:text-slate-200 break-words lg:tracking-wide md:leading-none font-monteserat font-bold mb-3'>Why you need digital marketing</h1>
                  <p className='text-sm md:text-base dark:text-slate-200'>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Image from
                     <Link href={"#"} className='text-blue-600 ml-1' >Freepik</Link>
                  </p>
                  <div className='w-full flex justify-center md:justify-start'>
                     <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
                  </div>
               </div>
               <div className='w-[] mt-5 scale-110 md:scale-100'>
                  <Image
                     src={img4}
                     alt='img4'
                     className='rounded-[2rem] md:rounded-[2.5rem]'
                  />
               </div>
            </div>
         </section>

         <HeaderComponent height={30}>
            <h1 className='text-[30px] w-[75%] text-center dark:text-slate-200 break-words lg:tracking-wide leading-none lg:leading-[6rem] font-monteserat font-bold mb-3'>
               Make your marketing more effective
            </h1>
            <div className='w-[150px] lg:w-[500px] h-[2.5rem] md:h-[5rem] rounded-3xl absolute bottom-[12.5rem] sm:bottom-[11rem] lg:bottom-[9.5rem] -z-10  bg-[#e7cb57] dark:bg-pink-700'></div>
            <p className='w-[80%] md:w-[full] text-center text-xs dark:text-slate-200'>
               Sample text. Click to select the Text Element.
               <Link href={"#"} className='text-blue-600 ml-1' >Freepik</Link>
            </p>
            <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
         </HeaderComponent>

         <section className='w-full min-h-[20rem] flex justify-center items-center my-20 bg-slate-200 dark:bg-slate-950 py-16'>
            <div className='flex flex-col w-[80%] gap-5'>
               <div className='flex flex-col md:flex-row gap-5 justify-between items-center rounded-3xl min-[20rem]'>
                  <div className={`bg-[#6d71e5] px-7 py-5 rounded-[2.5rem] md:w-[15rem] flex flex-col items-start justify-center`}>
                     <h3 className='font-bold mb-5'>Marketing Automation</h3>
                     <p className='text-sm mb-6'>Sample text. Click to select the Text Element.</p>
                     <div className=' h-[5.5rem] w-[6rem]'>
                        <Image
                           src={img5}
                           alt='img-5'
                           height={300}
                           width={300}
                           className='w-full h-full rounded-full object-cover'
                        />
                     </div>
                  </div>
                  <div className='bg-[#e7cb57] px-7 py-5 rounded-[2.5rem] items-start justify-center flex-1'>
                     <h3 className='font-bold mb-5'>Content Marketing</h3>
                     <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
                     </p>
                  </div>
               </div>
               <div className='w-full flex flex-col md:flex-row p-8 bg-[#b0d8d6] rounded-[1.5rem]'>
                  <div className={`bg-[url('../assets/person-using-laptop1.jpg')] h-[15rem] w-[100%] lg:w-[30%]`} />
                  <div className='px-7 flex-1'>
                     <h3 className='font-bold mb-5'>Social Media Marketing</h3>
                     <p>
                        Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Objectively innovate empowered manufactured products whereas parallel platforms.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className='w-full flex justify-center items-center my-20 bg-slate-200 dark:bg-slate-950 py-16'>
            <div className='flex flex-col md:flex-row-reverse justify-between gap-10 w-[70%]'>
               <div className='w-[]'>
                  <h1 className='text-bold text-4xl dark:text-slate-200 break-words lg:tracking-wide leading-none font-monteserat font-bold mb-3'>Growth drives everything we do</h1>
                  <p className='text-base dark:text-slate-200'>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Image from
                     <Link href={"#"} className='text-blue-600 ml-1' >Freepik</Link>
                  </p>
                  <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
               </div>
               <div className='w-[]'>
                  <Image
                     src={img7}
                     alt='img7'
                     className='rounded-[2.5rem]'
                  />
               </div>
            </div>
         </section>

         <HeaderComponent height={30}>
            <h1 className='text-[30px] w-[75%] text-center dark:text-slate-200 break-words lg:tracking-wide leading-none lg:leading-[6rem] font-monteserat font-bold mb-3'>
               Growth drives everything we do
            </h1>
            <div className='w-[150px] lg:w-[500px] h-[2.5rem] md:h-[5rem] rounded-3xl absolute bottom-[12.5rem] sm:bottom-[11rem] lg:bottom-[9.5rem] -z-10  bg-[#e7cb57] dark:bg-pink-700'></div>
            <p className='w-[80%] md:w-[full] text-xs dark:text-slate-200'>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Image from
               <Link href={"#"} className='text-blue-600 ml-1' >Freepik</Link>
            </p>
            <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
         </HeaderComponent>

         <section className='w-full flex justify-center items-center mt-14'>
            <div className='w-[70%] flex flex-col md:flex-row gap-7 justify-between lg:[&>*:nth-child(2)]:mt-20 lg:[&>*:nth-child(1)]:mt-32 '>
               {services.map((service) => (
                  <div >
                     <motion.div
                        initial={service.initial}
                        animate={service.animate}
                        transition={{ duration: 1 }}
                        className={`px-7 py-5 rounded-[2.5rem] h-[17rem] flex flex-col items-start justify-center`} style={{ background: service.bgColor }}>
                        <IconContext.Provider value={{ color: service.bgColor, className: "" }}>
                           <div className='bg-white p-3 mb-5 rounded-full text-4xl'><BIIcons.BiSolidQuoteAltRight /></div>
                        </IconContext.Provider>
                        <h3 className='font-bold mb-5'>{service.title}</h3>
                        <p>{service.text}</p>
                     </motion.div>
                  </div>
               ))}
            </div>
         </section>

         <section className='w-full flex justify-center items-center my-20 bg-slate-200 dark:bg-slate-950 py-16'>
            <div className='flex flex-col md:flex-row justify-between gap-5 w-[70%]'>
               <div className='w-[]'>
                  <h1 className='text-bold text-4xl dark:text-slate-200 break-words lg:tracking-wide leading-none font-monteserat font-bold mb-3'>24/7 customer support service</h1>
                  <p className='text-base dark:text-slate-200'>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Image from
                     <Link href={"#"} className='text-blue-600 ml-1' >Freepik</Link>
                  </p>
                  <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
               </div>
               <div className='w-[]'>
                  <Image
                     src={img5}
                     alt='img5'
                     className='rounded-[2.5rem]'
                  />
               </div>
            </div>
         </section>

         <HeaderComponent height={30}>
            <h1 className='text-[30px] w-[75%] text-center dark:text-slate-200 break-words lg:tracking-wide leading-none lg:leading-[6rem] font-monteserat font-bold mb-3'>
               Ready for your digital success?
            </h1>
            <div className='w-[150px] lg:w-[500px] h-[2.5rem] md:h-[5rem] rounded-3xl absolute bottom-[7.5rem] sm:bottom-[11rem] lg:bottom-[9.5rem] -z-10  bg-[#e7cb57] dark:bg-pink-700'></div>
            <p className='w-[80%] md:w-[full] text-center text-xs dark:text-slate-200'>
               Sample text. Click to select the Text Element.
               <Link href={"#"} className='text-blue-600 ml-1' >Freepik</Link>
            </p>
            <button className='mt-5 py-3 px-10 bg-[#6d71e5] rounded-full text-white font-light text-sm hover:bg-[#2c309e]'>Read More</button>
         </HeaderComponent>
      </main>
   )
}
