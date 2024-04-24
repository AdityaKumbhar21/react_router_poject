import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-800 text-white m-4 p-5 rounded-xl text-3xl'>
      User: {userid}
    </div>
  )
}
