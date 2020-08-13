import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getCards, deleteCard } from '../actions/cards';
import { getCategories } from '../actions/categories';
import { CardCategoryDropdown } from '../containers/CardCategoryDropdown';



class CategoryPath extends Component {
  
    componentDidMount() {
        this.props.getCards()
    }

    handleClick = (e) =>{
      this.props.deleteCard(e.target.id)
    }

    handleChange = (e) => {
      // debugger
      alert(e.target.value)
      
    }
    
    render() {
        
        const cards = this.props.cards.map((card, i) => <h3 key={i}>{card.question}<br/>{card.code}<br /><button value={card.answer} key={card.id} onClick={this.handleChange}>Answer{this.props.answer}</button><button id={card.id} onClick={this.handleClick}>X</button></h3>)
        
    
        return (
          <div className="CategoryDropdown">
            <CardCategoryDropdown />
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
        cards: state.cardReducer.cards,
        loading: state.cardReducer.loading
      }
    }


    
export default connect(mapStateToProps, { getCards, deleteCard, getCategories, CardCategoryDropdown })(CategoryPath);