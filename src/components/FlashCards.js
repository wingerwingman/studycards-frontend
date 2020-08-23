import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards, deleteCard } from '../actions/cards';
import CardCategoryDropdown from '../containers/CardCategoryDropdown';



class FlashCards extends Component {
  
    componentDidMount() {
        this.props.getCards()
    }

    handleClick = (e) =>{
      this.props.deleteCard(e.target.id)
    }

    handleChange = (e) => {
      alert(e.target.value)
    }
    
    render() {
        
        
        return (
          <div className="FlashCards">
            <h2>Flash Cards</h2>
            <h3>Select Category<CardCategoryDropdown /></h3>
          </div>
        );
      }
    
    }
    
    const mapStateToProps = state => {
      return {
        cards: state.cardReducer.cards,
        loading: state.cardReducer.loading
      }
    }


    
export default connect(mapStateToProps, { getCards, deleteCard, CardCategoryDropdown })(FlashCards);