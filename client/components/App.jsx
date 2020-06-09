import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import Recipe from './RecipeComponent.jsx';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      food: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  onClick(){
    axios.get('/api/recipes/'+this.state.food)
      .then((res) => {
        this.setState({
          recipes:res.data,
          food:''
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render(){
    return(
      <div className='main-container'>
        <div className='input-container'>
          <input type='text' placeholder="Enter a Food" value={this.state.food} name = 'food'onChange={this.onChange}/>
          <FaSistrix className="search-icon" onClick={this.onClick}/>
        </div>
        <Recipe recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default App;