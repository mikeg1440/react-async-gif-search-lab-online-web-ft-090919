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
      <div class='container'>
        <form onSubmit={this.handleSubmit} class='form-group'>
          <label>Search for Gifs using a keyword</label>
          <input type='text' value={this.state.query} onChange={this.handleChange} style={{width: '50%'}} class='form-control'/>

          <input type='submit' value='Search Gifs' class='btn btn-primary'/>
        </form>
      </div>
    )
  }
}
