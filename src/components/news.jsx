import React from 'react';
import '../components/news.css'
import pic16 from '../assets/pic16.png';


const Newscard = () => {
    return ( 
        <div className='newscard'>
             <img className='pic-news'  src={pic16} alt="pic"></img>
             <div className='maincontent-group-news'>
                <h1 className='title-news'>Twitch apologises as streamers</h1>
                <p className='para-news'>Twitch has apologised, after a backlash over new,
                    advertising rules.</p>
                <a href='#' className='link-news'>See more</a>
             </div>
        </div>
     );
}
 
export default Newscard;