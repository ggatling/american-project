import React from 'react';

class Search extends React.Component{
  state = {
    title:''
    //setting the initial state of the title to blank so the user can input a search value
  }

  handleSubmit = () => {
    const {title} = this.state;
    this.props.handleSendRequest(title)
    //passes the title to the sendRequest function
    this.setState({title:''})
  }

  handleInputTitle = (event) => {
    event.preventDefault();
    const title = event.target.value;
    this.setState({title});
  }

  render(){
    const {title} = this.state;
    return (
      <div className= "search">
        <input className="search-box" type="text" onChange={this.handleInputTitle} value={title}/>
        <input className="button" type="submit" onClick={this.handleSubmit} value="Search"/>
      </div>
    )
  }
}

export default Search;
