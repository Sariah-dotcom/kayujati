import React from 'react'
import { RiMenu4Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

export default function Header() {
  return (
    <nav className='flex justify-between p-5 items-center'>
        <RiMenu4Line className='icons' />
        <h1 className='font-goudy font-bold text-3xl'>kayujati</h1>

        <div className='flex gap-5'>
            <FiSearch className='icons'/>
            <BsHandbag className='icons' />
            <IoPersonOutline className='icons' />
        </div>
    </nav>
  )
}
