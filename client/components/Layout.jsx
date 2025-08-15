import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({children}) => {

      const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); 


  // Collapse sidebar automatically on small screens
useEffect(() => {
  const handleResize = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const width = window.innerWidth;
    console.log('Device:', isMobile ? 'Mobile' : 'Desktop', 'Width:', width);

    if (width < 1050) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
  };

  handleResize(); // Run on initial load
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);


//const contentMargin = isSidebarCollapsed ? 'sm:ml-64 md:ml-14 lg:ml-14' : 'ml-64 sm:ml-64';
  
  // Dynamic content margin
  const contentMargin = isSidebarCollapsed
    ? 'ml-16 sm:ml-14 md:ml-14 lg:ml-14' // small margin when collapsed
    : 'ml-16 sm:ml-64'; // full margin when expanded on desktop

  return (
<div className="flex h-screen w-full overflow-x-auto">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className={`flex-1  w-full transition-all duration-300 ${contentMargin}`}>
        <Navbar toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
        <main className="w-full">
          <div className="w-full  mx-auto px-0">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Layout

{/*

 What are props in React?
Props = short for "properties"
They are like function arguments, but for React components.

You use props to:
✅ Pass data from parent to child component
✅ Customize how a component behaves or looks
✅ Make components reusable

 */}