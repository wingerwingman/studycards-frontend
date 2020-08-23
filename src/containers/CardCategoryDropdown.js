import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions/categories';
import { getCards, deleteCard } from '../actions/cards';

class CardCategoryDropdown extends Component {

    state = {
        filterOption: 0
    }

    componentDidMount() {
        this.props.getCards()
        this.props.getCategories()
    }

    handleClick = (e) =>{
        this.props.deleteCard(e.target.id)
      }

    handleAnswerChange = (e) => {
        alert(e.target.value)
    }

    handleChange = (e) => {
        this.setState({
            filterOption: parseInt(e.target.value)
        })
        getCards()
        // if (e.target.name === "") {
        //     e.target.name = "category_id"
        //     return this.setState({ [e.target.name]: e.target.value });
        // } else {
        //     return this.setState({ [e.target.name]: e.target.value });
        // } 
    }

    render() {
        
        // debugger
        let cards = [];
        if (this.state.filterOption !== 0){
            cards = this.props.cards.filter(option => option.category_id === this.state.filterOption).map((card, i) => <h3 key={i}>{card.question}<br/>{card.code}<br /><button value={card.answer} key={card.id} onClick={this.handleAnswerChange}>Answer{this.props.answer}</button><button id={card.id} onClick={this.handleClick}>X</button></h3>)
        } else { 
            cards = this.props.cards.map((card, i) => <h3 key={i}>{card.question}<br/>{card.code}<br /><button value={card.answer} key={card.id} onClick={this.handleAnswerChange}>Answer{this.props.answer}</button><button id={card.id} onClick={this.handleClick}>X</button></h3>)
        }

        return (
            <div>
            <tbody>   
            <select onChange={this.handleChange}>
                <option value='Select'>Select</option>
                {this.props.categories.map((item) => (
                <option key={item.id} value={item.id}> {item.name} </option>
                ))}
            
                {/* Change later */}
            </select>
              {this.props.loading ? <h3>Loading....</h3> : cards}
            </tbody>
            </div>
        )

        
    }
}


const mapStateToProps = state => {
    return {
        cards: state.cardReducer.cards,
        loading: state.cardReducer.loading,
        categories: state.categoryReducer.categories,
    }
}

export default connect(mapStateToProps, { getCategories, getCards, deleteCard })(CardCategoryDropdown)