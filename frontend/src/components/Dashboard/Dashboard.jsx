import {useContext} from 'react';
import { UserContext } from "../../../context/userContext"
import './Dashboard.css'
import houseImage from './house.png';
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
// import '.../assets/house.png'
function Dashboard() {
    let data= [
        {
          label: "Label 1",
          value: 55,
          color: "rgba(0, 43, 73, 1)",
          cutout: "50%",
        },
        {
          label: "Label 2",
          value:15,
          color: "rgba(0, 103, 160, 1)",
          cutout: "50%",
        },
        {
          label: "Label 3",
          value: 80,
          color: "rgba(83, 217, 217, 1)",
          cutout: "50%",
        },
      ]
      
      const options = {
        plugins: {
          responsive: true,
          legend: {
            display: false // Hide legend
          },
          tooltip: {
            enabled: false // Hide tooltip
          },
          datalabels: {
            display: false // Hide data labels
          }
        },
        cutout: data.map((item) => item.cutout),
      };
      
      
        const finalData = {
          labels: data.map((item) => item.label),
          datasets: [
            {
              data: data.map((item) => Math.round(item.value)),
              backgroundColor: data.map((item) => item.color),
              borderColor: data.map((item) => item.color),
              borderWidth: 1,
              dataVisibility: new Array(data.length).fill(true),
            },
          ],
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
                            <a href="/PropertyForm">Properties</a>
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
                                
                                    <div className="chart-total">
                                    <Doughnut data={finalData} options={options} />
                                    </div>
                                    <div className="data1-text">
    <div className="separator"></div>
    <span>63 vacant</span>
    <div className="separator"></div>
    <span>63 vacant</span>
    <div className="separator"></div>
    <span>63 vacant</span>
</div> 
                                    
                                    {/* <span> | </span><h3>63</h3><h4>vacant</h4>
                                    <span> | </span><h3>63</h3><h4>vacant</h4> */}
                                
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