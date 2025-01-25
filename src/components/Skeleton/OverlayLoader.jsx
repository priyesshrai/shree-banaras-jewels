import React from 'react'
import './Skeleton.css'

export default function
    () {
    return (
        <div className='overlay'>
            <div className="overlay-wraper">
                <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
        </div>
    )
}
