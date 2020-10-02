import React, {useState} from 'react';
import axios from "axios";
import {useHistory,Link} from "react-router-dom";
const Adduser = () => {

  let history = useHistory();
  const [user,
    setUser] = useState({name: "", username: "", email: "", phone: "", website: ""});
  const {name, username, email, phone, website} = user;
  const onInputChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/user", user);
    history.push("/");
  }
  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-primary my-3">Back to Home</Link>
      <h1 className="text-center">Add User</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group ml-5 mr-5 pl-5 pr-5">
          <label htmlFor="exampleInputEmail1">Enter Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Could you please tell me your name?"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
            required/>
        </div>
        <div className="form-group ml-5 mr-5 pl-5 pr-5">
          <label htmlFor="exampleInputEmail1">Enter Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Username"
            name="username"
            value={username}
            onChange={e => onInputChange(e)}
            required/>
        </div>
        <div className="form-group ml-5 mr-5 pl-5 pr-5">
          <label htmlFor="exampleInputEmail1">Enter Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Can you enter e-mail here?"
            name="email"
            value={email}
            onChange={e => onInputChange(e)}
            required/>
        </div>
        <div className="form-group ml-5 mr-5 pl-5 pr-5">
          <label htmlFor="exampleInputEmail1">Enter Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="May I know you phone number?"
            name="phone"
            value={phone}
            onChange={e => onInputChange(e)}
            required/>
        </div>
        <div className="form-group ml-5 mr-5 pl-5 pr-5">
          <label htmlFor="exampleInputEmail1">Enter Website Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Do you have a website?"
            name="website"
            value={website}
            onChange={e => onInputChange(e)}
            required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary align-center">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Adduser
