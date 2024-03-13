import React, {Component} from 'react';
import './App.css';
import { HousesList } from './Components/HousesList';
import { NewRoomForm } from './Components/NewRoomForm';



class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
        <NewRoomForm/>
       
      </div>
    )
  }
}
export default App;


