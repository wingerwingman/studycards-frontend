import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getCards, deleteCard } from '../actions/cards';
import CardForm from '../containers/CardForm';
import CategoryForm from '../containers/CategoryForm';

class CreateCard extends Component {
    componentDidMount() {
        this.props.getCards()
    }
      
    render() {
      const cards = this.props.cards.map((card, i) => <h3 key={i}>{card.question}<br/>{card.code}<br /><button value={card.answer} key={card.id} onClick={this.handleChange}>Answer{this.props.answer}</button><button id={card.id} onClick={this.handleClick}>X</button></h3>)
    
    
        return (
          <div className="App">
            <h2>Make Flash Card</h2>
            <CardForm />
            <CategoryForm />
            <h2>Flash Cards</h2>
            <ul>
              {/* Change later */}
              {this.props.loading ? <h3>Loading....</h3> : cards}
            </ul>
          </div>
        );
      }
    
    }
    
    const mapStateToProps = state => {
      return {
        categories: state.categoryReducer.categories,
        cards: state.cardReducer.cards,
        loading: state.cardReducer.loading
      }
    }


    
export default connect(mapStateToProps, { getCards, deleteCard })(CreateCard);