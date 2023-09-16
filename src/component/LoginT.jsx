import '../Style/LoginT.css';

import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StoreIcon from '@mui/icons-material/Store';

const LoginT = () => {
  return (
    <div className='logint'>
        <div className="logint_in">
            <h3>New Customer?</h3>
            <h3 style={{color:'#deeaff'}}>Signup</h3>
        </div>
         <hr/>
        <div className="logint_in">
            <AccountCircleIcon style={{color:'#deeaff'}}/>
            <p>My Profile</p>
        </div>

         <hr/>
        <hr/>
        <div className="logint_in">
            <StoreIcon style={{color:'#deeaff'}}/>
            <p>Orders</p>
        </div>
        <hr/>
        <div className="logint_in">
         <FavoriteIcon style={{color:'#deeaff'}}/>
         <p>Wishlist</p>
        </div>
        <hr/>
        <div className="logint_in">
            <ConfirmationNumberIcon style={{color:'#deeaff'}}/>
            <p>Reward</p>

        </div>
        <hr/>
        <div className="logint_in">
        <CardGiftcardIcon style={{color:'#deeaff'}}/>
        <p>Gift Card</p>
        </div>
    </div>
  )
}

export default LoginT