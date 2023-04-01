import React,{useState} from 'react'
import logo from '../images/logo.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import MenuItems from './MenuItems';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const show = () => {
    setActive(!active)
  }
    return (
        <div className='fixed bg-white items-center flex justify-between p-1 ms-0 me-5 border-b-1 border w-full top-0'>
            <div className='flex flex-row py-1 items-center'>
                <div className='items-center flex flex-row gap-1'>
                    <img src={logo} alt="logo" width="100" className='cursor-pointer ' />  
                </div>
                <div className='relative'>   
                    <SearchOutlinedIcon className='absolute left-3 top-2 text-gray-300' />
                    <input type="text" className='p-2 bg-gray-100 rounded-lg w-60 pl-10 align-middle' placeholder='Search...' />
                </div>   
            </div>
        <nav className='items-center '>
          <div className='absolute left-1 items-center top-4 '>
            <MenuOutlinedIcon onClick={show} />
          </div>
                <ul className='hidden md:flex gap-5'>
                    <li>
                        <a className='cursor-pointer' href='/'>
                          <HomeOutlinedIcon />
                          <p className='text-xs '>Home</p>
                        </a>
                    </li>
                    <li>
                      <a className='cursor-pointer' href='/'>
                        <HandshakeOutlinedIcon/>
                        <p className='text-xs '>Partners</p>
                      </a>
                    </li>
                    <li>
                      <a className='cursor-pointer' href='/'>
                        <CollectionsOutlinedIcon/>
                        <p className='text-xs '>Digital Assets</p>
                      </a>
                    </li>
                    <li>
                      <a className='cursor-pointer' href='/'>
                        <PublicOutlinedIcon/>
                        <p className='text-xs '>Dilmah Universe</p>
                      </a>
                    </li>                                                              
          </ul>
          <MenuItems show={show} active={active} />
            </nav>
        </div>
  )
}

export default Navbar