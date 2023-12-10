import React from 'react';
import './AppSumo.css';
import Img from '../images/appsumo.png';
import Tick from '../images/tick.png';
import Landing1 from '../images/laptop-landing-1.png';
import Landing2 from '../images/laptop-landing-2.png';
import LinearBG from '../images/o5w80fim.png';

const AppSumo = () => {
    return (
        <div className='main'>
            <div className='AppSumo'>
                <img src={Img} alt="Logo" className='Logo'/>
                <div className='text'>Now on AppSumo</div>
                <button className='btn'>
                    <span>Get Lifetime Deal</span>
                    <div className="arrow">^</div>
                </button>
            </div>

            <div className='banner'>
                <div className='main-text'>Your second brain for maximizing productivity</div>
                <div className='slogan'>Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.</div>
                <div class="slider">
                    <div className='slide-track'>
                        <div class="slide"><img src={Tick} alt="Tick" className='tick'/>Summarize Key Findings</div>
                        <div class="slide"><img src={Tick} alt="Tick" className='tick'/>Compare Between Documents</div>
                        <div class="slide"><img src={Tick} alt="Tick" className='tick'/>Search For Answers</div>
                        <div class="slide"><img src={Tick} alt="Tick" className='tick'/>Ask In Any Language</div>
                    </div>
                </div>
                <div className='banner-btns'>
                    <button className='try-for-free-btn-2'>Try For Free</button>
                    <button className='view-pricing-btn'>View Pricing</button>
                </div>
            </div>

            <div className='ll1'>
                <img src={LinearBG} alt="Linear BG" className='linear-bg'/>
                <img src={Landing1} alt="Laptop Landing 1" className='laptop-landing-1'/>
            </div>

            <div className='mini-testmonial'>
                <div>Loved by <span>20,000+</span> users around the world</div>
                <img src={Landing2} alt="Laptop Landing 2" className='laptop-landing-2'/>
            </div>

        </div>
    );
};

export default AppSumo;
