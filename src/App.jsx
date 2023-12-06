import { useState } from 'react'
import { Avatar } from '@chakra-ui/react'
import { GoDotFill } from "react-icons/go";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-wrapper'>
      <div className='main-notif'>
        <div className='header'>
          <h1 style={{fontWeight: 'bold'}}>Notifications</h1>
          <div id='num-notif'>
            3
          </div>
          <p id='mark-read'>Mark all as read</p>
        </div>
        
        <br>
        </br>

        <div className='row'>
          <Avatar src='assets/images/avatar-mark-webber.webp'/>
          <div className='row-content'>
            <p><b>Mark Webber</b> reacted to your recent post <span id='post-highlight'>My first tournament today!</span></p>
            <p id='time'>1m ago</p>
          </div>
          <GoDotFill  id='red-dot'/>
        </div>

        <br></br>

        <div className='row'>
          <Avatar src='assets/images/avatar-angela-gray.webp' />
          <div className='row-content'>
            <p><b>Angela Gray</b> followed you</p>
            <p id='time'>5m ago</p>
          </div>
          <GoDotFill  id='red-dot'/>
        </div> 

        <br></br>

        <div className='row'>

        </div> 
      </div>
    </div>
  )
}

export default App
