import React, { Component } from 'react';
import './App.css';
import logo from "../src/Images/big-marlin-group-white-shadow.png";
// import ReallySmoothScroll from 'really-smooth-scroll';
import Slider from 'react-slick';
import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor';
import image1 from '../src/Images/mll-hero.jpg';
import image2 from '../src/Images/vosy-1.jpg';
import image3 from '../src/Images/vosy-video.jpg';
import image4 from '../src/Images/dcs.jpg';
import image5 from '../src/Images/dh-integrated.jpg';
import image6 from '../src/Images/freestone-small.jpg';
import google from '../src/Images/google-partner.png';
import goDaddy from '../src/Images/godaddy.jpg';

// ReallySmoothScroll.shim();

configureAnchors({offset: 130, scrollDuration: 1200})

class App extends Component {
   
  render() {
    var settings = {
      arrows: true,
      infinite: true,
      pauseOnHover: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000
    }

    return (
      <div className="App">

{/* TITLE PAGE */}

      <div className="bg">
        <div className="contact-menu-parent">
          <div className="comment" id="hover"><i id="contact" className="fa fa-comment-o">&nbsp;&nbsp;</i>Contact Us &nbsp;&nbsp;</div>
          <div className="nav-icon">
            <div></div>
          </div>
        </div>

        <ScrollableAnchor id={'section1'}>
        <div className="logoParent">
          <div><img className="logo" src={logo}/></div>
          <div className="main-title">Big fish<span className="dot">.</span> Big results<span className="dot">.</span></div>
          <a className="scroll" href='#section1'><div className="animated bounce"><i className="fa fa-chevron-down"></i></div></a>
        </div>
        </ScrollableAnchor>
      </div>


{/* Who we are / Our Services  */}

          <div className="who">
            <div className="weAreTitle">we are big marlin group<span className="weAreDot">.</span></div>
            <div className="weAreSub">We create effective marketing campaigns with measurable results <br/>
                 while providing kick-ass customer service.</div>
            <div className="weArePara">With nearly 200 years of practical work experience, all of us at Big Marlin Group believe in superb customer service, coupled with brilliant <br/>
                 creativity and hard work. We are a group of dedicated pros who can solve your business and marketing challenges in a constantly changing <br/>
                 digital world. We are an Arizona-based marketing agency with a national reputation for beating expectations.</div>
            <div className="weAreBtn">who we are</div>
          </div>

        <div className="services">
          <div className="hookedTitle">get hooked<span className="hookedDot">.</span></div>
          <div className="hookedSub">We are a group of dedicated marketing professionals who can solve <br/>
               your business & marketing challenges in a constantly changing <br/>
               digital world.</div>         
          <div className="hookedPara">At Big Marlin Group, we are a full service agency that offers all of the tools needed to bring your business to the next level. We take pride in our <br/>
               work and would love the opportunity to show you what we can do for your business! Providing incredible customer service is just one of our <br/>
               many strengths. We also really look forward to bringing you into our office to get to know the team and how we operate.</div>
          <div className="hookedBtn">our services</div>
        </div>

        <div className="makeSplash">
          <div className="splashTitle">big marlin knows how to make a splash<span className="weAreDot">.</span></div>
          <div className="splashSub">Check out some of our latest work to see the impact we have made for our clients.</div>
          <div className="splashPicsParent"> 
            <div className="splashPics"><div className="textBox"><h5>Data Driven Results for <br/> Mathew Lopez Law </h5></div><img src={image1}/></div>
            <div className="splashPics"><div className="textBox"><h5>Essential Marketing for <br/> Valley of the Sun YMCA </h5></div><img src={image2}/></div>
            <div className="splashPics"><div className="textBox"><h5>Valley of the Sun YMCA <br/> Confidence Video </h5></div><img src={image3}/></div>
            <div className="splashPics"><div className="textBox"><h5>Industrial Leading Digital <br/> Platform for Dermacare </h5></div><img src={image4}/></div>
            <div className="splashPics"><div className="textBox"><h5>Integrated Marketing <br/> Strategy for Derma Health </h5></div><img src={image5}/></div>
            <div className="splashPics"><div className="textBox"><h5>Brand Development for <br/> Freestone Recreation <br/> Center </h5></div><img src={image6}/></div>
          </div>
        </div>

        <div className="ourWord">
          <div className="ourWordTitle">don't just take our word for it<span className="weAreDot">.</span></div>
          <div className="ourWordSub">Check out what our clients are saying about our team of marketing experts and the work we do.</div>        
          <div className="container">
            <Slider {...settings}>
              <div className="slider"><div><h6>BMG has been wonderful to work with. They took the vision that we had for our DocumentTrunk website and ran with it. It came out <br />
                       better than we could have ever imagined. Everything has exceeded our expectations from the communication, turnaround time and the <br/> 
                       end product. I can’t recommend them highly enough.</h6>
                          <p>Natasha Beal, Founder and Owner of DocumentTrunk</p></div></div>
              <div className="slider"><div><h6>The team at Big Marlin Group has provided our association with tremendous marketing support for over 10 years. They have aided our <br/>
                       marketing department’s efforts through new and innovative platforms to help not only grow our membership to over 42,000 <br/>
                       individuals, but also engage these members effectively and efficiently while working within our budget. To top it all off they are a <br/>
                       really fun group to work with!</h6>
                          <p>Jeff Andresen, CEO/President, YMCA of Greater Williamson County</p></div></div>
              <div className="slider"><div><h6>I have worked with all of the principles of the Big Marlin Group for ten years now. They were and still are instrumental in helping me <br/> 
                       design and put together advertising and marketing that really gets my phone to ring. After many years of using them for advertising <br/>
                       vehicles, I turned over the design and content of my website and all of my marketing projects. Big Marlin Group now handles my print, <br/> 
                       digital marketing, and they are essentially an outside marketing agency to me. They are creative, loyal, fast-paced, and they make the <br/> 
                       projects fun. They always pay close attention to budget, always negotiate the best prices for me and never leave me with any <br/>
                       surprises. I would highly recommend them.</h6>
                          <p>Trish Gulbranson, President & CEO, Derma Health Institute</p></div></div>
              <div className="slider"><div><h6>Choosing Big Marlin Group to manage our website and advertising has been great for our company. It has allowed me to focus more of <br/>
                       my time on making our business better versus trying to manage our Google Adwords, Facebook and other marketing campaigns. Ted <br/> 
                       and Alyssa are great to work with and they really treat our account like it is their own business. They are always willing to go above <br/> 
                       and beyond to please their clients. We would highly recommend them for any company looking to expand their reach.</h6>
                          <p>Joe Campbell (Owner, Arizona Painting Company)</p></div></div>
              <div className="slider"><div><h6>Over the past six years,  I have devoted a significant amount of resources toward digital marketing. Without hesitation, Big Marlin <br/> 
                       Group is the best marketing company I've worked with. Their team has taken the time to carefully listen to what my short and long <br/> 
                       term business goals are, which has helped me devise an effective marketing campaign. I truly feel we have developed a partnership <br/> 
                       that will continue to grow over the next several years. With the help of Big Marlin Group, I have seen a significant increase in business <br/> 
                       and am confident they will continue to help scale my practice in the manner which I have always envisioned.</h6>
                          <p>Matthew Lopez, Owner of Matthew Lopez Law, PLLC</p></div></div>
              <div className="slider"><div><h6>It's been a lifesaver having a marketing agency that actually understands what Y's are all about. But better yet, they have multiplied <br/>
                       the power of our small in-house team by empowering and working with us every step of the way. Big Marlin Group has played a large <br/> 
                       part in helping our Y grow with targeted and effective marketing decisions within budget.</h6>
                          <p>Brian Green, Creative Director, YMCA of Greater Williamson County</p></div></div>
            </Slider>
          </div>
        </div>

        <div className="footer">
          <div className="footerParent">
            <div className="imgFooterParent"><img className="logoFooter" src={logo}/><img className="googleImg" src={google}/></div>
            <div className="addressParent">
              <div className="titleAddress">Big Marlin Group<span className="footerDot">.</span></div>
              <div className="address">425 W. Guadalupe Rd., Suite 101<br/>Gilbert, AZ 85233<br/>(480) 381-1154</div>
              <div className="footerIcons">
                  <i id="iconsF" className="fa fa-facebook-square"></i>
                  <i id="iconsF" className="fa fa-linkedin-square"></i>
                  <i id="iconsF" className="fa fa-google-plus-square"></i></div>
            </div>
          </div>
        </div>
        <div className="footer2">
          <div><img className="goDaddy" src={goDaddy}/></div>
          <div className="crIcon">© &nbsp;<span className="copyright">2016 Big Marlin Group. All rights reserved.</span> | <a href="#" className="links">Privacy Policy</a> | <a href="#" className="links">Careers</a></div>
        </div>





      </div>
    );
  }
}

export default App;
