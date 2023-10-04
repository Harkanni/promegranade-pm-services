'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as FAIcons from 'react-icons/fa'
import * as AIIcons from 'react-icons/ai'
import { promises } from 'dns'

const NavBar = ({ sidebar, handleSetSidebar }: { sidebar: boolean, handleSetSidebar: () => void }) => {
   const navData: string[] = ['Home', 'Landing', 'About', 'Team', 'Gallery', 'Contact',]
   return (
      <nav className='w-full p-5 mt-2 border-b dark:border-b-slate-100/50 flex items-center lg:justify-center justify-between dark:bg-slate-900 bg-white'>
         <ul role='list' className='hidden lg:flex items-center justify-center space-x-6'>
            {navData.map((item: string, index: number) => (
               <li className='text-2xl font-extralight text-slate-950 dark:text-slate-200' key={index}>
                  <Link href={'#'}>{item}</Link>
               </li>
            ))}
         </ul>
         <div className='lg:hidden font-thin text-2xl cursor-pointer text-slate-950 dark:text-slate-400 hover:text-pink-600' onClick={() => handleSetSidebar()}>
            {!sidebar ? <FAIcons.FaBars/> : <AIIcons.AiOutlineClose />}            
         </div>
      </nav>
   )
}

export default NavBar
