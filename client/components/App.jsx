import React from 'react';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      food: ''
    }
  }

  render(){
    return(
      <h1>
        Hello realy?
      </h1>
    )
  }
}

export default App;