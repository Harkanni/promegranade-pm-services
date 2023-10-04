import Link from 'next/link'
import React from 'react'

const HeaderComponent = ({ children }: {children: React.ReactNode}) => {
   return (
      <header className='w-full h-[50vh] mt-[3rem] flex flex-col items-center justify-center relative'>
         { children }
      </header>
   )
}

export default HeaderComponent
