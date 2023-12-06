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

        <div className='row row-inactive'>
          <Avatar src='assets/images/avatar-mark-webber.webp'/>
          <div className='row-content'>
            <p><span className='name'>Mark Webber</span> reacted to your recent post <span id='post-highlight'>My first tournament today!</span></p>
            <p id='time'>1m ago</p>
          </div>
          <GoDotFill  id='red-dot'/>
        </div>

        <br></br>

        <div className='row row-inactive'>
          <Avatar src='assets/images/avatar-angela-gray.webp' />
          <div className='row-content'>
            <p><span className='name'>Angela Gray</span> followed you</p>
            <p id='time'>5m ago</p>
          </div>
          <GoDotFill  id='red-dot'/>
        </div> 

        <br></br>

        <div className='row row-inactive'>
          <Avatar src='assets\images\avatar-jacob-thompson.webp' />
          <div className='row-content'>
            <p><span className='name'>Jacob Thompson</span> has joined your group Chess Club </p>
            <p id='time'>1 day ago</p>
          </div>
          <GoDotFill  id='red-dot'/>
        </div> 

        <br></br>

        <div className='row row-active'>
          <Avatar src='assets\images\avatar-rizky-hasanuddin.webp' />
          <div className='row-content'>
            <p><span className='name'>Rizky Hasanuddin</span> sent you a private message</p>
            <p id='time'>5 days ago</p>
            <div className='private-message'>
              <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having
                lots of fun and improving my game</p>
            </div>
          </div>
        </div>

        <br></br>

      </div>
    </div>
  )
}

export default App
