import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/sohailfiza')
  console.log(response.json);
  return response.json()
}

function Github() {
    const data = useLoaderData()
    console.log(data);
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Name: {data.name}
      <img src={data.avatar_url} alt="Git picture" width={300} className='rounded' />
    </div>
  )
}

export default Github