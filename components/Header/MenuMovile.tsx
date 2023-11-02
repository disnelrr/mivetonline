'use client'
import { Popover } from '@headlessui/react'

function MenuMovile() {
  return (
    <Popover className="">
      <Popover.Button>
      <ul className="flex">
  <li>
    <a href="#" className="flex items-center px-4 py-2 hover:bg-black-200">
      <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
     
    </a>
  </li>
</ul>
        </Popover.Button>
     
      <Popover.Panel className="absolute z-10 top-0 left-0 w-screen h-full bg-blue-500">
        <div className="grid grid-cols-2">
          <a href="/analytics">Horario</a>
          <a href="/engagement">Zona</a>
          <a href="/security">Tarifas</a>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
      
    </Popover>
   
  
  )
}
export default MenuMovile;