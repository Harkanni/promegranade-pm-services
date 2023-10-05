import Link from 'next/link'
import React from 'react'

const HeaderComponent = ({ children, height }: {children: React.ReactNode, height?: number | string}) => {
   return (
      <header className={`w-full md:h-[50vh] mt-[3rem] flex flex-col items-center justify-center relative h-[${height ? height+'vh' : '50vh'}`}>
         { children }
      </header>
   )
}

export default HeaderComponent
