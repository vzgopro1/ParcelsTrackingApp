import React from "react";
import './styles/Home.scss';
import Button from "../../components/Button";
import Header from "../../components/Header";
import BgPhoto from '../../assets/img/home/bg_image6.jpeg'

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="content">
                <div className="big_text">
                    <h1>New way of your modern delivery</h1>
                </div>
                <div className="small_text">
                    <div className="text">Our company uses the latest delivery technology
                    to deliver your parcel anywhere and anytime.</div>
                    <div className="section">
                        <Button>Get Started</Button>
                        <div className="text">Track your order</div>
                    </div>
                </div>
            </div>

            <img className="bottom-image" src={BgPhoto} alt="footer_art" />
        </div>
    );
}

export default Home;