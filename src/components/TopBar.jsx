import React from 'react'

export default function TopBar() {
    const links = [
        {
          title : "Link 1"
        },
        {
          title : "Link 2"
        },
        {
          title : "Link 3"
        },
    ]
  return (
    <nav id='topbar' className='bar'>
        <div className='topbar_links'>
            {
                links.map(({title}, index) => (
                    <button key={index} className='topbar_link'>
                        <span>{title}</span>
                    </button>
                ))
            }
        </div>
    </nav>
  )
}
