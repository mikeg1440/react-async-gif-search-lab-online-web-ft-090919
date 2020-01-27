import React, {Component} from 'react'

export default class GifSearch extends Component{
  constructor(){
    super()
    this.state = {
      query: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.callback(this.state.query)
  }

  handleChange = event => {
    event.persist()
    this.setState({
      query: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <label>Search for Gifs using a keyword</label>
        <input type='text' value={this.state.query} onChange={this.handleChange} />

        <input type='submit' value='Search Gifs' />
      </form>
    )
  }
}
