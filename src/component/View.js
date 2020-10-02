import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

const View = () => {
  const {id} = useParams();
  const [user,
    setUser] = useState({name: "", username: "", email: "", phone: "", website: ""});
  useEffect(() => {
    loaduser();
  }, []);
  const loaduser = async() => {
    const res = await axios.get(`http://localhost:3003/user/${id}`);
    setUser(res.data);
  }
  const {name, username, email, phone, website} = user;
  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-primary my-3">Back to Home</Link>
      <h1 className="text-center">View User</h1>
      <h1>Name: {name}</h1>
      <h1>UserName: {username}</h1>
      <h1>E-mail: {email}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Website: {website}</h1>

    </div>
  )
}

export default View
