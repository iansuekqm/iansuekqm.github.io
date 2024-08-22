import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TemHumidityList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/index.php?action=GET_TEMP_HUMID')
            .then(function (response) {
                console.log('Response data:', response.data);
                setUsers(response.data);
            })
            .catch(function (error) {
                console.error('There was an error fetching the data!', error);
            });
    }

    return (
        <div>
            <h2>Temperature and Humidity Records</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                  return  <tr key={user.id}>
                        <td>{user.temperature}</td>
                        <td>{user.humidity}</td>
                        <td>{user.datetime}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default TemHumidityList;
