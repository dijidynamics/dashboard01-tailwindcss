import React, { useState } from 'react'

const Navbar = ({ toggleSidebar, windowWidth }) => {

    const [showDropdown, setShowDropdown] = useState(false);

  return (
<nav className='bg-white w-full px-2 py-2 md:px-4 md:py-3 flex justify-between items-center '>
      <div className='flex items-center'>

   {/* Hide toggle button in mobile if needed 
        {windowWidth >= 940 && (
          <button onClick={toggleSidebar} className="mr-2">
            <i className="bx bx-menu text-2xl cursor-pointer text-[#000]"></i>
          </button>
        )}*/}
       <button onClick={toggleSidebar} className="hidden sm:block">
       <i className='bx bx-menu text-2xl cursor-pointer text-[#000]'></i>
        </button>



              <span className='text-base sm:text-lg md:text-xl ml-2'>
          <span className="block sm:hidden">CC Dashboard</span>
          <span className="hidden sm:block">Call Center Dashboard</span>
        </span>
      </div>
            <div className='relative flex items-center gap-x-5'>
            <div>
                <span> <i className='bx bx-bell text-2xl text-gray-700 cursor-pointer'></i></span>
            </div>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setShowDropdown(!showDropdown)}>
            <img src='/image/profile-icon.jpg' alt='User' className='w-9 h-9 rounded-full border border-gray-400' />
           
          

         <span className='hidden sm:inline text-sm font-medium text-[#202938]'>Ivana Martin</span>
            </div>
            
           {/* dropdwon */}
          {showDropdown && (
           <div className='absolute top-full mt-4 right-0 bg-white shadow rounded w-40 z-10'>
            <ul className='text-sm text-gray-700'>
                <li className='px-4 pl-4 pt-3 text-gray-800'><i class='bx  bx-user'  ></i>  Profile</li>
                <li className='px-4 pl-4 pt-3 text-gray-800'><i class='bx  bx-cog'  ></i>  Setting</li>
                <li className='px-4 pl-4 pt-3 text-gray-800'><i className='bx bx-log-out'></i> Logout</li>
            </ul>
            </div>
          )}
            
            </div>
    </nav>
  )
}

export default Navbar
