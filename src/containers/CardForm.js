import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/cards'
import { getCategory } from '../actions/categories'

class CardForm extends Component {
    state = {
        question: "",
        code: "",
        answer: "",
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
        const card = {question: this.state.question, code: this.state.code, answer: this.state.answer}
        const category = {name: this.state.name}
        this.props.addCategory(category)
        this.props.addCard(card)
        this.setState({
            question: "",
            code: "",
            answer: "",
            loading: false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    Category
                    <input type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    />
                    Question
                    <input type="text"
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                    />
                    Code Example
                    <input type="text"
                    name="code"
                    value={this.state.code}
                    onChange={this.handleChange}
                    />
                    Answer
                    <input type="text"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                    /></p>
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

export default  connect(null, { addCard })(CardForm)