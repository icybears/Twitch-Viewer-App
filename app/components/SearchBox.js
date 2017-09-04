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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search"
                         value={inputVal} 
                         onChange={this.handleChange}
                         />
                    <input type="submit" name="submit" value="Search"/>
                </form>
            </div>
        )
    }
}
