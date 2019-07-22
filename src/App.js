import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { isNull } from 'util';

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age:28},
      {name: 'Manu', age:27},
      {name: 'stephany', age:26}
    ],
    otherState:'Some other value',
    showPersons:false
  }

  switchNamehandler=(newName)=>{
    // console.log('click');
    // dont do this---> this.state.persons[0].name='Parth';
    this.setState({
      persons:[
        {name: newName, age:28},
        {name: 'Manu', age:29},
        {name: 'stephanie', age:26}
      ]
    })
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name: 'Max', age:28},
        {name: event.target.value, age:29},
        {name: 'stephanie', age:26}
      ]
    })
  }

  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})

  }
 
  render() {
    const style={
        backgroundColor:'White',
        font: 'inherit',
        border:'1px solid blue',
        padding: '8px',
        cursor:'pointer'
    };

    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div >
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNamehandler.bind(this,'rakesh')}
          changed={this.nameChangeHandler}>My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
       <h1>Hi i am a react app</h1>
       <p>this is really working</p>
       <button 
         style={style}
         onClick={this.togglePersonsHandler}>Toggle Person</button>
       {/* <button onClick={this.switchNamehandler.bind(this,'sameer')}>Switch Name</button> */}
       {persons}
     
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi i am a react'));

  }
} 

export default App;
