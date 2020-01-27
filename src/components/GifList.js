import React, {Component} from 'react'

export default class GifList extends Component{

  renderList = () => {
    return this.props.gifs.map( gif => <li><img src={gif.images.original.url} alt={gif.title} /></li>)
  }

  render(){
    return <ul>{this.renderList()}</ul>
  }
}
