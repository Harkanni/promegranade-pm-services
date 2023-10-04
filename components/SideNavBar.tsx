import Link from 'next/link'
import React from 'react'
import '@/app/generic.css'

const SideNavBar = ({ handleSetSidebar, sidebar }: { sidebar: boolean, handleSetSidebar: () => void }) => {
   const navData: string[] = ['Home', 'Landing', 'About', 'Team', 'Gallery', 'Contact',]

   return (
      <>
         <nav className='bg-slate-950 w-[300px] h-[100vh] py-5 backdrop-blur-lg absolute z-50'>
            <ul role='list' className='block items-center justify-center space-y-2'>
               {navData.map((item: string, index: number) => (
                  <li className='pl-3 py-4 text-2xl font-thin text-slate-200 dark:text-slate-200 hover:border-l-2 hover:border-l-pink-800 hover:bg-slate-500' key={index}>
                     <Link href={'#'}>{item}</Link>
                  </li>
               ))}
            </ul>
         </nav>

         <div onClick={() => handleSetSidebar()} className='blur' style={{ width: '100vw', height: '100vh', position: 'fixed', inset: 0, backdropFilter: `blur(200px) !important`, zIndex: 1 }} />
      </>
   )
}

export default SideNavBar
