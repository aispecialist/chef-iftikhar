import React from 'react'
import { Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div className=' my-4 p-4 rounded container bg-warning'>
    <h1 className='my-3 p-4 rounded text-center container bg-danger text-primary'>404-PAGE NOT FOUND</h1>
    <p className='p-2 text-center rounded container'>There is some sort of issue in request or server</p>
    <p className='my-2 p-2 text-center rounded container bg-white'>Go back to <Link to="/">Home</Link> </p>
</div>
  )
}

export default NotFound