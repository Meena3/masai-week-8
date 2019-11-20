import React from 'react';
// import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Sign from './Sign';
import Location from './Location';
import Contact from './Contact';
// import Chart from './Chart';
// import Search from './Search'

export default class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
            <nav class="navbar navbar-expand-lg navbar-dark bg-light">
                <Link clasName="nav" to="/home" >HomelyFood <span class="sr-only">(current)</span></Link>
                <Link className="nav" to ="/contact">Contact Us</Link>
                <Link className="nav" to = "/sign">Sign In</Link>
                <Link className="nav" to = "/location">Location</Link>
                <Link className = "nav" to = "/chart">Analysis</Link>
          </nav>
           {/* <Search/> */}
           <Route path = "/" exact component = {Home}></Route>
           <Route path = "/contact" component = {Contact}/>
           <Route path = "/sign" component = {Sign}/>
           <Route path = "/location" component = {Location}/>
           {/* <Route path = "/chart" component = {Chart}/> */}
                 </BrowserRouter>
            </React.Fragment>

        )
    }
}