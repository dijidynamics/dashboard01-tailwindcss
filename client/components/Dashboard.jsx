import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import CallVolumeChart from './CallVolumeChart';
import ServiceLevelChart from './ServiceLevelChart';
import CallDistributionPie from './CallDistributionPie';
import AgentPerformance from './AgentPerformance';
import CallResolution from './CallResolution';
import CustomerFeedback from './CustomerFeedback';
import AgentAvailability from './AgentAvailability';
import AgentProductivityChart from './AgentProductivityChart';
import CallResolutionRateChart from './CallResolutionRateChart';
import CallVolumeByChannel from './CallVolumeByChannel';
import CallVolumeByTeam from './CallVolumeByTeam';

const Dashboard = () => {
// STEP 1: State for sidebar toggle
 {/*  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); */}  

  return (
    
    <div className='w-full bg-[#e5e8eb] min-h-screen px-3 py-3'>
    {/* <Sidebar isCollapsed={isSidebarCollapsed} /> */}  
      {/*  <div className={`flex-1 ${isSidebarCollapsed ? 'ml-18' : 'ml-64'}`}>
           <Navbar toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} /> */}  

              {/* dashboard page */}

             <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4'>

              <div className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-5 flex md:justify-between md:items-center lg:justify-between lg:items-center'>
                <div>
                     <span className="block sm:hidden">TOT. CALLS</span> <span className="hidden sm:block">TOTAL CALLS</span>
         
                
            
                <span className='lg:text-3xl md:text-3xl sm:text-xl font-bold text-[#5e5f62] pt-4'>38</span> <br></br>
                <span className='bg-green-600 text-sm text-white pl-2 pr-2 rounded-md'>4 %</span> <span>Today</span>
                </div>
               <span > <i className='bx bx-phone-call lg:text-4xl text-gray-400 block md:text-4xl '></i></span>
                </div>

              <div className='bg-white shadow-1xl rounded-md border-x border-[#e5e7eb]   p-5 flex md:justify-between md:items-center lg:justify-between lg:items-center'>
               <div>               
              <span className="block sm:hidden">AVG. WAIT TIME</span>
          <span className="hidden sm:block">AVERAGE WAIT TIME</span>
             
                 <span className='lg:text-3xl md:text-3xl sm:text-xl font-bold text-[#5e5f62] pt-4'>3.24</span> <br></br>
                <span className='bg-red-500  text-sm  text-white pl-2 pr-2 rounded-md'>8%</span> Today
               </div>
                <i className='bx bx-time-five lg:text-4xl text-gray-400 block md:text-3xl'></i>
                </div> 

              <div className='bg-white shadow-1xl rounded-md border-x border-[#e5e7eb]   p-5 flex md:justify-between md:items-center lg:justify-between lg:items-center'>
                <div> <span className="block sm:hidden">ABAN. RATE</span>
          <span className="hidden sm:block">ABANDONMENT RATE</span>          
                 <span className='lg:text-3xl md:text-3xl sm:text-xl font-bold text-[#5e5f62] pt-4'>5.2 %</span>  <br></br>
                <span className='bg-green-500 text-sm  text-white pl-2 pr-2 rounded-md'>1.3 %</span> This week
                </div>
                 <i className='bx bx-error-alt lg:text-4xl text-gray-400 block md:text-3xl'></i>
                </div>

              <div className='bg-white shadow-1xl rounded-md border-x border-[#e5e7eb]    p-5 flex md:justify-between md:items-center lg:justify-between lg:items-center'>
                <div>
                <span className='text-sm'>CALLS IN QUEUE</span>
                <br></br>
                 <span className='lg:text-3xl md:text-3xl sm:text-xl font-bold text-[#5e5f62] pt-4'>8</span>  <br></br>
                <span className='bg-green-500 text-sm  text-white pl-2 pr-2 rounded-md'>6 %</span> Live
                  </div>
                   <i className='bx bx-list-check lg:text-4xl text-gray-400 block md:text-3xl'></i>

                </div>

                </div>
                   

                

                {/* Charts */}
            <div class="grid grid-cols-1 sm:grid:cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 pt-3 pb-3  ">
              <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-1'>                
                <CallVolumeChart />
              </div>
         
                 <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className='bg-white rounded-md  border-x border-[#e5e7eb] p-1'>
                    
                     <ServiceLevelChart />
                  </div>
                  <div className='bg-white rounded-md  border-x border-[#e5e7eb] p-2'>
                     <div >
                    <CallDistributionPie />
                    </div>
                  </div>
                 </div>
        
            </div>

            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-3 pb-3 ">
                <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-5'>  
                  <AgentPerformance />
                  </div>
                         <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-5'>  
                <CallResolution />
                  </div>
                    <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-5'>  
                <CustomerFeedback />
                  </div>
                    <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-5'>  
               <AgentAvailability />
                  </div>
            </div>

          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-3 pb-3 ">
   
                 <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-1'> 
              <CallResolutionRateChart />
              </div>
                 <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-1'> 
              <CallVolumeByChannel />
              </div>
                 <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-1'> 
              <CallVolumeByTeam />
              </div>
              <div  className='bg-white shadow-1xl rounded-md  border-x border-[#e5e7eb] p-1'> 
              <AgentProductivityChart />
              </div>

            </div>

      </div>    

  )
}

export default Dashboard
