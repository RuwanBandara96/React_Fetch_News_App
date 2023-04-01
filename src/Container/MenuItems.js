import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const MenuItems = ({show,active}) => {
  return (
    <ul className={active ? 'flex flex-col items-center fixed inset-0 justify-center left-1/4 bg-black/40 backdrop-blur-lg gap-8 md:hidden': 'hidden'}>
     <CloseOutlinedIcon onClick={show} className='font-bold text-white' />     
    <li>
        <a className='cursor-pointer flex-row flex font-bold text-white ' href=''>
          <HomeOutlinedIcon />
          <p className='text-lg '>Home</p>
        </a>
    </li>
    <li>
      <a className='cursor-pointer flex-row flex font-bold text-white ' href=''>
        <HandshakeOutlinedIcon/>
        <p className='text-lg '>Partners</p>
      </a>
    </li>
    <li>
      <a className='cursor-pointer flex-row flex font-bold text-white ' href=''>
        <CollectionsOutlinedIcon/>
        <p className='text-lg'>Digital Assets</p>
      </a>
    </li>
    <li>
      <a className='cursor-pointer flex-row flex font-bold text-white ' href=''>
        <PublicOutlinedIcon/>
        <p className='text-lg'>Dilmah Universe</p>
      </a>
    </li>                                                             
</ul>
  )
}

export default MenuItems