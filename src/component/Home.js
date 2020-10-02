import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [user,setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async() => {
    const result = await axios.get("http://localhost:3003/user");
    setUser(result.data.reverse());
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/user/${id}`);
    loadUser();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">Home Page</h1>

        <table className="table mt-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
                user.map((user,index)=>(
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-success" to={`/viewuser/${user.id}`}>view</Link>
                            <Link className="btn btn-warning mx-1" to={`/edituser/${user.id}`}>edit</Link>
                            <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>delete</Link>
                        </td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;
