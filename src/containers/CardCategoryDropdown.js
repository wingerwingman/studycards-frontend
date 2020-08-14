import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'

class CardCategoryDropdown extends Component {
    state = {
        selectedOption: null,
    }

    componentDidMount() {
        this.props.getCategories()
    }

    handleChange = (e) => {
        if (e.target.name === "")
        e.target.name = "category_id"
    }

    render() {

        return (
            <div>
            <select onChange={this.handleChange}>
                <option value='Select'>Select</option>
                {this.props.categories.map((item) => (
                <option key={item.id} value={item.id}> {item.name} </option>
                ))}
            </select>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories,
        loading: state.categoryReducer.loading
    }
}

export default connect(mapStateToProps, { getCategories })(CardCategoryDropdown)