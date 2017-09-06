import React from 'react'

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
                <li><i className="fa fa-home"/></li>
                <li><i className="fa fa-search"/></li>
                <li><i className="fa fa-list-alt"/></li>
            </ul>
        </nav>
    )
}
}

export default Nav
