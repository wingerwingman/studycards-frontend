// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import CardCategoryDropdown from './CardCategoryDropdown'
// import { getCards, deleteCard } from '../actions/cards'

// class FilterDropDown extends Component {

//     state = {
//         category_id: 0,
//         loading: false
//     }

//     componentDidMount() {
//         this.props.getCards()
//     }

//     handleClick = (e) =>{
//         this.props.deleteCard(e.target.id)
//       }

//     render() {
        
//         if (CardCategoryDropdown) {
//             this.props.cards.sort(function (a, b) {
//             if (a === b) {
//             return 1;
//             }
//             return -1;
//             })
//           }

//           const cards = this.props.cards.map.filter(CardCategoryDropdown)((card, i) => <h3 key={i}>{card.question}<br/>{card.code}<br /><button value={card.answer} key={card.id} onClick={this.handleChange}>Answer{this.props.answer}</button><button id={card.id} onClick={this.handleClick}>X</button></h3>)

//         return (
//             <div>
//                 {/* Change later */}
//               {this.props.loading ? <h3>Loading....</h3> : cards}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//       cards: state.cardReducer.cards,
//       loading: state.cardReducer.loading
//     }
//   }

// export default connect(mapStateToProps, { getCards, deleteCard })(FilterDropDown);