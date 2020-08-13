import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/cards'
import { getCategories } from '../actions/categories'
// import Select from 'react-select'

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
        // console.log(this.props.categories)
    }
    
    handleChange = (e) => {
        // debugger
        console.log(e.target) 
        if (e.target.name === "") {
            e.target.name = "category_id"
            return this.setState({ [e.target.name]: e.target.value });
        } else {
            return this.setState({ [e.target.name]: e.target.value });
        } 
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault() 
        // debugger
        const card = {question: this.state.question, code: this.state.code, answer: this.state.answer, category_id: this.state.category_id}
        console.log(card)
        // const category = {name: this.state.name}
        // this.props.addCategory(category)
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
                    <option disabled hidden value=''>Select</option>
                    {this.props.categories.map((item) => (
        	        <option key={item.id} value={item.id}> {item.name} </option>
                    ))}
                    </select>

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

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        loading: state.categoryReducer.loading
    }
}

export default connect(mapStateToProps, { getCategories, addCard })(CardForm)
