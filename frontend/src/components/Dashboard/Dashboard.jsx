import {useContext} from 'react';
import { UserContext } from "../../../context/userContext"
import './Dashboard.css'
import houseImage from './house.png';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
// import '.../assets/house.png'
function Dashboard() {
  const data = {
    labels: ['Value 1', 'Value 2', 'Value 3'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    cutoutPercentage: 80, // Adjust this value to cut out more or less from the center
  };
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
                        <div className="profile">
                            <div className="profile-text">
                                <div className="ownerInfo">
                                    Hi UserName ! Welcome,
                                </div>
                                <div className="property-total">
                                    <div className="chart-total">
                                    <Doughnut data={data} className='data1' options={options} />
                                    </div>
                                    <div className="data1-text">
                                    <span> | 63 vacant </span>
                                    <span> | 63 vacant </span>
                                    <span> | 63 vacant </span>
                                    </div>
                                    
                                    {/* <span> | </span><h3>63</h3><h4>vacant</h4>
                                    <span> | </span><h3>63</h3><h4>vacant</h4> */}
                                </div>
                            </div>
                            <div className="profile-images">
                            <img src={houseImage} alt="Placeholder" />
                            </div>
                            
                        </div>
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