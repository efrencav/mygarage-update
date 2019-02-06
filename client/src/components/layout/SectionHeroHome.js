import React from "react";
import { Media } from 'reactstrap';
import "./style.css";


export default class SectionHeroHome extends React.Component {
    render() {
        return(
            <div className="hero-home hero-2">
                    <div className="container-m">
                        <div className="app-hero">
                            <div className="intro-block">
                                <h4>MyGarage</h4>
                                <h1>Manage all your car information in just one place.</h1>
                                {/* <p>Best in class will render your huge chunks into
                                meaningful data. Login to the app now.</p> */}
                            </div>
                            <div className="hero-img wow fadeInUp">
                            <Media src="https://s3.amazonaws.com/garage-images-app/car.png" alt="Hero Image"/>
                          </div>
                    </div>
                </div>
            </div>
            )
    }

}

  