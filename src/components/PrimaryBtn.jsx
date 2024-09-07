import React from 'react'
import { Link } from 'react-router-dom'

function PrimaryBtn() {
  return (
    <div>
      <Link 
            to="" 
            className="inline-block bg-secondary font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 text-white"
          >
            Shop now
          </Link>
    </div>
  )
}

export default PrimaryBtn
