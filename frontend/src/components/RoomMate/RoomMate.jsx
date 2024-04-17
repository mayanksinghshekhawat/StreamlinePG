import React from 'react'
import { useNavigate } from 'react-router-dom';
import './RoomMate.css'
import vector1 from './vector1.png'
function RoomMate(){
  const navigate = useNavigate()
  const handleList = () => {
    // Redirect to another page
    navigate('/list');
  };

  const handleFind = () => {
    // Redirect to another page
    navigate('/find');
  };


  return (
    <div className="room_container">
    <div className="heroxyz">
        <div className="LEFT_containner">

        <div className="heading1234">
          <h2>Find Your Favourate RoomMate</h2>
        </div>

        <div className="Buttons">
            <button className='list' onClick={handleList}>List your room</button>
            <button className='list1' onClick={handleFind}>Find a room</button>
        </div>

        </div>
        <div className="herovector">
        <img className='vector' src={vector1} alt="vector" />
        </div>
        
    </div>

    <span className='glimpse'>A glimpse of Various Roomates</span>

    <div className="room_vertical">

        <div className="room_horii">
            <div className="room_card">

            <article className="card56">
              <div className="card-img">
                <div className="card-imgs pv delete">
                  <img className='room_img' src="https://images.pexels.com/photos/17913819/pexels-photo-17913819/free-photo-of-elegant-bald-man-in-white-jacket-with-hands-in-pockets.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
              </div>

              <div className="project-info">
                <div className="flex">
                  <div className="project-title">Title card</div>
                  <span className="tag">type</span>
                </div>
                <span className="lighter"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                  voluptas ullam aut incidunt minima.</span
                >
              </div>
             </article>


            </div>

            <div className="room_card">

              <article className="card56">
                <div className="card-img">
                  <div className="card-imgs pv delete">
                  <img className='room_img' src="https://images.pexels.com/photos/18009070/pexels-photo-18009070/free-photo-of-studio-shot-of-an-elegant-man-in-a-suit.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  </div>
                </div>

                <div className="project-info">
                  <div className="flex">
                    <div className="project-title">Title card</div>
                    <span className="tag">type</span>
                  </div>
                  <span className="lighter"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                    voluptas ullam aut incidunt minima.</span
                  >
                </div>
              </article>


            </div>

            <div className="room_card">

            <article className="card56">
              <div className="card-img">
                <div className="card-imgs pv delete">
                <img className='room_img' src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
              </div>

              <div className="project-info">
                <div className="flex">
                  <div className="project-title">Title card</div>
                  <span className="tag">type</span>
                </div>
                <span className="lighter"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                  voluptas ullam aut incidunt minima.</span
                >
              </div>
             </article>


            </div>

           


        </div>

        <div className="room_horii">

            <div className="room_card">

              <article className="card56">
                <div className="card-img">
                  <div className="card-imgs pv delete">
                  <img className='room_img' src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  </div>
                </div>

                <div className="project-info">
                  <div className="flex">
                    <div className="project-title">Title card</div>
                    <span className="tag">type</span>
                  </div>
                  <span className="lighter"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                    voluptas ullam aut incidunt minima.</span
                  >
                </div>
              </article>


            </div>

            <div className="room_card">

            <article className="card56">
              <div className="card-img">
                <div className="card-imgs pv delete">
                <img className='room_img' src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
              </div>

              <div className="project-info">
                <div className="flex">
                  <div className="project-title">Title card</div>
                  <span className="tag">type</span>
                </div>
                <span className="lighter"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                  voluptas ullam aut incidunt minima.</span
                >
              </div>
             </article>


            </div>

            <div className="room_card">

            <article className="card56">
              <div className="card-img">
                <div className="card-imgs pv delete">
                <img className='room_img' src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
              </div>

              <div className="project-info">
                <div className="flex">
                  <div className="project-title">Title card</div>
                  <span className="tag">type</span>
                </div>
                <span className="lighter"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                  voluptas ullam aut incidunt minima.</span
                >
              </div>
             </article>


            </div>


        </div>

        

    </div>
 

</div>
  )
}

export default RoomMate