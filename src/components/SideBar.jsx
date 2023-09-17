import React, { useState } from 'react'
import { BsBank, BsShop, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

export default function SideBar() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const links = [
        {
          title : "Linksss 1",
          icon : <BsBank />
        },
        {
          title : "Link 2",
          icon : <BsShop />
        },
        {
          title : "Link 3",
          icon : <BsFillHeartFill />
        },
    ]

  return (
    <nav id='sidebar' className={`bar${sideBarOpen ? " close" : ""}`}>
        <button className='sidebar_link closebtn' onClick={() => setSideBarOpen(!sideBarOpen)}>
            <span className='icon'>
                <AiOutlineRight />
            </span>
        </button>

        {
            links.map(({ title, icon }, index) => (
                <button key={index} className='sidebar_link'>
                    <span className='icon'>{icon}</span>
                    <span className='title'>{title}</span>
                </button>
            ))
        }
    </nav>
  )
}