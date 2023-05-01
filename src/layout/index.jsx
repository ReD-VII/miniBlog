import React, { useState } from 'react'
import { LayoutConteiner } from './styles'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const Layout = () => {
  const [display, setDisplay] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })








  return (
    <LayoutConteiner>


      <div className='boxes_layout'>
        {/* {display.width < 750 ?
          <></>
          :
          
          
        } */}
        <Menu />
      </div>


      <div className='boxes_layout'>
        <Outlet />

      </div>


      <div className='boxes_layout'>
        OUtros

      </div>




    </LayoutConteiner>
  )
}

export default Layout