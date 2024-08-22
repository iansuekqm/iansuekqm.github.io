import { useState } from "react";
import axios from "axios";

export default function CreateUser() {
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/create', input)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error making the request:', error);
                if (error.response) {
                    // 请求已发出，服务器响应了状态码，但状态码超出了2xx范围
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                } else if (error.request) {
                    // 请求已发出，但没有收到响应
                    console.error('Request data:', error.request);
                } else {
                    // 发生了一些在设置请求时触发的错误
                    console.error('Error message:', error.message);
                }
            });

        console.log(input);
    };

    return (
        <div>
            <h1>create users</h1>
            <form onSubmit={handleSubmit}>
                <label>姓名：</label>
                <input type="text" name="name" onChange={handleChange} />
                <label>邮箱：</label>
                <input type="email" name="email" onChange={handleChange} />
                <label>专业：</label>
                <input type="text" name="major" onChange={handleChange} />
                <label>电话：</label>
                <input type="text" name="phone" onChange={handleChange} />
                <label>密码：</label>
                <input type="text" name="password" onChange={handleChange} />
                <button type="submit">提交</button>
            </form>
        </div>
    );
}