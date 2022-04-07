import React from 'react'

export default function ButtonGradientBorder({ children, customClass }) {
    return (
        <button className="bg-gradient-to-b from-primary to-secondary rounded-full flex justify-center items-center py-0.5 px-0.5 group">
            <span className={`bg-white rounded-full group-hover:bg-transparent transition-colors duration-300 text-primary group-hover:text-white ${customClass}`}>{children}</span>
        </button>
    )
}
