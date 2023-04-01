import React, { useEffect, useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Modal from './Modal';
const Container = () => {
  const [users, setUsers] = useState([]);
  const [news, setNews] = useState('all');
  const [showmodal, setShowmodal] = useState();
  const [show, setShow] = useState(false);
    
  // const [news, setNews] = useState(users);
  useEffect(() => {
    const fetchUserData = async (category) => {
      const response = await fetch(`https://inshorts.deta.dev/news?category=${category}`);
      const users = await response.json();
      
      //console.log(users.data)
      setUsers(users.data);
      
    
    };
    fetchUserData(news)
    
  }, [news]);
  
  return (
    <div className='max-w-[1640px] m-auto px-4 py-5 top-32 '>
      
      <h1 className='flex font-sans font-bold'>Our News</h1>
      {/*filter row*/}
      <div className='flex flex-col lg:flex-row justify-between '>
        {/*filter type*/}
        <div>
          <div className='flex flex-wrap '>
            <button onClick={()=>setNews('all')}  className='bg-gray-300 m-1 hover:bg-green-700 hover:text-white border py-1 px-5 rounded font-semibold focus:bg-green-700 focus:text-white'>All</button>
            <button onClick={()=>setNews('science')} className='bg-gray-300 m-1 hover:bg-green-700 hover:text-white border py-1 px-5 rounded font-semibold  focus:bg-green-700 focus:text-white'>Science</button>
            <button onClick={()=>setNews('politics')}className='bg-gray-300 m-1 hover:bg-green-700 hover:text-white border py-1 px-5 rounded font-semibold  focus:bg-green-700 focus:text-white'>Politics</button>
            <button onClick={()=>setNews('world')}className='bg-gray-300 m-1 hover:bg-green-700 hover:text-white border py-1 px-5 rounded font-semibold  focus:bg-green-700 focus:text-white'>World</button>
          </div>
        </div>
      </div>
      {/* display news*/}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4 '>
        {users.map((item,index) => (
          <div key={index} className='shadow-lg hover:scale-105 duration-300'>
            <img src={item.imageUrl} alt={item.author} className='w-full h-[300px] object-cover rounded-t-lg'/>
            <div className='flex flex-col justify-center gap-3'>
              <p className='font-serif  font-bold'>{item.title}</p>
              <div className='flex text-green-700 gap-1 justify-normal '>
                <CalendarMonthIcon/>
                <p>{item.date}</p>
              </div>
              <p className='items-center top-2 font-sans text-gray-500 text-sm justify-center '>{item.content}</p>
              <div className='items-center gap-1 flex'>
                <button className='bg-transparent rounded border px-3 items-center p-2 text-green-700  border-green-700 hover:bg-green-600 hover:text-white' onClick={() => { setShowmodal(item); setShow(true); }}>Read More</button>
              </div>
              
            </div>
          </div>
        ))}
        {/* <Modal isVisible={showmodal} users={users[0].title} onClose={() => setShowmodal(false)}> */}
        {/* </Modal> */}
        {showmodal && (
            <Modal users={showmodal} onClose={() => setShow(false)} isVisible={show} />
          )}
      </div>
    </div>
  )
}

export default Container