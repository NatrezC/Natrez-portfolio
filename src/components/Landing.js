import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="https://freesvg.org/img/1547510251.png"
                            alt="avatar" //mean alternative (used just in case image wont show)
                            className="avatarImg"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>
                            <hr /> 
                            <p>HTML | CSS | JavaScript | NodeJS | PostgreSQL | MongoDB | React</p>
                            <div className="social-links">
                                {/* Github link */}
                                <a href="https://github.com/NatrezC" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                                
                                {/* LinkedIn link */}
                                <a href="https://www.linkedin.com/in/ndcrawford/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;