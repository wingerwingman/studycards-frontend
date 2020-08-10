import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getCards } from './actions/cards';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getCards()
  }
  
  render(){
    const cards = this.props.cards.map((card, i) => <li key={i}>{card.question}</li>)


    return (
      <div className="App">
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
export default connect(mapStateToProps, { getCards })(App);
