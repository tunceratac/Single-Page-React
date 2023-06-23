import React, { useState, useEffect, useRef } from "react";
import './App.css';
import emailIcon from "./extra_pictures/mail_emblem.png";
import twitterIcon from "./extra_pictures/twitter_emblem.jpg";
import instagramIcon from "./extra_pictures/instagram_emblem.webp";
import phoneIcon from "./extra_pictures/phone emblem.jpg";
import cheeseburger from "./menu_pictures/cheeseburger.jpg";
import onion_rings from "./menu_pictures/onion_rings.jpg";
import beef_burger from "./menu_pictures/beef_burger.jpg";
import chicken_burger from "./menu_pictures/chicken_burger.jpg";
import fizzy_drink from "./menu_pictures/fizzy_drink.jpg";
import fries from "./menu_pictures/fries.jpg";
import ice_cream from "./menu_pictures/ice_cream.jpg";
import lemonade from "./menu_pictures/lemonade.jpg";
import pizza_slice from "./menu_pictures/pizza_slice.jpg";
import water from "./menu_pictures/water.jpg";
import chicken_legs from "./menu_pictures/chicken_legs.jpg";

let labelColor = "#001AFF";

function Header() {
  return(
    <div id="grey-area" className="grey-area"> 
      <h1 id="gulbahce-burger" className="gulbahce-burger">Gülbahçe Burger</h1>
      <span id= "about-us" className="about-us" onClick={toggleAboutUs}>About Us</span>
      <span id="switch" className="darkmode" onClick={darkModeSwitcher}>Switch to Dark Mode</span>
    </div>
  )
}
function AboutUs() {
  return (
      <div id="about-us-content" className="about-us-content">
        <span>
          Gülbahçe Burger is a fast food joint in Urla/İzmir. It opened for
          business in 2023.
        </span>
      </div>
  );
}

function toggleAboutUs() {
  const aboutUsContent = document.getElementById("about-us-content");
  const aboutUsButton = document.getElementById("about-us");
  const downGrey = document.getElementById("down-grey");
  if (aboutUsContent.style.display === "none") {
    aboutUsContent.style.display = "block";
    aboutUsButton.style.color = "#EB00FF";
    downGrey.style.marginTop = "61px";
  } else {
    aboutUsContent.style.display = "none";
    aboutUsButton.style.color = labelColor;
    downGrey.style.marginTop = "0px";
  }
}

function NameBox() {
  const buttonRef = useRef(null);
  const textboxRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    buttonRef.current.addEventListener('click', function() {
      var regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/;
      var name = textboxRef.current.value;
      if (!regex.test(name)) {
        textboxRef.current.value = ""; 
        buttonRef.current.style.backgroundColor = "#FF4545";
      } 
      else { 
        labelRef.current.innerHTML = "Welcome, " + name;
        textboxRef.current.remove();
        buttonRef.current.remove();
      }
    });
  }, []);

  return (
    <div id="down-grey" class="down-grey">
      <p ref={labelRef} id="label" class="text0">
        Please enter your name for a personalized experience:
      </p>
      <input ref={textboxRef} id="txtbox" type="text" className="text-box" />
      <button ref={buttonRef} id="button" className="button">
        Submit
      </button>
    </div>
  )
}

const toogleContent = (contentDiv, otherContentDiv, button, otherButton) => {
  const content = document.querySelector(contentDiv);
  const otherContent = document.querySelector(otherContentDiv);
  const btn = document.querySelector(button);
  const otherBtn = document.querySelector(otherButton);

  if (content.style.display === 'none') {
    content.style.display = 'block';
    btn.style.color = "#EB00FF";
    if (otherContent.style.display === 'block') {
        otherContent.style.display = 'none';
        otherBtn.style.color =  labelColor;
    }
} 
else {
    content.style.display = 'none';
    btn.style.color = labelColor;
}
}


function Footer() {
  return (
    <div id="last" className="last-div">
      <span id="contact" className="contact" onClick={() => toogleContent(".contact-content", ".location-content", ".contact", ".location")}>Contact Info</span>
      <span id="location" className="location" onClick={() => toogleContent(".location-content", ".contact-content", ".location", ".contact")}>Location</span>
      <Location />
      <ContactInfo />
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
          <div id="contact-info-content" className="contact-content">
          <p>
            <span className="phone-icon-container">
              <img className="phone-icon" src={phoneIcon} alt="Phone" />
            </span>
            <span className="phone-text">+90 123 456 7788</span>
            <span className="instagram-icon-container">
              <img className="instagram-icon" src={instagramIcon} alt="Instagram" />
            </span>
            <span className="instagram-text">instagram.com/gbahceburger</span>
            <span className="twitter-icon-container">
              <img className="twitter-icon" src={twitterIcon} alt="Twitter" />
            </span>
            <span className="twitter-text">twitter.com/gbahceburger</span>
            <span className="email-icon-container">
              <img className="email-icon" src={emailIcon} alt="Email" />
            </span>
            <span className="email-text">gbahceburger@mail.com</span>
          </p>
        </div>
    </div>
  );
}

