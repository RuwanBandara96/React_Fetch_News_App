import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({isVisible,onClose,children,users}) => {
    if (!isVisible) return null;
    const handleClose = (e) => {
        if (e.target.id === 'wrap') onClose();
    }
  return (
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose} id="wrap">
          <div className='md:w-[500px] w-[90%] mx-auto flex flex-col'>
              <button className='text-white text-xl place-self-end' onClick={() => onClose()}><CloseIcon/></button>
              <img src={users.imageUrl} alt={users.author} className='w-full h-[300px] object-cover rounded-t-lg' />
              <p className='font-serif  font-bold text-white border text-xl'>{users.title}</p>
              
              <div className='bg-white p-8 rounded'>
                  <p className='text-blue-500 font-bold'>by:{users.author}/ {users.time} on {users.date}</p>
                  {users.content}
              </div>
              <div className='inset-x-1 bg-white p-3 rounded'>
                  <div className='gap-3 flex '>
                    {/* you can get more details from More Button(readMoreUrl)*/}
                    {/* <button className='bg-transparent rounded border px-3 items-center p-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white' href={users.readMoreUrl}>More..</button> */}
                    <button className='bg-transparent rounded border px-3 items-center p-2 text-blue-500 border-blue-500 hover:bg-red-600 hover:border-red-600  hover:text-white' onClick={()=>onClose()}>Close</button>
                </div>
            </div>
          </div>
          </div>
  )
}

export default Modal