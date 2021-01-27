import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" title="SAfari Stays" description="Get on that dream safari. Yeah we doing this!!" price ="Ksh4,000/night"/>
        <Card src="https://images.unsplash.com/photo-1525474089639-b5fff4440315?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aGlrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" title="Tembea Kenya" description="Get on that dream safari. Yeah we doing this!!"  price ="Ksh4,000/night"/>
        <Card src="https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z2F6ZWJvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" title="gazebo sundays" description="Get on that dream safari. Yeah we doing this!!"  price ="Ksh4,000/night"/>
      </div>
      <div className="home__section">
        <Card src="https://images.unsplash.com/photo-1536084970624-b275a6a11673?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZXNpZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" title="Awesome travels" description="Get on that dream safari. Yeah we doing this!!" price ="Ksh4,000/night" />
        <Card src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" title="Taj Tings" description="Get on that dream safari. Yeah we doing this!!"  price ="Ksh4,000/night"/>
        <Card src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" title="Beach Breeze" description="Get on that dream safari. Yeah we doing this!!"  price ="Ksh4,000/night"/>
      </div>
    </div>
  );
};

export default Home;
