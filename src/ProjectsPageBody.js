import React, { Component } from 'react';
import { Col, Thumbnail, Button, Grid, Row} from 'react-bootstrap';

class ProjectsPageBody extends Component {
    constructor(props) {
        super(props);

        var basePath = process.env.PUBLIC_URL;

        this.state = {
            projects: [
                {
                    title: "Game of Life",
                    description: "A cell simulator using ReactJs",
                    picture: basePath + '/assets/game-of-life.png',
                    pictureAlt: "Game of Life Website Thumbnail",
                    webUrl: "https://wwschrader.github.io/game-of-life/",
                    gitHubUrl: "https://github.com/wwSchrader/game-of-life"
                },
                {
                    title: "Recipe Box",
                    description: "A simple recipe box that can save your recipes offline",
                    picture: basePath + '/assets/recipe-box.png',
                    pictureAlt: "Recipe Box Website Thumbnail",
                    webUrl: "https://wwschrader.github.io/recipe-box/",
                    gitHubUrl: "https://github.com/wwSchrader/recipe-box"
                },
                {
                    title: "Cookbook Web App",
                    description: "A full featured cookbook app with pictures and directions",
                    picture: basePath + '/assets/cookbook.png',
                    pictureAlt: "Cookbook Website Thumbnail",
                    webUrl: "https://wwschrader.github.io/cookbook/",
                    gitHubUrl: "https://github.com/wwSchrader/cookbook"
                },
                {
                    title: "Camper Leaderboard",
                    description: "A leaderboard tracking points earned at freeCodeCamp",
                    picture: basePath + '/assets/camper-leaderboard.png',
                    pictureAlt: "Camper Leaderboard Website Thumbnail",
                    webUrl: "https://wwschrader.github.io/camper-leaderboard/",
                    gitHubUrl: "https://github.com/wwSchrader/camper-leaderboard"
                },
                {
                    title: "Markdown Previewer",
                    description: "A page that takes text and displays it in Github-styled markdown",
                    picture: basePath + '/assets/markdown-previewer.png',
                    pictureAlt: "Markdown Previewer Website Thumbnail",
                    webUrl: "https://wwschrader.github.io/markdown-previewer/",
                    gitHubUrl: "https://github.com/wwSchrader/markdown-previewer"
                },
                {
                    title: "Java Calculator",
                    description: "A web calculator using React",
                    picture: basePath + '/assets/java-calculator.png',
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
                <Col key={project.title} xs={5} md={3}>
                    <Thumbnail  src={project.picture} alt={project.pictureAlt}>
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