import React from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends React.Component{
  constructor(props){
    super();
    this.state = {
      data: [
        {title: "Sausage Party"},
        {title: "Morgan"},
        {title: "Things to Come"}
      ]
    }
  }
  render(){
    return(<div>
            <h1>UK Opening This Week</h1>
            < FilmList data={this.state.data}/>
          </div>);
  }
}

export default FilmBox;
