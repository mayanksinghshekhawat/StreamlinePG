import {useContext} from 'react';
import { UserContext } from "../../../context/userContext"

function Dashboard() {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {user.name}</p>
        </div>
    )
}

export default Dashboard