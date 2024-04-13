import {useContext,useEffect,useRef} from 'react';
import { UserContext } from "../../../context/userContext"
import './Dashboard.css'
import { Bar } from 'react-chartjs-2';
import houseImage from './house.png';
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import residents from './residents.png';
import arrow from './arrow.png';
import rentPaid from './rentPaid.png';
import rentUnpaid from './rentUnpaid.png';
import maintanence from './maintanence.png'
ChartJS.register(ArcElement, Tooltip, Legend);
// import '.../assets/house.png'
function Dashboard() {

  const firstValue = 735;
  const secondValue = 6465;
  const currentRange = 7200;
  const Navigate = useNavigate();
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
        
    const {user} = useContext(UserContext);
    const userName = user?.name || "Refresh";
    // console.log(user.name);
    return (
        <div>
            {/* <h1>Dashboard</h1> */}
            {/* <p>Welcome {user.name}</p> */}
            <div className="main">
            <div className="sidebar">
      <div className="card">
  <div className="card-border-top">
  </div>
  <div className="img">
  </div>
  <span> {userName}</span>
  <p className="job"> Job Title</p>
  {/* <button> Click
  </button> */}
</div>
        {/* <button className="shadow__btn">StreamlinePG</button> */}
    
        <div className="links">
        <Link to="/" className="btn">Home</Link>
          <button className="btn">Tenants List</button>
          <button className="btn">Add Property</button>
          <button className="btn">Manage</button>
        </div>

        <button className="Btn">
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>

          <div className="text">Logout</div>
        </button>
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
                        <div className="revenue">
                        <div className="card-container">
      <div className="card-content">
        <div className="card-title">Bills Collected</div>
        <div className="values">
          <div>$<span id="first">{firstValue}</span></div> /
          <div>$<span id="second">{secondValue}</span></div>
        </div>
        <small className="current-range">
          Current Status:
          <div>$<span id="third">{currentRange}</span></div>
        </small>
        <div data-range="#third" data-value-1="#second" data-value-0="#first" className="slider">
          <label className="label-min-value">1</label>
          <label className="label-max-value">{secondValue}</label>
        </div>
        <div className="rangeslider">
          <input className="min input-ranges" name="range_1" type="range" min="1" max={secondValue} value={currentRange} disabled />
        </div>
      </div>
    </div>
                        </div>
                    </div>

                    <div className="boxes">
                        <div className="cards">
                          <div className="residents">
                            <div className="resiimg">
                            <img src={residents} alt="Placeholder" className='residents'/>
                            </div><div className="numberresi">
                            Number of resident
                          </div>
                          </div>
                          <div className="actualNumber">
                            <div className="actualNums">10</div>
                            <div className="seehere">
                              <img src={arrow} alt="" />
                            </div>
                          </div>
                          
                        </div>
                        <div className="cards">
                        <div className="residents">
                            <div className="resiimg">
                            <img src={rentPaid} alt="Placeholder" className='residents'/>
                            </div><div className="numberresi">
                            Number (Rent Paid)
                          </div>
                          </div>
                          <div className="actualNumber">
                            <div className="actualNums">10</div>
                            <div className="seehere">
                              <img src={arrow} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="cards">
                        <div className="residents">
                            <div className="resiimg">
                            <img src={rentUnpaid} alt="Placeholder" className='residents'/>
                            </div><div className="numberresi">
                            Number (Rent UnPaid)
                          </div>
                          </div>
                          <div className="actualNumber">
                            <div className="actualNums">0</div>
                            <div className="seehere">
                              <img src={arrow} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="cards">
                        <div className="residents">
                            <div className="resiimg">
                            <img src={maintanence} alt="Placeholder" className='residents'/>
                            </div><div className="numberresi">
                            Maintainence Request
                          </div>
                          </div>
                          <div className="actualNumber">
                            <div className="actualNums">4</div>
                            <div className="seehere">
                              <img src={arrow} alt="" />
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="charts">
                        <div className="monthly">
                        </div>
                        <div className="billings">
                       
                        </div>
                    </div>

                    <div className="residents"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard