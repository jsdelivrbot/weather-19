import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {

  constructor() {

    super()
    
    this.state = {
      term: ''
    }
    
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  
  }
  
  onInputChange(e) {
    this.setState({ term: e.target.value})
  }
  
  onFormSubmit(event) {
    
    event.preventDefault()

    this.props.fetchWeather(this.state.term)

  }

  render () {
    return (
      <div className="row">
        <div className="col-lg-6">
          <form
            onSubmit={ this.onFormSubmit }
            className="input-group"
          > 
            <input
              value={ this.state.term }
              onChange={ this.onInputChange }
              className="form-control input-sm" 
              placeholder="type the name of the city" 
              type="text"
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary" 
                type="submit"
              >
                Search
              </button>
            </span>
          </form>
        </div>
      </div>
    )
  }

}

const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators(
    { 
      fetchWeather 
    }, 
    dispatch
  )
}

export default connect(null, mapDispatchtoProps)(SearchBar)