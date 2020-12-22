import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
    </Switch>

)

export default Main