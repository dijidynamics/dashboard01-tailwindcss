import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ isCollapsed }) => {
  return (


<div className={`
  bg-[#202938] h-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out
  ${isCollapsed ?  'w-16' : 'w-64'}`}>



      <div className='flex justify-center m-3'>
        {isCollapsed ? (

   <img src='/image/LOGO-small.png' alt='User'  className='h-[33px]' />
        ) : (
  <img src='/image/LOGO-DESIGN01.png' className='h-[33px]' />
        )}
    
  
      </div>
      <hr />
      <div>
        <ul className='space-y-2 pt-5'>
            {/* Main */}

            {!isCollapsed && (
  <li className="pl-5 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
    Main
  </li>
  )}
            <li>
              <Link to="/" className='text-[#bbc4d7] gap-4 p-1 pl-5'><i className='bx bx-home text-xl'></i>  {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '150ms',
      }}
    >
      
      Dashboard</span>}</Link> </li>
     
    
   
      <li>
              <Link to="/settings" className='text-[#bbc4d7] gap-2 p-1 pl-5'>
              
              <i className='bx bx-calendar text-xl'></i> {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '280ms',
      }}
    >Calendar</span>}</Link> </li>
     
      {/* Team Management */}
      {!isCollapsed && (
  <li className="pl-5 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
    Team Management
  </li>
  )}
         <li>
              <Link to="/agents" className='text-[#bbc4d7] gap-2 p-1 pl-5'><i className='bx bx-user-circle text-xl'></i> {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '150ms',
      }}
    >Agents</span>}</Link></li>
        
     <li>
              <Link to="/settings" className='text-[#bbc4d7] gap-2 p-1 pl-5'><i className='bx bx-id-card text-xl'></i> {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '280ms',
      }}
    >User Roles</span>}</Link> </li>

  {/* Call Operations */}
  {!isCollapsed && (
  <li className="pl-5 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
    Call Operations
  </li>
)}
    <li>
               <Link to="/calllogs" className='text-[#bbc4d7] gap-6 p-1 pl-5'><i className='bx bx-phone-call text-xl'></i>  {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '150ms',
      }}
    >Call Logs</span>}</Link> </li>

            <li>
              <Link to="/reports" className='text-[#bbc4d7] gap-2 p-1 pl-5'><i className='bx bx-bar-chart-alt-2 text-xl'></i>  {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '150ms',
      }}
    >Reports</span>}</Link></li>
      <li>
              <Link to="/settings" className='text-[#bbc4d7] gap-2 p-1 pl-5'><i className='bx bx-check-shield text-xl'></i> {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '280ms',
      }}
    >QA & Feedback</span>}</Link> </li>

      {/* Knowledge & Settings */}
{!isCollapsed && (
  <li className="pl-5 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
    Resources & Settings
  </li>
)}
            <li>
              <Link to="/settings" className='text-[#bbc4d7] gap-2 p-1 pl-5'><i className='bx bx-book text-xl'></i> {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '280ms',
      }}
    >Knowledge Bank</span>}</Link> </li>
      <li>
              <Link to="/tasks" className='text-[#bbc4d7] gap-2 p-1 pl-5'><i className='bx bx-task text-xl'></i> {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '150ms',
      }}
    >Tasks</span>}</Link> </li>
     <li>
              <Link to="/settings" className='text-[#bbc4d7] gap-2 p-1 pl-5'><i className='bx bx-cog text-xl'></i> {!isCollapsed &&  <span
      className={`transition-all duration-300 ease-in-out origin-left ${
        isCollapsed ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
      }`}
      style={{
        display: isCollapsed ? 'none' : 'inline-block',
        transitionDelay: isCollapsed ? '0ms' : '280ms',
      }}
    >Settings</span>}</Link> </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
