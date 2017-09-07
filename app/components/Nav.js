import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
    state = {
        isExpanded: false
    }
    handleClick = () => {
            this.setState(prevState => (
                {
                    isExpanded: !prevState.isExpanded
                }
            ));                     
    }
    render(){
        const {isExpanded} = this.state;
        
    return (
        <nav>
            <ul className={isExpanded ? "expanded-nav": null}>
                <li><button onClick={this.handleClick} id="expand-nav"><i className="fa fa-navicon"/></button></li>
                <li><NavLink exact to="/" activeClassName="active"><i className="fa fa-home"/></NavLink></li>
                <li><NavLink to="/search" activeClassName="active"><i className="fa fa-search"/></NavLink></li>
                <li><NavLink to="/watchlist" activeClassName="active"><i className="fa fa-list-alt"/></NavLink></li>
            </ul>
        </nav>
    )
}
}

export default Nav
