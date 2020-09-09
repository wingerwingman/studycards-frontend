import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCategoryDropdown from '../containers/CardCategoryDropdown';



class FlashCards extends Component {
    
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