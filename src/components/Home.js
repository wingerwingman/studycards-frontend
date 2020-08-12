import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions/cards';

class Home extends Component {
    componentDidMount() {
        this.props.getCards()
    }
    
    // handleClick() {
        
    //         this.props.getCards()
    //         debugger
    //         // const id = event.toElement.id - 1
    //         // this.props.cards {card.answer}
        
    // }
    
    render() {
        const cards = this.props.cards.map((card, i) => <h3 key={i}>{card.question}<br/>{card.code}<br /><button id={card.id} onClick={this.handleClick}>Answer</button></h3>)
        
    
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
        cards: state.cardReducer.cards,
        loading: state.cardReducer.loading
      }
    }


    
export default connect(mapStateToProps, { getCards })(Home);