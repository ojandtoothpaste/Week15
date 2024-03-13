


import {NewRoomForm} from './NewRoomForm'


export const House = ({house, key, updateHouse}) => {
    
    console.log(house)
//ANCHOR - Delete method
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms : house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }
//ANCHOR - Create method
    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]})
    
    const rooms = () => (
        <ul>
            {house.rooms && house.rooms.map((room, index) => (
                <li key={index}>
                    <label>Name: {room.name} Area: {room.area} </label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
    return (
        <div key={house.id}>
            <h1>{house.Name}</h1>
            <img src={house.Photo} alt={house.Name} width="250px" />
            <NewRoomForm addNewRoom = {addNewRoom} />
            {
                rooms({rooms, houseId: house._id, deleteRoom})
            }
           
        </div>
    );
}

