import React, { useState } from 'react';
import './Testmonials.css';
import ProductHunt from '../images/producthunt.svg';
import BayuPic from '../images/0-0.webp';
import GhulamPic from '../images/0-1.webp';
import HenryPic from '../images/0-2.webp';
import AnatolyPic from '../images/0-3.webp';
import AmulyaPic from '../images/0-4.webp';
import JayPic from '../images/0-5.webp';
import ThuyPic from '../images/0-6.webp';

const DraggableList = () => {
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [isAnimated, setIsAnimated] = useState(true);

    const handleMouseDown = (e) => {
        setStartX(e.clientX || e.touches[0].clientX - currentX);
        setDragging(true);
        setIsAnimated(false)
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            setCurrentX((e.clientX || e.touches[0].clientX) - startX);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
        setIsAnimated(true)
    };
    

    return (
        <div className="container" data-animated>
            <ul className="list-backward" onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            style={{ transform: `translateX(${currentX}px)`, 
            animationPlayState: isAnimated ? 'running' : 'paused'}}>

          <li className='review-wrapper'>
            <div class="review">
              Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AnatolyPic} alt="Anatoly" className='profile-pic'/>
                Anatolii, Founder of Savvy Planning Systems
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
            This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AmulyaPic} alt="Amulya" className='profile-pic'/>
                Amulya Pressard, Growth @ Neverinstall
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={JayPic} alt="Jay" className='profile-pic'/>
                Jay, Founder of FLYTStudios
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={ThuyPic} alt="Thuy" className='profile-pic'/>
                Thuy Nguyen, CEO Assistance
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={BayuPic} alt="Bayu" className='profile-pic'/>
                Bayu Wilanda, Web & App Developer
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={GhulamPic} alt="Ghulam" className='profile-pic'/>
                Ghulam Abbas, Solopreneur
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={HenryPic} alt="Henry" className='profile-pic'/>
                Henry Sipchen, Marketing Coordinator
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AnatolyPic} alt="Anatoly" className='profile-pic'/>
                Anatolii, Founder of Savvy Planning Systems
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
            This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AmulyaPic} alt="Amulya" className='profile-pic'/>
                Amulya Pressard, Growth @ Neverinstall
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={JayPic} alt="Jay" className='profile-pic'/>
                Jay, Founder of FLYTStudios
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={ThuyPic} alt="Thuy" className='profile-pic'/>
                Thuy Nguyen, CEO Assistance
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={BayuPic} alt="Bayu" className='profile-pic'/>
                Bayu Wilanda, Web & App Developer
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={GhulamPic} alt="Ghulam" className='profile-pic'/>
                Ghulam Abbas, Solopreneur
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={HenryPic} alt="Henry" className='profile-pic'/>
                Henry Sipchen, Marketing Coordinator
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AnatolyPic} alt="Anatoly" className='profile-pic'/>
                Anatolii, Founder of Savvy Planning Systems
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
            This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AmulyaPic} alt="Amulya" className='profile-pic'/>
                Amulya Pressard, Growth @ Neverinstall
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={JayPic} alt="Jay" className='profile-pic'/>
                Jay, Founder of FLYTStudios
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={ThuyPic} alt="Thuy" className='profile-pic'/>
                Thuy Nguyen, CEO Assistance
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={BayuPic} alt="Bayu" className='profile-pic'/>
                Bayu Wilanda, Web & App Developer
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={GhulamPic} alt="Ghulam" className='profile-pic'/>
                Ghulam Abbas, Solopreneur
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={HenryPic} alt="Henry" className='profile-pic'/>
                Henry Sipchen, Marketing Coordinator
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AnatolyPic} alt="Anatoly" className='profile-pic'/>
                Anatolii, Founder of Savvy Planning Systems
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
            This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AmulyaPic} alt="Amulya" className='profile-pic'/>
                Amulya Pressard, Growth @ Neverinstall
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={JayPic} alt="Jay" className='profile-pic'/>
                Jay, Founder of FLYTStudios
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={ThuyPic} alt="Thuy" className='profile-pic'/>
                Thuy Nguyen, CEO Assistance
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={BayuPic} alt="Bayu" className='profile-pic'/>
                Bayu Wilanda, Web & App Developer
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={GhulamPic} alt="Ghulam" className='profile-pic'/>
                Ghulam Abbas, Solopreneur
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={HenryPic} alt="Henry" className='profile-pic'/>
                Henry Sipchen, Marketing Coordinator
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AnatolyPic} alt="Anatoly" className='profile-pic'/>
                Anatolii, Founder of Savvy Planning Systems
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
            This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AmulyaPic} alt="Amulya" className='profile-pic'/>
                Amulya Pressard, Growth @ Neverinstall
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={JayPic} alt="Jay" className='profile-pic'/>
                Jay, Founder of FLYTStudios
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={ThuyPic} alt="Thuy" className='profile-pic'/>
                Thuy Nguyen, CEO Assistance
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={BayuPic} alt="Bayu" className='profile-pic'/>
                Bayu Wilanda, Web & App Developer
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={GhulamPic} alt="Ghulam" className='profile-pic'/>
                Ghulam Abbas, Solopreneur
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={HenryPic} alt="Henry" className='profile-pic'/>
                Henry Sipchen, Marketing Coordinator
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AnatolyPic} alt="Anatoly" className='profile-pic'/>
                Anatolii, Founder of Savvy Planning Systems
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
            This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={AmulyaPic} alt="Amulya" className='profile-pic'/>
                Amulya Pressard, Growth @ Neverinstall
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={JayPic} alt="Jay" className='profile-pic'/>
                Jay, Founder of FLYTStudios
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={ThuyPic} alt="Thuy" className='profile-pic'/>
                Thuy Nguyen, CEO Assistance
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={BayuPic} alt="Bayu" className='profile-pic'/>
                Bayu Wilanda, Web & App Developer
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

          <li className='review-wrapper'>
            <div class="review">
              The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.
            </div>
            <div class="reviewer">
              <div class="info">
                <img src={GhulamPic} alt="Ghulam" className='profile-pic'/>
                Ghulam Abbas, Solopreneur
              </div>
              <div className='product-hunt'>
                <img src={ProductHunt} alt="Product Hunt" className='small-pic'/>
                <div>View on Product Hunt</div>
              </div>
            </div>
          </li>

	      </ul>
        </div>
    );
};

export default DraggableList;
