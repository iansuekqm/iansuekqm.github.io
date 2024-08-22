import axios from "axios";
import {useEffect,useState} from "react";


export default function ListUser(){

    const [users,setUsers ]=useState([]);

    useEffect(() => {
      getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users').then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        })
    }

    return (
        <div>
            <h1>userList</h1>
             <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>major</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.major}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
                    </tbody>
             </table>
        </div>
    )
}