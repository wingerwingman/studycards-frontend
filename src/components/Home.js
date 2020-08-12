import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions/cards';
import CardForm from '../containers/CardForm';
import CategoryForm from '../containers/CategoryForm';

class Home extends Component {
    componentDidMount() {
        this.props.getCards()
        // this.props.getCategories()
    }
      
    render() {
        const cards = this.props.cards.map((card, i) => <h3 key={i}>{card.question}<br/>{card.code}</h3>)
    
    
        return (
          <div className="Home">
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


    
export default connect(mapStateToProps, { getCards })(Home);