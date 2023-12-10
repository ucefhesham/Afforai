import React from 'react';
import './Sections.css';
import Landing4 from '../images/laptop-landing-4.png';
import Landing5 from '../images/laptop-landing-5.png';
import Landing6 from '../images/laptop-landing-6.png';
import Landing7 from '../images/laptop-landing-7.png';
import Landing8 from '../images/laptop-landing-8.png';
import Landing9 from '../images/laptop-landing-9.png';
import Landing10 from '../images/laptop-landing-10.png';
import Landing11 from '../images/laptop-landing-11.png';
import Landing12 from '../images/laptop-landing-12.png';
import Landing13 from '../images/laptop-landing-13.png';
import Landing14 from '../images/laptop-landing-14.png';
import Landing15 from '../images/laptop-landing-15.png';
import Landing17 from '../images/laptop-landing-17.png';
import Landing18 from '../images/laptop-landing-18.png';
import Landing19 from '../images/laptop-landing-19.png';
import CircleTick from '../images/circle-tick.svg';
import FastForward from '../images/fast-forward.svg';
import SerachPlus from '../images/search-plus.svg';
import PowerOff from '../images/power-off.svg';

const Sections = () => {
    return (
        <div className='container'>
            <div className='section-r'>
                <div className='section-text'>
                    <div className='section-title'>Say goodbye to long, tiresome documents</div>
                    <div className='section-paragraph'>Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.</div>
                    <div className='section-list'>
                        <ul className='list'>
                            <li className='list-item'><img src={CircleTick} alt="Circle Tick" className='circle-tick'/>A whip smart research assistant</li>
                            <li className='list-item'><img src={CircleTick} alt="Circle Tick" className='circle-tick'/>We speak every language</li>
                            <li className='list-item'><img src={CircleTick} alt="Circle Tick" className='circle-tick'/>Reliable data citation for answers</li>
                            <li className='list-item'><img src={CircleTick} alt="Circle Tick" className='circle-tick'/>Fort-Knox level data security</li>
                        </ul>
                    </div>
                </div>
                <div className='section-image'>
                    <img src={Landing4} alt="Landing 4" className='landing-4'/>
                </div>
            </div>
            <div className='section-c'>
                <div className='section-text-c'>
                    <div className='text-btn-purple'>10x your productivity</div>
                    <div className='section-title-c'>Save yourself from stress & streamline your workflow</div>
                    <div className='section-paragraph-c'>The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).</div>
                </div>
                <div className='section-image-c'>
                    <img src={Landing5} alt="Landing 5" className='landing-5'/>
                </div>
            </div>

            <div className='section-c'>
                <div className='section-text-c'>
                    <div className='text-btn-purple'>Why choose us?</div>
                    <div className='section-title-c'>Built for the user</div>
                    <div className='section-paragraph-c' style={{ maxWidth: '450px', lineHeight: '0.9' }}>Afforai is where exceptional customer focus meets exceptional technology.</div>
                </div>
                <div className='section-images'>
                    <div className='section-1'>
                        <div className='sub-section-1'>
                            <img src={Landing6} alt="Landing 6" className='landing-6'/>
                            <div className='sub-section-title'>Cross Language Querying <div className='new'>New</div> </div>
                            <div className='sub-section-paragraph'>Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.</div>
                        </div>
                        <div className='sub-section-2'>
                            <img src={Landing7} alt="Landing 7" className='landing-7'/>
                            <div className='sub-section-title'>Multiple file types supported</div>
                            <div className='sub-section-paragraph'>Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!</div>
                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='section-3'>
                            <div className='sub-section-3'>
                                <img src={Landing8} alt="Landing 8" className='landing-8'/>
                                <div className='sub-section-title'>Valuable Data Citation <div className='new'>New</div> </div>
                                <div className='sub-section-paragraph'>Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.</div>
                            </div>
                            <div className='sub-section-4'>
                                <img src={Landing10} alt="Landing 10" className='landing-8'/>
                                <div className='sub-section-title'>Built in Document Viewer</div>
                                <div className='sub-section-paragraph'>Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.</div>
                            </div>
                        </div>
                        <div className='sub-section-5'>
                                <img src={Landing9} alt="Landing 9" className='landing-9'/>
                            <div className='sub-section-title'>Unbreakable Security</div>
                            <div className='sub-section-paragraph'>Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. <a href='/'>Learn more.</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-r' style={{gap: '55px'}}>
                <div className='section-text' style={{gap: '25px'}}>
                    <div className='text-btn-purple'>Most versatile</div>
                    <div className='section-title'>Create multiple chatbots for different purposes</div>
                    <div className='section-paragraph'>Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.</div>
                    <div className='banner-btns'>
                        <button className='try-for-free-btn-2'>Get Started</button>
                        <button className='view-pricing-btn'>View Pricing</button>
                    </div>
                </div>
                <div className='section-image'>
                    <img src={Landing11} alt="Landing 11" className='landing-4'/>
                </div>
            </div>
            <div className='section-r' style={{gap: '55px'}}>
                <div className='section-image'>
                    <img src={Landing12} alt="Landing 12" className='landing-4'/>
                </div>
                <div className='section-text' style={{gap: '25px'}}>
                    <div className='text-btn-purple'>Different Modes Available</div>
                    <div className='section-title'>Customize your assistant with a range of different modes</div>
                    <div className='section-paragraph'>Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).</div>
                    <div className='section-list'>
                        <ul className='list'>
                            <li className='list-item-1'>
                                <div className='list-title'><img src={FastForward} alt="Circle Tick" className='circle-tick'/>Fast Mode (default)<div className='credit'>1 credit</div></div>
                                <div className='list-paragraph'>Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).</div>
                            </li>
                            <li className='list-item-1'>
                                <div className='list-title'><img src={PowerOff} alt="Circle Tick" className='circle-tick'/>Powerful Mode<div className='credit'>4 credit</div></div>
                                <div className='list-paragraph'>Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).</div>
                            </li>
                            <li className='list-item-1'>
                                <div className='list-title'><img src={SerachPlus} alt="Circle Tick" className='circle-tick'/>Google Mode<div className='credit'>5 credit</div></div>
                                <div className='list-paragraph'>Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='section-r' style={{gap: '55px'}}>
                <div className='section-text' style={{gap: '25px'}}>
                    <div className='text-btn-purple'>Multiple Language Supported</div>
                    <div className='section-title'>Regardless of where you are from, Afforai is for you</div>
                    <div className='section-paragraph'>We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.</div>
                </div>
                <div className='section-image'>
                    <img src={Landing13} alt="Landing 13" className='landing-4'/>
                </div>
            </div>

            <div className='section-r' style={{gap: '55px'}}>
                <div className='section-image'>
                    <img src={Landing14} alt="Landing 14" className='landing-4'/>
                </div>
                <div className='section-text' style={{gap: '25px'}}>
                    <div className='text-btn-purple'>Get more out of your files</div>
                    <div className='section-title'>File Wizard - a game changing new feature</div>
                    <div className='section-paragraph'>Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.</div>
                </div>
            </div>

            <div className='section-c'>
                <div className='section-text-c'>
                    <div className='text-btn-purple'>Seamless Integrations - Coming Soon</div>
                    <div className='section-title-c'>Upload Files directly from Google Drive, One Drive & Dropbox</div>
                    <div className='section-paragraph-c'>Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred</div>
                </div>
                <div className='section-image-c'>
                    <img src={Landing15} alt="Landing 15" className='landing-5' style={{width:'58%'}}/>
                </div>
            </div>

            <div className='section-c'>
                <div className='section-text-c' style={{maxWidth:'650px'}}>
                    <div className='section-title-c'>Unquestionable accuracy & reliability</div>
                    <div className='section-paragraph-c' style={{maxWidth:'500px'}}>We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.</div>
                </div>
                <div className='section-images-1'>
                    <div className='sub-section'>
                        <img src={Landing17} alt="Landing 17" className='sub-image'/>
                        <div className='sub-section-title'>Trusted by users all over the World</div>
                        <div className='sub-section-paragraph'>Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy.</div>
                    </div>
                    <div className='sub-section'>
                        <img src={Landing18} alt="Landing 18" className='sub-image'/>
                        <div className='sub-section-title'>Information filtering</div>
                        <div className='sub-section-paragraph'>Afforai gives you the highest quality answers, and filters out any irrelevant information.</div>
                    </div>
                    <div className='sub-section'>
                        <img src={Landing19} alt="Landing 19" className='sub-image'/>
                        <div className='sub-section-title'>Built in Comprehension Model</div>
                        <div className='sub-section-paragraph'>Our powerful comprehension model increases the power of our data retrieval.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sections;
