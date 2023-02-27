import React from 'react'

const SecondSection = () => {
  return (
    <section className='container'>
      <h2>Overview - Today</h2>
      <div className='cards'>
        <div className='card card-grid'>
          <div className='card__subtitle'>Page Views</div>
          <img src ="../assets/icon-facebook.svg" alt='facebook' />
          <div className='card__count card__count--small'>87</div>
          <div className='card__change card__change--up'>
            <img src="../assets/icon-up.svg" alt="up arrow" />
            <div className='card__number'>3%</div>
          </div>
        </div>

        <div className="card card-grid">
            <div className="card__subtitle">Likes</div>
            <img className="" src="../assets/icon-facebook.svg" alt="Facebook" />
            <div className="card__count card__count--small">52</div>
            <div className="card__change card__change--down">
              <img src="../assets/icon-down.svg" alt="down arrow" />
              <div className="card__number">2%</div>
            </div>
          </div>
          <div className="card card-grid">
            <div className="card__subtitle">Likes</div>
            <img className="" src="../assets/icon-instagram.svg" alt="Instagram" />
            <div className="card__count card__count--small">5462</div>
            <div className="card__change card__change--up">
              <img src="../assets/icon-up.svg" alt="up arrow" />
              <div className="card__number">2257%</div>
            </div>
          </div>
          <div className="card card-grid">
            <div className="card__subtitle">Profile Views</div>
            <img className="" src="../assets/icon-instagram.svg" alt="Instagram" />
            <div className="card__count card__count--small">52k</div>
            <div className="card__change card__change--up">
              <img src="../assets/icon-up.svg" alt="up arrow" />
              <div className="card__number">1375%</div>
            </div>
          </div>
          <div className="card card-grid">
            <div className="card__subtitle">Retweets</div>
            <img className="" src="../assets/icon-twitter.svg" alt="Twitter" />
            <div className="card__count card__count--small">117</div>
            <div className="card__change card__change--up">
              <img src="../assets/icon-up.svg" alt="up arrow" />
              <div className="card__number">303%</div>
            </div>
          </div>
          <div className="card card-grid">
            <div className="card__subtitle">Likes</div>
            <img className="" src="../assets/icon-twitter.svg" alt="Twitter" />
            <div className="card__count card__count--small">507</div>
            <div className="card__change card__change--up">
              <img src="../assets/icon-up.svg" alt="up arrow" />
              <div className="card__number">553%</div>
            </div>
          </div>
          <div className="card card-grid">
            <div className="card__subtitle">Likes</div>
            <img className="" src="../assets/icon-youtube.svg" alt="YouTube" />
            <div className="card__count card__count--small">107</div>
            <div className="card__change card__change--down">
              <img src="../assets/icon-down.svg" alt="down arrow" />
              <div className="card__number">19%</div>
            </div>
          </div>
          <div className="card card-grid">
            <div className="card__subtitle">Total Views</div>
            <img className="" src="../assets/icon-youtube.svg" alt="YouTube" />
            <div className="card__count card__count--small">1407</div>
            <div className="card__change card__change--down">
              <img src="../assets/icon-down.svg" alt="down arrow" />
              <div className="card__number">12%</div>
            </div>
          </div>
      </div>


    </section>
  )
}

export default SecondSection