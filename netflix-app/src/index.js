import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Card from "./Cards";
import "./index.css";
import Sdata  from "./Sdata";
ReactDOM.render(
  <>
  <h1 className="heading_style">List of Top 5 Netflix Series in 2023</h1>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

    <Card
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_lMDJUos2o7vFvf56sm3Hm6ez1aMUrVVtSIwP6OTQ&s"
      title="A Netflix Orignal Series"
      sname="Extra Cirricular"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

    <Card
      imgsrc="https://c8.alamy.com/comp/P4KWH1/description-season-1-original-film-title-stranger-things-english-title-stranger-things-film-director-matt-duffer-ross-duffer-year-2016-credit-21-laps-entmonkey-massacre-album-P4KWH1.jpg"
      title="A Netflix Orignal Series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

<Card
imgsrc='https://wallpapers.com/images/hd/the-vampire-diaries-iphone-jk3arspyebhx9z9a.jpg'
title="A zon Orignal Series"
      sname="The Vampire Diaries"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

    <Card
      imgsrc='https://images.justwatch.com/poster/137886476/s592/season-2'
      title="A Netflix Orignal Series"
      sname="My firest-2 Love"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />

  </>,
  document.getElementById("root")
);
