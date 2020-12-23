import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* React projects */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React project #1</CardTitle>
                        <CardText>
                            App on something
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Heroku</Button>
                            <Button colored>Its Live</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React project #1</CardTitle>
                        <CardText>
                            App on something
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Heroku</Button>
                            <Button colored>Its Live</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                </div>
            )
        } else if (this.state.activeTab === 1){
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg) center / cover' }}>NodeJs project #1</CardTitle>
                    <CardText>
                        App on something
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Heroku</Button>
                        <Button colored>Its Live</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                {/* PostgreSQL projects */}
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://stackify.com/wp-content/uploads/2018/11/Performance-Tuning-PostgreSQL-3-1280x720.jpg) center / cover' }}>PostgreSQL project #1</CardTitle>
                    <CardText>
                        App on something
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Heroku</Button>
                        <Button colored>Its Live</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                    
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://stackify.com/wp-content/uploads/2018/11/Performance-Tuning-PostgreSQL-3-1280x720.jpg) center / cover' }}>PostgreSQL project #1</CardTitle>
                        <CardText>
                            App on something
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Heroku</Button>
                            <Button colored>Its Live</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog-assets.spot.io/app/uploads/2017/07/17202136/MongoDB-1440x728.jpg) center / cover' }}>MongoDB project #1</CardTitle>
                    <CardText>
                        App on something
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Heroku</Button>
                        <Button colored>Its Live</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>PostgreSQL</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories}</div>
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                
            </div>
        )
    }
}

export default Projects;