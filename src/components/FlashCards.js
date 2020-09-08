import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCategoryDropdown from '../containers/CardCategoryDropdown';



class FlashCards extends Component {

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


    
export default connect(null, { CardCategoryDropdown })(FlashCards);