import '../Style/MoreT.css';

import React from 'react';

import GetAppIcon from '@mui/icons-material/GetApp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const MoreT = () => {
  return (
    <div className='moret'>

        <div className='moret_in'>
         <NotificationsIcon style={{color:'#deeaff'}}></NotificationsIcon>
         <p>Notification Preferences</p> 
        </div>
        <hr/>
        <div className='moret_in'>
            <MonetizationOn style={{color:'#deeaff'}}/>
            <p>Sell On Festival</p>

        </div>
        <hr/>
        <div className='moret_in'>
            <LiveHelpIcon style={{color:'#deeaff'}}/>
            <p>24*7 customer Care</p>

        </div>
        <hr/>
        <div className='moret_in'>
            <TrendingUpIcon style={{color:'#deeaff'}}/>
            <p>Advertise</p>

           </div>
           <hr/>
        <div className='moret_in'>
            <GetAppIcon style={{color:'#deeaff'}}/>
            <p>Download App</p>
        </div>
    </div>
  )
}

export default MoreT