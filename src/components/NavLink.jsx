import React from 'react'

export default function NavLink({ title, link }) {
    return (
        <a href={link} style={{ fontSize: '18px' }} className='group font-medium translate-y-1 flex flex-col items-center space-y-0.5'>
            <span className='group-hover:text-primary transition-colors duration-300'>{title}</span>
            <span className='w-0 h-[0.2rem] bg-primary rounded-full group-hover:w-1/2 transition-all duration-300'></span>
        </a>
    )
}
