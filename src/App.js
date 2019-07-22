import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons:[
      {id:'vsdf1', name: 'Max', age:28},
      {id:'vsdf2', name: 'Manu', age:27},
      {id:'vsdf3', name: 'stephany', age:26}
    ],
    otherState:'Some other value',
    showPersons:false
  }

  // switchNamehandler=(newName)=>{
  //   // console.log('click');
  //   // dont do this---> this.state.persons[0].name='Parth';
  //   this.setState({
  //     persons:[
  //       {name: newName, age:28},
  //       {name: 'Manu', age:29},
  //       {name: 'stephanie', age:26}
  //     ]
  //   })
  // }

  nameChangeHandler=(event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    
    //const person=Object.assign({},this.state.persons[personIndex]);
    const person={
      ...this.state.persons[personIndex] // it will fetch all details of obj into person
    };

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }

  deletePersonHandler=(personIndex)=>{
    //const persons=this.state.persons.slice();
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }

  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})

  }
 
  render() {
    const style={
        color: 'white',
        backgroundColor:'green',
        font: 'inherit',
        border:'1px solid blue',
        padding: '8px',
        cursor:'pointer',
        ':hover':{
          backgroundColor: 'lightgreen',
          color:'black'
        }
    };

    let persons=null;

    if(this.state.showPersons){
      persons=(
        <div >
          {this.state.persons.map((person,index)=>{
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangeHandler(event,person.id)}/>
          })}
        </div>
      );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor: 'salmon',
        color:'black'
      }
    }

    //let classes=['red','bold'].join(' '); 
    let classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');  //class=['red'];
    }
    if(this.state.persons.length<=1){
      classes.push('bold');  //class=['red','bold'];
    }

    return (
      <StyleRoot>
      <div className="App">
       <h1>Hi i am a react app</h1>
       <p className={classes.join(' ')}>this is really working</p>
       <button 
         style={style}
         onClick={this.togglePersonsHandler}>Toggle Person</button>
       {/* <button onClick={this.switchNamehandler.bind(this,'sameer')}>Switch Name</button> */}
       {persons} 
     
      </div>
      </StyleRoot>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi i am a react'));

  }
} 

export default Radium(App);
