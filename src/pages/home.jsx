import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import Headerr from '../components/header';
import Ctaa from '../components/button';
import pic1 from '../assets/pic1.png';
import Asidee from '../components/watch';
import Buttonimgg from '../components/buttonimg';
import Cardpic1 from '../components/cardpic';
import Writebox from '../components/writebox';
import Postt from '../components/post';
import  Titlee from '../components/title';
import  Requsttcard from '../components/friendrequest';
import  Newscard from '../components/news';


const Home = () => {
    return ( 
        <>

            <header className='headerr'>
                    <img src={pic1} alt="header"  />
                    <nav className='container-icons'>
                     <Headerr />
                     <Headerr />
                     <Headerr />
                     <Headerr />
                     </nav>
                     <div className='emptydiv'></div>
            </header>
           <main className='mainn'>
                <section className='left-bar'>
                     <Ctaa />
                     <aside className='iconplustext'>
                        <Asidee />
                        <Asidee />
                        <Asidee />
                        <Asidee />
                    </aside>

                      <aside className='container-leftpart-colum1'>
 
                        <Titlee />
                        <button className='button-img-text-last-one-aside'>
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                        </button>
                    </aside>

                     <aside>

                     </aside>
                </section>

                <section className='sec2'>
                    <div className='box1-middle'>
                        <Cardpic1 />
                        <Cardpic1 />
                        <Cardpic1 />
                        <Cardpic1 />
                    </div>

                   
                    <Writebox />

                    <div className='posts-group'>
                        <Postt />
                        <Postt />
                        <Postt />
                    </div>
                </section>

                <section className='colum3'>
                    <aside className='friendrequestbox'>
                        <Titlee />
                        <div className='cards-cont-friends-requst'>
                            <Requsttcard />
                            <Requsttcard />
                        </div>
                    </aside>
                    <aside className='friendrequestbox2'>
                        <Titlee />
                        <div className='new-big-container'>
                        <Newscard />
                        <Newscard />
                        <Newscard />
                        <Newscard />
                        <Newscard />
                        <Newscard />
                        
                        </div>
                    </aside>
                </section>

        


           </main>

        </>
       
     );
}
 
export default Home;