import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <table border="2" cellPadding="8">
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <img 
                  src={user.picture.medium} 
                  alt={`${user.name.first} ${user.name.last}`} 
                  width="60" 
                  height="60" 
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App