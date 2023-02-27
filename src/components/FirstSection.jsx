import React from "react";

const FirstSection = () => {
  return (
    <section className="container cards">
      <div className="card card--facebook">
        <div className="card__platform">
          <img
            className="card__icon"
            src="../assets/icon-facebook.svg"
            alt="Facebook"
          />
          <div className="card__username">@nathanf</div>
        </div>
        <div className="card__followers">
          <div className="card__count card__count--big">1987</div>
          <div className="card__label">Followers</div>
        </div>
        <div className="card__change card__change--up">
          <img src="../assets/icon-up.svg" alt="up arrow" />
          <div className="card__number">12 Today</div>
        </div>
      </div>

      <div className="card card--twitter">
          <div className="card__platform">
            <img
              className="card__icon"
              src="../assets/icon-twitter.svg"
              alt="Twitter"
            />
            <div className="card__username">@nathanf</div>
          </div>
          <div className="card__followers">
            <div className="card__count card__count--big">1044</div>
            <div className="card__label">Followers</div>
          </div>
          <div className="card__change card__change--up">
            <img src="../assets/icon-up.svg" alt="up arrow" />
            <div className="card__number">99 Today</div>
          </div>
        </div>

        <div className="card card--instagram">
          <div className="card__platform">
            <img
              className="card__icon"
              src="../assets/icon-instagram.svg"
              alt="Instagram"
            />
            <div className="card__username">@nathanf</div>
          </div>
          <div className="card__followers">
            <div className="card__count card__count--big">11k</div>
            <div className="card__label">Followers</div>
          </div>
          <div className="card__change card__change--up">
            <img src="../assets/icon-up.svg" alt="up arrow" />
            <div className="card__number">1099 Today</div>
          </div>
        </div>

        <div className="card card--youtube">
          <div className="card__platform">
            <img
              className="card__icon"
              src="../assets/icon-youtube.svg"
              alt="YouTube"
            />
            <div className="card__username">@nathanf</div>
          </div>
          <div className="card__followers">
            <div className="card__count card__count--big">8239</div>
            <div className="card__label">Followers</div>
          </div>
          <div className="card__change card__change--down">
            <img src="../assets/icon-down.svg" alt="down arrow" />
            <div className="card__number">144 Today</div>
          </div>
        </div>
    </section>
  );
};

export default FirstSection;
