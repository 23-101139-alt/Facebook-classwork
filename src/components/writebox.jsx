import React from 'react';
import '../components/writebox.css';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
import pic9 from '../assets/pic9.png';
import pic10 from '../assets/pic10.png';

const Writebox = () => {
    return ( 

        <div className='mainbox2-middele'>
            <div className='first-container-writebox'>
                <img  src={pic7} alt="profile"></img>
                <nav className='text-box-field'>
                    <h1 className='text-example' >What’s on your mind, Jenny</h1>
                </nav>
            </div>
            <div className='line'></div>
            <div className='part3-writebox'>
                <div className='optionbox-writebox'>
                    <img  src={pic8} alt="profile"></img>
                    <h2 className='text-optionbox-writebox'>Live video</h2>
                </div>
                 <div className='optionbox-writebox'>
                    <img  src={pic9} alt="profile"></img>
                    <h2 className='text-optionbox-writebox'>Photo/video</h2>
                </div>
                <div className='optionbox-writebox'>
                    <img  src={pic10} alt="profile"></img>
                    <h2 className='text-optionbox-writebox'>Feeling/activity</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Writebox;