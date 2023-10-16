import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FetchTodo = () => {

  const [data, setData] = useState([]);

  const apiEndPoint = "https://todo-list-backend-eqk4.onrender.com";

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios({
      method:"get",
      url: `${afpiEndPoint}/getdata`,
      headers : {'Content-Type' : 'application/json'}
    }).then(response => {
      setData(response.data);
    })
  }

  return (
    <div>
      <table className='table table-hover container mt-5'>
        <thead>
          <tr>Todo-list</tr>
        </thead>
        <tbody>
          {
            data.map(list =>
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{(list.completed) === true ? <input type='checkbox' className='form-check-input' disabled checked style={{backgroundColor:"green", color:"white"}} /> : <input type='checkbox' className='form-check-input' style={{ backgroundColor: "green", color: "white" }} />}</td>
                <td><Link to=''><button className='btn btn-primary'><span className='bi bi-pen'></span></button></Link></td>
                <td><button className='btn btn-danger'><span className='bi bi-trash'></span></button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default FetchTodo;