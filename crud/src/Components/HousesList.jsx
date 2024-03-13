import React from 'react';
import {House} from './House';
import { housesApi } from '../Rest/HousesApi'; 


export class HousesList extends React.Component {
    state = {
        houses : []
    };
    
    componentDidMount() {
        this.fetchHouses();
        
    }
    //ANCHOR - Get method
    fetchHouses = async () => {
        const houses = await housesApi.get();
        console.log(houses)
        this.setState({houses});
    };
    //ANCHOR - Update method
    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

        
    render() {
        return (
            <div className='house-list'>
                {this.state.houses.map((house) => (
                    <House
                    house={house}
                    key={house._id}
                    updateHouse={this.updateHouse}
                    />
                ))}

            </div>
        )
    }
}

