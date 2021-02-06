import React from 'react';

import classes from './home.module.scss';

export const Home = () => (
    <div>
        <div className="top-bar">
            <div className={classes.Logo}> Logo</div>
            <div className={classes.Menu}>
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
        <div className="banner">
            <div className="banner-text">
                <div className="banner-text-items">
                    <h2>Banner Text Heading</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
        <div className="main-content">
            <div className="main1">
                <h2>Main Heading One</h2>
                <p>Lorem Ipsum is simply dummysk text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="main1">
                <h2>Main Heading Two</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="main1">
                <h2>Main Heading Three</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
        <div className="contact">
            <div className="contact-text">
                <div className="contact-items">
                    <h2>Contact Us</h2>
                    <input type="text" placeholder="Your Name..." />
                    <input type="text" placeholder="Your Email..." />
                    <textarea cols="20" rows="20" placeholder="Your Message Here ..."></textarea>
                    <a href="#">Submit</a>
                </div>
            </div>
        </div>

    </div>
);