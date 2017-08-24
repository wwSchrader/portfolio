import React, {Component} from 'react';
import {Image, Col, Panel} from 'react-bootstrap';
import portraitImg from './assets/portrait.jpg';

class AboutPageBody extends Component {

  render() {
    return (
      <div>
        <Col xs={6} md={4}>
          <Image
              src={portraitImg}
              alt="Portrait of Warren Schrader"
              responsive rounded
          />
        </Col>
        <Col xs={6} md={4}>
          <Panel>
            <h1>About Me</h1>
            <p>
              I'm a newly minted front end web developer.
              My previous profession was accounting.
              However, I couldn't resist the allure of the
              fun and challenges in a software development career!
            </p>

            <p>
              My focus have been working with Angular and React.
              I'll soon be learning Node MongoDB and Express in the near future.
              Stay tuned!
            </p>
          </Panel>
        </Col>
      </div>
    );
  }
}

export default AboutPageBody;
