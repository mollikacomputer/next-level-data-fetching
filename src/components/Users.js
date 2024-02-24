"use client"
import { useEffect, useState } from "react";
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);
    return (
        <div>
            <h1 className="text-3xl"> Total Users: {users.length} </h1>
            {
              users.map((user)=> (
                <div key={user.id} className="card bg-gray-100 shadow-xl my-4 w-[70%] mx-auto">
                    <div className="card-body">
                        <h2 className="card-title">user name is: {user.name}</h2>
                        <p>{user.email}</p>
                        <p> Likes: {user.phone}</p>
                    </div>
                </div>
                ))
            }
        </div>
    );
};
export default Users;