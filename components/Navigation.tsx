'use client'

import React, { useState, useEffect } from 'react'
import SideNavBar from './SideNavBar'
import NavBar from './NavBar'

const Navigation = () => {
   const [sidebar, setSidebar] = useState<boolean>(false)
   const handleSetSidebar = () => {
      setSidebar(!sidebar)
   }
   const age = 10
   return (
      <div>
         <NavBar sidebar={sidebar} handleSetSidebar={handleSetSidebar} />
         {sidebar && <SideNavBar sidebar={sidebar} handleSetSidebar={handleSetSidebar}></SideNavBar>}
      </div>
   )
}

export default Navigation
