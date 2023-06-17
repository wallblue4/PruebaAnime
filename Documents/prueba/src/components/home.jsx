import React from "react";
import { Link } from "react-router-dom";   
import axios from "axios";

function Home() {
    const [users, setUsers] = React.useState([]);
    
    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setUsers(res.data);
        });
    }, []);
    
    return (
        <div>
        <h1>Home</h1>
        <ul>
            {users.map((user) => (
            <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Home;