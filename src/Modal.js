import React, { Component } from 'react';


class Myref extends Component {


  constructor(props) {
    super(props)

    this.state = {
       value: ''
    }
    this.MyTitle = React.createRef();
    console.log(this.MyTitle);

  }

  update = event => {
    this.setState({
      value: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.MyTitle.current.style.color = 'red';
  }
  render(){
    return(
      <div >
        <h1 ref={this.MyTitle}>Valeur: {this.state.value}</h1>
        <input type="text" value={this.state.value} onChange={this.update}/>
      </div>
    )
  }
}



export default Myref;
