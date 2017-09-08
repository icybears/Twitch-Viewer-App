import React, { Component } from 'react'

export default class SearchBox extends Component {

    state = {
        inputVal: ''
    }

    handleChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchName(this.state.inputVal);
        this.setState({
            inputVal: ''
        })
    }

    render() {
        const {inputVal} = this.state;
        return (
            <div id="searchbox-container">
                <form onSubmit={this.handleSubmit}>
                    <input type="search" name="search"
                         value={inputVal} 
                         onChange={this.handleChange}
                         autoComplete="off"
                         />
                    <button type="submit" name="submit"><i className="fa fa-search" /></button>
                </form>
            </div>
        )
    }
}
