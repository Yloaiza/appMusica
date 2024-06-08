import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div className='bg-slate-200 flex justify-evenly py-2'>
            <img className='w-36'  src="https://medellinciudaddemusica.com/wp-content/uploads/2023/09/logo-medellin-ciudad-de-musica-hd.webp" alt="" />
            <Link className='py-6' to="/login">login</Link>
            <Link className='py-6' to="/register">register</Link>
    </div>
  )
}
