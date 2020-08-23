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
    
        return (
          <div className="App">
            <h2>Make Flash Card</h2>
            <CardForm />
            <CategoryForm />
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