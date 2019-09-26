import React from 'react'
import { Link } from 'react-router-dom'
export default function LaunchItem({
  onClick,
  launch: { flight_number, mission_name }
}) {
  return (
    <div>
      <Link to={`/launch/${flight_number}`}>
        {flight_number + ' - ' + mission_name}
      </Link>
    </div>
  )
}
