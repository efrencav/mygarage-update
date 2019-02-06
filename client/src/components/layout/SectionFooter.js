import React from "react";
import { Badge, Col } from 'reactstrap';
import "./style.css";


export default class SectionFooter extends React.Component {
    render() {
        return(
            <div className="footer-sm">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-logo" href="#">MyGarage.</div>
                </div>
                <div className="col-md-4">
                  <h6>&copy; MyGarage 2019 Rights Reserved</h6>
                </div>
                <Col md="4">
                    <Badge color="light" href="#">Facebook</Badge>
                    <Badge color="light" href="#">Twitter</Badge>
                    <Badge color="light" href="#">Instagram</Badge>
                </Col>
              </div>
            </div>
          </div>
            )
    }

}

  