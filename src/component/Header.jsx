import '../Style/Header.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import React,{useState,useEffect} from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Tippy from '@tippyjs/react';

import LoginT from './LoginT';
import MoreT from './MoreT';

const Header = () => {
    const placeholders = ["Serach For Real state Agent", "Search in Pune", "Search for Restaurants"];
    const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  
    useEffect(() => {
      // Function to change the placeholder text
      const changePlaceholder = () => {
        const randomIndex = Math.floor(Math.random() * placeholders.length);
        setCurrentPlaceholder(placeholders[randomIndex]);
      }
  
      // Run the function on page load
      changePlaceholder();
    }, []);
  return (
    <div className='header'>
        <div className="header_first">
            <img src="https://static.wixstatic.com/media/3b3244_ca3d5d1b6c704a49b665c0090b52a196~mv2.png/v1/fit/w_2500,h_1330,al_c/3b3244_ca3d5d1b6c704a49b665c0090b52a196~mv2.png" alt="NVBRlogo" />
        </div>
        <div className="header_six">
            <input placeholder={currentPlaceholder} type="text" />
            <LocationOnIcon />
        </div>
        <div className="header_second">
            <input placeholder={currentPlaceholder} type="text" />
            <SearchIcon/>
        </div>
        <div className="header_fourth">
            <Tippy theme='light' content={<MoreT/>} interactive={true}>
            <span>More</span>
            </Tippy>
            <ExpandMoreIcon/>
        </div>
        <div className="header_third">
            <Tippy theme='light'  content={<LoginT/>} interactive={true}>
            <button>Login</button>
            </Tippy>  
        </div>

    </div>
  )
}

export default Header