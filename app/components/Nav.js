import React from 'react';
import {Link} from 'react-router-dom';

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
        const homeActiveStyle = {};
        const searchActiveStyle = {};
        const watchlistActiveStyle = {};
        
    return (
        <nav>
            <ul className={isExpanded ? "expanded-nav": null}>
                <li><button onClick={this.handleClick} id="expand-nav"><i className="fa fa-navicon"/></button></li>
                <li><Link to="/" activeClassName="active"><i className="fa fa-home"/></Link></li>
                <li><Link to="/search" activeClassName="active"><i className="fa fa-search"/></Link></li>
                <li><Link to="/watchlist" activeClassName="active"><i className="fa fa-list-alt"/></Link></li>
            </ul>
        </nav>
    )
}
}

export default Nav
