import React from "react";
import { Badge } from 'reactstrap';
import "./style.css";


export default class SectionWhyHome extends React.Component {
    render() {
        return(
          <div className="cta-big cta-alt">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-10 col-lg-8">
                  <div className="cta-big-inner wow fadeInUp">
                    <h4>Why you need MyGarage App</h4>
                    <h1>Keep up with your cars maintenance records and costs.</h1>
                    <p>Better way to keep track of your vehicles records. </p>
                    <Badge href="#" className="btn btn-action btn-white">Join now</Badge>
                    <h5>Trusted by hundreds of businesses all over the world.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
            )
    }

}

  