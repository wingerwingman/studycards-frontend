import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/cards'
import { getCategories } from '../actions/categories'
import { addCategory } from '../actions/categories'
import Select from 'react-select'

class CardForm extends Component {
    state = {
        question: "",
        code: "",
        answer: "",
        category_id: "",
        loading: false
    }

    componentDidMount(){
        return dispatch => {
            dispatch({type: "LOADING_CATEGORIES"})
            return fetch('/categories')
            .then(res => res.json())
            .then(categories => dispatch({type: "CATEGORIES_LOADED", payload: categories}))
        }
    }

    handleChange = (e) => {
        debugger
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
        debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    {/* <Select>this.props.categories.map((cat) => {cat.id}<br/>{cat.name})</Select> */}
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
//       categories: state.addCategories,
//       cards: state.cardReducer.cards,
//       loading: state.cardReducer.loading
//     }
//   }

export default connect(null, { addCard })(CardForm)
