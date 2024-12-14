import React from 'react'
import "./Menubar.css"

const Menubar = () => {
  return (
    <div className='menubar'>
      <div className='menubar1'>
        <div className='menubar2'>
            <img src='https://bradsol.com/wp-content/uploads/2021/08/bradsol-logo2.png' style={{width: "55%", height: "40%"}}/>
        </div>
        <div className='menubar3'>
            <div>Home</div>
            <div>Capabilities</div>
            <div>How we Engage</div>
            <div>Solutions</div>
            <div>Partners</div>
            <div>Resources</div>
            <div>Company</div>
            <div>Contact Us</div>
        </div>
        <div className='bar'>
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  )
}

export default Menubar
