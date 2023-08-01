import React from 'react'
import {BsArrowClockwise} from 'react-icons/bs'

function Random({random,cardLocation}) {
  return (
    <div>
      <button
        type="submit"
        className="inline-flex items-center px-3 py-3 border border-transparent text-xl font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 hover:animate-spin "
        onClick={()=>random(cardLocation)}
      >
        <BsArrowClockwise/>
      </button>
    </div>
  )
}

export default Random