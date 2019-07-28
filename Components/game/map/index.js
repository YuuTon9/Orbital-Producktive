import React from 'react'
import background from './background.png'

function Map(props) {
  return (
    <div>
    <div
      style = {{
        width: '1408px',
        height: '832px',
        backgroundImage: `url('${background}')`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      }}>


    </div>

    </div>
  )
}

export default Map
