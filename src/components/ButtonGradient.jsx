import React from 'react'

export default function ButtonGradient({ customClass, children }) {
    return (
        <button className={`bg-gradient-to-r from-secondary via-primary to-primary text-white rounded-full ${customClass}`}>{children}</button>
    )
}
