import React from 'react'
import WidgetsGrid from '@/components/dashboard/WidgetsGrid'
function MainPage() {
  return (
    <div className='text-black'>
      <h1>Dashboard</h1>
      <span className='text-xl'>Información general</span>
      <WidgetsGrid/>
    </div>
  )
}

export default MainPage
