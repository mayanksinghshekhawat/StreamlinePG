import {useContext} from 'react';
import { UserContext } from "../../../context/userContext"
import './Dashboard.css'
function Dashboard() {
    // const {user} = useContext(UserContext);
    // console.log(user.name);
    return (
        <div>
            {/* <h1>Dashboard</h1> */}
            {/* <p>Welcome {user.name}</p> */}
            <div className="main">
                <div className="sidebar">
                    <div className="Logo">LOGO HERE!</div>

                    <div className="links">
                        <div className="link">
                            <a href="#">Dashboard</a>
                        </div>
                        <div className="link">
                            <a href="#">Properties</a>
                        </div>
                        <div className="link">
                            <a href="#">Clients</a>
                        </div>
                        <div className="link">
                            <a href="#">Settings</a>
                        </div>
                    </div>

                    <div className="logout">
                        <a href="/logout">Logout</a>
                    </div>
                </div>

                <div className="content">
                    <div className="header-text">
                        <div className="text">Dashboard</div>
                        <div className="images">
                            <div className="search">icons</div>
                        </div>
                    </div>

                    <div className="profileRevenue">
                        <div className="profile"></div>
                        <div className="revenue"></div>
                    </div>

                    <div className="boxes">
                        <div className="cards"></div>
                        <div className="cards"></div>
                        <div className="cards"></div>
                        <div className="cards"></div>
                    </div>

                    <div className="charts">
                        <div className="monthly"></div>
                        <div className="billings"></div>
                    </div>

                    <div className="residents"></div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard