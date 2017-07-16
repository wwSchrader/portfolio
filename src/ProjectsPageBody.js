import React, { Component } from 'react';
import { Col, Thumbnail, Button, Grid, Row } from 'react-bootstrap';

class ProjectsPageBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    title: "Game of Life",
                    description: "A cell simulator using ReactJs",
                    picture: "/assets/thumbnaildiv.png",
                    pictureAlt: "Game of Life Website Thumbnail",
                    webUrl: "https://wwschrader.github.io/game-of-life/",
                    gitHubUrl: "https://github.com/wwSchrader/game-of-life"
                },
                {
                    title: "Java Calculator",
                    description: "A web calculator using ReactJs",
                    picture: "/assets/thumbnaildiv.png",
                    pictureAlt: "Java Calculator Website Thumbnail",
                    webUrl: "https://wwschrader.github.io/java-calculator/",
                    gitHubUrl: "https://github.com/wwSchrader/java-calculator"
                }
            ]
        };
    }

    render() {
        var thumbnails = this.state.projects.map((project, i) => {
            return (
                <Col key={project.title} xs={6} md={4}>
                    <Thumbnail src={project.picture} alt={project.pictureAlt}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>
                            <a href={project.webUrl} target='_blank'>
                                <Button bsStyle="primary">Website</Button>
                            </a>&nbsp;
                            <a href={project.gitHubUrl} target='_blank'>
                                <Button bsStyle="default">Github</Button>
                            </a>
                        </p>
                    </Thumbnail>
                </Col>
            );
        })

        return (
            <Grid fluid={true}>
                <Row>
                    {thumbnails}
                </Row>
            </Grid>
        );
    }
}

export default ProjectsPageBody;