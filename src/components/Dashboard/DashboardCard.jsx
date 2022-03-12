import React from 'react'

function DashboardCard({name,text}) {
  return (
    <div className={`${name}-Dashboard`}>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>Up Coming {name}</p>
        <div className={`upcoming-${name}`}>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default DashboardCard