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
                        <div className='box1-part3-aside'>
                            <h1 className='title-font'>Title</h1>
                            <nav className='link-seemore-font' >See all</nav>
                        </div>
                        <button className='button-img-text-last-one-aside'>
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                            <Buttonimgg />
                        </button>

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



           </main>

        </>
       
     );
}
 
export default Home;