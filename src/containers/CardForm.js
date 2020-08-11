import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/cards'

class CardForm extends Component {
    state = {
        question: "",
        code: "",
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
        const card = {question: this.state.question, code: this.state.code}
        this.props.addCard(card)
        this.setState({
            question: "",
            code: "",
            loading: false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <h4>Question</h4>
                    <input type="text"
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                    />
                    <h4>Code Example</h4>
                    <input type="text"
                    name="code"
                    value={this.state.code}
                    onChange={this.handleChange}
                    /></p>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default  connect(null, { addCard })(CardForm)