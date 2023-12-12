import React from 'react';
import Landing20 from '../images/laptop-landing-20.png';
import Landing16 from '../images/laptop-landing-16.png';
import './FAQs.css';

const FAQs = () => {
    return (
        <div className='wrapper'>
            <div className='section-r2' style={{gap: '55px'}}>
                <div className='section-text' style={{gap: '25px'}}>
                    <div className='text-btn-purple'>My promise to you</div>
                    <div className='section-title'>100% money back guaranteed if you are not satisfied</div>
                    <div className='section-paragraph'>We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.</div>
                </div>
                <div className='section-image-20'>
                    <img src={Landing20} alt="Landing 20" className='landing20'/>
                </div>
            </div>
            <div className='section-c1'>
                <div className='section-text-c1'>
                    <div className='section-title-c'>Start saving time today!</div>
                    <div className='section-paragraph-c1'>Join an ever-growing community, and get with Afforai started free of charge!</div>
                    <button className='try-for-free-btn-3'>Get Started for Free</button>
                </div>
                <div className='section-image1'>
                    <img src={Landing16} alt="Landing 19" className='landing-19'/>
                </div>
            </div>

            <div class="faq cta">
                <h1>FAQs</h1>
                <p>For more information, check out our <a href="https://help.afforai.com/">Help Center</a></p>

                <div class="questions">

                    <div class="question">
                        <input type="checkbox" id="q1"></input>
                        <label class="header" for="q1">
                            <div>Is Afforai free?</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>                      
                        </label>
                        <div class="answer">
                            Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits.
                        </div>
                    </div>

                    <div class="question">
                        <input type="checkbox" id="q2"></input>
                        <label class="header" for="q2">
                            <div>What are subscription credits versus permanent credits?</div>      
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>                      
                        </label>
                        <div class="answer">
                            Subscription credits come from monthly payments, while permanent credits come from top-ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.
                        </div>
                    </div>

                    <div class="question">
                        <input type="checkbox" id="q3"></input>
                        <label class="header" for="q3">
                            <div>Does Afforai support storing documents on the cloud like Google Drive, One Drive, or Drop Box?</div>      
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>                      
                        </label>
                        <div class="answer">
                            Currently, Afforai only supports uploading local documents and websites. In the near future, we will integrate these cloud solutions. Sign up with us to get updated.
                        </div>
                    </div>
                    <div class="question">
                        <input type="checkbox" id="q4"></input>
                        <label class="header" for="q4">
                            <div>Does Afforai support uploading images and video?</div>   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>                      
                        </label>
                        <div class="answer">
                            Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.
                        </div>
                    </div>
                    <div class="question">
                        <input type="checkbox" id="q5"></input>
                        <label class="header" for="q5">
                            <div>Does Afforai support collaboration between accounts?</div>     
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>                      
                        </label>
                        <div class="answer">
                            Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.
                        </div>
                    </div>
                    <div class="question">
                        <input type="checkbox" id="q6"></input>
                        <label class="header" for="q6">
                            <div>Is my data secured?</div>    
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>                      
                        </label>
                        <div class="answer">
                            Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default FAQs;