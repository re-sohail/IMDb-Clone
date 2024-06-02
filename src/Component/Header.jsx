import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom' 

function Header() {
  return (
    <>
    <div className='w-full h-[90px] bg-black py-5 px-20 flex items-center justify-start gap-10'>
        <Link to={'/'}><img className='w-[100px]' src={logo} alt="" /></Link>
        <Link to={'/movies/popular'}><h1 className='cursor-pointer font-sm text-lg text-[#f5f5f5] transition-all ease-in hover:text-red-500'>Popular</h1></Link>
        <Link to={'/movies/top_rated'}><h1 className='cursor-pointer font-sm text-lg text-[#f5f5f5] transition-all ease-in hover:text-red-500'>Top Rated</h1></Link>
        <Link to={'/movies/upcoming'}><h1 className='cursor-pointer font-sm text-lg text-[#f5f5f5] transition-all ease-in hover:text-red-500'>Upcomming</h1></Link>
    </div>
    </>
  )
}

export default Header