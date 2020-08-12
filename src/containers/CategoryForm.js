import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions/categories'

class CardForm extends Component {
    state = {
        category: "",
        loading: false
    }

    handleChange = (e) => {
        // this.setState({
        //     question: e.target.question,
        //     code: e.target.code
        // })
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const category = {name: this.state.category}
        debugger
        this.props.addCategory(category)
        this.setState({
            category: "",
            loading: false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    Create a New Category
                    <input type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default  connect(null, { addCategory })(CardForm)