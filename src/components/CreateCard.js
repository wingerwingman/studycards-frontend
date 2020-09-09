import React, { Component} from 'react';
import CardForm from '../containers/CardForm';
import CategoryForm from '../containers/CategoryForm';

class CreateCard extends Component {
      
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

    
export default CreateCard;