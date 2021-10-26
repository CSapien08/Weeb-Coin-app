import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <p>&copy; 2021 Weeb Developers </p>
                </ul>  
                <ul>
                    { this.props.logged_in &&
                        <NavLink to="/portfolio">My Portfolio</NavLink>
                    }    
                </ul>   
            </footer>
        );
    }
}

export default Footer;