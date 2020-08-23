import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/cards'
import { getCategories } from '../actions/categories'

class CardForm extends Component {

    state = {
        question: "",
        code: "",
        answer: "",
        name: "",
        category_id: 0,
        loading: false
    }

    componentDidMount() {

        this.props.getCategories()
        
    }
    
    handleChange = (e) => {

        if (e.target.name === "") {
            e.target.name = "category_id"
            return this.setState({ [e.target.name]: e.target.value });
        } else {
            return this.setState({ [e.target.name]: e.target.value });
        } 
        
    }
    
    handleSubmit = (e) => {

        e.preventDefault() 
        const card = {question: this.state.question, code: this.state.code, answer: this.state.answer, category_id: this.state.category_id}
        this.props.addCard(card)
        this.setState({
            question: "",
            code: "",
            answer: "",
            category_id: 0,

            loading: false
        })
    }
    
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <select onChange={this.handleChange}>
                    <option value='Select'>Select</option>
                    {this.props.categories.map((item) => (
        	        <option key={item.id} value={item.id}> {item.name} </option>
                    ))}
                    </select>
                    <br />
                    Question
                    <textarea
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                    />
                    Code Example
                    <textarea
                    name="code"
                    value={this.state.code}
                    onChange={this.handleChange}
                    />
                    Answer
                    <textarea
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

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        loading: state.categoryReducer.loading
    }
}

export default connect(mapStateToProps, { getCategories, addCard })(CardForm)
