import { useState } from 'react';
import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
   
  const addUsersHamdler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  } 

  return (
    <div>
      <AddUser onAddUser={addUsersHamdler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