function Location() {
  return (
    <div id="location-content" className="location-content">
        <div className="fake-map"></div>
        <span className="address-text">Address: <br/> 12087 Sk. Gülbahçe/Urla/İzmir</span>
    </div>
);
}

function MenuItem({ name, price, imageURL, background }) {
  return (
    <div className="menuItem" style={{background: background}}>
      <img className="menuImage" src={imageURL} alt={name} />
      <div style={{display: 'flex', justifyContent: 'space-between', width: '390px'}}>
        <p className="itemName" style={{ position: 'relative', left: '20px', top: '10px' }}>{name}</p>
        <p className="itemPrice" style={{ position: 'relative', top: '10px' }}>{price}</p>
      </div>
    </div>
  );
}

function MenuList() {
  const menuItems = [
    {name: 'Cheeseburger', price: '70 TL', imageURL: cheeseburger},
    {name: 'Onion Rings', price: '30 TL', imageURL: onion_rings},
    {name: 'French Fries', price: '25 TL', imageURL: fries},
    {name: 'Chicken Burger', price: '60 TL', imageURL: chicken_burger},
    {name: 'Fizzy Drink', price: '20 TL', imageURL: fizzy_drink},
    {name: 'Water', price: '10 TL', imageURL: water},
    {name: 'Beef Burger', price: '90 TL', imageURL: beef_burger},
    {name: 'Chicken Legs', price: '45 TL', imageURL: chicken_legs},
    {name: 'Soft Serve Ice Cream', price: '15 TL', imageURL: ice_cream},
    {name: 'Lemonade', price: '13 TL', imageURL: lemonade},
    {name: 'Pizza Slice', price: '50 TL', imageURL: pizza_slice},
  ];

  return (
    <div id="menuList" className="menuList">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}

function darkModeSwitcher() {
  let menuItems = document.getElementsByClassName('menuItem');
  let itemNames = document.getElementsByClassName('itemName');
  let itemPrices = document.getElementsByClassName('itemPrice');
  const spans  = document.querySelectorAll('span');         


  if (document.getElementById("switch").innerHTML === "Switch to Light Mode") {
    document.getElementById("switch").innerHTML = "Switch to Dark Mode";
    document.getElementById('grey-area').style.backgroundColor = "#4F556459";
    document.getElementById('about-us').style.color = "#001AFF";
    document.getElementById('switch').style.color = "#032900";
    document.getElementById('gulbahce-burger').style.color = "#000000";
    document.getElementById('down-grey').style.backgroundColor = "#F2F2F2";
    document.getElementById('label').style.color = "#000000";   
    document.getElementById('main').style.backgroundColor = "#ffffff";
    document.getElementById('contact').style.color = "#001AFF";
    document.getElementById('location').style.color = "#001AFF";
    document.getElementById('last').style.backgroundColor = "#4F646040";
    document.getElementById('contact-info-content').style.backgroundColor = "#F2F2F2";
    document.getElementById('location-content').style.backgroundColor = "#F2F2F2";
    document.getElementById('about-us-content').style.backgroundColor = "#F2F2F2";
    document.getElementById('menuList').style.backgroundColor = "#FFFFFF";
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.backgroundColor = "#F2F2F2";
      itemNames[i].style.color = "#000000";
      itemPrices[i].style.color = "#000000";
    }
    spans.forEach(span => span.classList.remove('txt-white'));
    labelColor = "#001AFF";
  } else {
    document.getElementById("switch").innerHTML = "Switch to Light Mode";
    document.getElementById('grey-area').style.backgroundColor = "#4F5564";
    document.getElementById('about-us').style.color = "#00C2FF";
    document.getElementById('switch').style.color = "#10CB00";
    document.getElementById('gulbahce-burger').style.color = "#ffffff";
    document.getElementById('down-grey').style.backgroundColor = "#313131";
    document.getElementById('label').style.color = "#ffffff";
    document.getElementById('main').style.backgroundColor = "#4F5564";
    document.getElementById('contact').style.color = "#00C2FF";
    document.getElementById('location').style.color = "#00C2FF";
    document.getElementById('last').style.backgroundColor = "#4F6460";
    document.getElementById('contact-info-content').style.backgroundColor = "#4F6460";
    document.getElementById('location-content').style.backgroundColor = "#4F6460";
    document.getElementById('about-us-content').style.backgroundColor = "#4F6460";
    document.getElementById('menuList').style.backgroundColor = "#4F5564";
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.backgroundColor = "#4F5564";
      itemNames[i].style.color = "#FFFFFF";
      itemPrices[i].style.color = "#FFFFFF";
    }
    spans.forEach(span => span.classList.add('txt-white'));
    labelColor = "#00C2FF";

  }
}



export default function App() {
  return (
    <div id="main" className="main-container">
    <Header />
    <NameBox />
    <AboutUs />
    <MenuList />
    <Footer />
    </div>
  )
}
