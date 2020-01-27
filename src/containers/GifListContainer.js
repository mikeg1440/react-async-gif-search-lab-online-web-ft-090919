import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){
    this.fetchGifs()
    .then(json => this.setState({
      gifs: json.data.slice(0,3)
    })
  )
  }

  fetchGifs(query='dolphin'){
    console.log(`Query: ${query}`)
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
  }

  searchGifs = (query) => {
    this.fetchGifs(query)
    .then(json => this.setState({
      gifs: json.data.slice(0,3)
    })
  )}

  render(){
    return (
      <div>
        <GifSearch callback={this.searchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
