import './App.css'
import { useEffect, useState } from 'react'



function App() {
  //ANCHOR - Mock API from mockapi.io
  const MOCK_API_URL = 'https://65ef1bb5ead08fa78a4fcf13.mockapi.io/week15OJ/user'

const [users, setUsers] = useState([{}])

const [newUserName, setNewUserName] = useState('')
const [newUserJobTitle, setNewUserJobTitle] = useState('')
const [newUserCompanyName, setNewUserCompanyName] = useState('')

const [updatedName, setUpdatedName] = useState('')
const [updatedJobTitle, setUpdatedJobTitle] = useState('')
const [updatedCompanyName, setUpdatedCompanyName] = useState('')


//ANCHOR - Get function
function getUsers(){
  fetch(MOCK_API_URL)
  .then(data => data.json())
  .then(data => setUsers(data))
}
useEffect(() => {
  getUsers()
  console.log(users)
}, [])
//ANCHOR - Delete function
function deleteUser(id){
  fetch(`${MOCK_API_URL}/${id}`, {
    method: 'DELETE'
  }).then(() => getUsers())
}
//ANCHOR - Post function (Create)
function postNewUser(e){
  e.preventDefault()

  console.log(newUserCompanyName, newUserJobTitle, newUserName);
 
  fetch(MOCK_API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: newUserName,
      jobTitle: newUserJobTitle,
      companyName: newUserCompanyName,
    })
  }).then(() => getUsers())
}

//ANCHOR - Update function
function updateUser(e,userObject){
  e.preventDefault()
  
  let updatedUserObject = {
    ...userObject, 
    name: updatedName,
    jobTitle: updatedJobTitle,
    companyName: updatedCompanyName,
  }

  fetch(`${MOCK_API_URL}/${userObject.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUserObject),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => getUsers())
}

//ANCHOR - connecting the post, update and delete
  return (
    <div className="App">
      <form className='postNewUser'>
        <h3>POST new user form</h3>
        <label>Name </label>
        <input onChange={(e) => setNewUserName(e.target.value)}></input>
        <label>Job Title </label>
        <input onChange={(e) => setNewUserJobTitle(e.target.value)}></input>
        <label>Company Name </label>
        <input onChange={(e) => setNewUserCompanyName(e.target.value)}></input><br></br>
        <button onClick={(e) => postNewUser(e)}>Create</button>
      </form>

      {users.map((user, index) => (
        <div key={index} className='userContainer'>
          <div className='user'>
            Name: {user.name}<br></br>
            Job Title: {user.jobTitle}<br></br>
            Company Name: {user.companyName}<br></br>
            <button onClick={() => deleteUser(user.id)}>Delete </button>
          </div>
          <form className='updateForm'>
            <h3>Update this user</h3>
            <label>Update Name </label>
            <input onChange={(e) => setUpdatedName(e.target.value)}></input>
            <label>Update Job Title </label>
            <input onChange={(e) => setUpdatedJobTitle(e.target.value)}></input>
            <label>Update Company Name </label>
            <input onChange={(e) => setUpdatedCompanyName(e.target.value)}></input>
            <button onClick={(e) => updateUser(e, user)}>Update </button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default App

