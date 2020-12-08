import React from 'react';
import logo from '../images/logo-white.png';
import { NavLink } from 'react-router-dom';


class Menu extends React.Component {
    render () {
        return (
            <ul>
                <NavLink to="/about"><li>About</li></NavLink>
                <a href="https://www.alamy.com/portfolio/113387.html"><li>Alamy Page</li></a>
                <a href="https://fineartamerica.com/profiles/1-megan-mccarty"><li>Fine Art America Page</li></a>
            </ul>
        )
    }

    /*render() {
        return (
            <ul>
                <a href="#"><li>Butterflies</li></a>
                <a href="#"><li>Arthropods</li></a>
                <a href="#"><li>Animals</li></a>
                <a href="#"><li>Pets</li></a>
                <a href="#"><li>Plants and Flowers</li></a>
                <a href="#"><li>Landscapes and Nature</li></a>
                <a href="#"><li>Sunsets</li></a>
                <a href="#"><li>Weather</li></a>
                <a href="#"><li>Spring</li></a>
                <a href="#"><li>Autumn</li></a>
                <a href="#"><li>Winter</li></a>
                <a href="#"><li>Buildings and Architecture</li></a>
                <a href="#"><li>Other</li></a>
            </ul>
        )
    }*/
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMenuClosed: true};
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        this.setState(state => ({
            isMenuClosed: !state.isMenuClosed
        }));
    }
  
    render() {
        return (
            <span onClick={this.handleClick} id="menu-btn">
                &#9776; Menu
                <div id="nav" className={this.state.isMenuClosed ? 'closed' : 'open'}>
                    <nav>
                        <Menu />
                    </nav>
                </div> 
            </span> 
        );
    }
}

function Navbar() {
    return (
        <div className="Navbar">
            <div id="logo">
                <img src={logo} alt="Camera logo with a butterfly on the top left of the camera"></img>
            </div>
            <NavLink to="/"><h1>Megan McCarty Photography</h1></NavLink>
            <Toggle />
            <nav id="nav-lg">
                <Menu />
            </nav>
            <footer>
                Website and content © 2020 Megan McCarty
            </footer>
        </div>
    )
}

export default Navbar;