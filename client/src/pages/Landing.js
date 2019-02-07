import React, { Component, Fragment } from "react";
import LandingPageMenu from "../components/layout/SectionMenu";
import SectionHeroHome from "../components/layout/SectionHeroHome";
import SectionServices from "../components/layout/SectionServices";
import SectionFooter from "../components/layout/SectionWhyHome";




// import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";


class Landing extends Component {
  render() {
    return (
      <Fragment>
      <LandingPageMenu />
      <SectionHeroHome />
      <SectionServices />
      <SectionFooter />
      </Fragment>
    );
  }
}

export default Landing;
