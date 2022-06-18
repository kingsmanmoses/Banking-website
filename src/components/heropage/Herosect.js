/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './hero.css';

function Herosect({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className={lightBg ? 'home_hero-sect' : 'home_hero-sect darkBg'}>
        <div className="container">
          <div
            className="row home-hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="home_hero-twrap">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p className={lightTextDesc ? 'home-sub' : 'home-sub dark'}>
                  {description}
                </p>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home-imgwrap">
                <img src={img} alt={alt} className="home-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosect;
