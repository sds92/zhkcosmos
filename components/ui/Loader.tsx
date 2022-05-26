import React from 'react';
import styles from './ui.module.sass';

type LoaderProps = {
    className: string
}

const Loader = ({className} : LoaderProps) => (
  <div className={className}>
    <div className="ios">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <span id='text-loader'></span>
    <style jsx>{`
      #text-loader {
        margin-left: 30px;
        vertical-align: middle;
      }
      /****************************
        ANIMATIONS
      *****************************/
      @keyframes clockwise {
        to {
          transform: rotate(360deg) translatez(0);
        }
      }
      @keyframes counter-clockwise {
        to {
          transform: rotate(-360deg) translatez(0);
        }
      }
      
      /****************************
        iOS STYLE SPINNER
      *****************************/
      .ios {
        width: 0;
        height: 0;
        animation: clockwise 1s steps(8, end) infinite;
      }
      
      .ios div {
        width: 6px;
        height: 40px;
        margin-top: calc(-40px/2);
        margin-left: calc(-6px/2);
        position: absolute;
      }
      
      .ios div:before,
      .ios div:after {
        background-color: rgba(82, 216, 175, 0.2);
        display: block;
        position: absolute;
        width: 100%;
        height: 25%;
      }
      
      .ios div:before {
        border-radius: 6px 6px 0 0;
        top: 0;
      }
      
      .ios div:after {
        border-radius: 0 0 6px 6px;
        bottom: 0;
      }
      
      .ios div:nth-of-type(1):after {
        background-color: rgba(82, 216, 175, 0.625);
      }
      
      .ios div:nth-of-type(2) {
        transform: rotate(45deg) translatez(0);
      }
      
      .ios div:nth-of-type(2):after {
        background-color: rgba(82, 216, 175, 0.75);
      }
      
      .ios div:nth-of-type(3) {
        transform: rotate(90deg) translatez(0);
      }
      
      .ios div:nth-of-type(3):after {
        background-color: rgba(82, 216, 175, 0.875);
      }
      
      .ios div:nth-of-type(4) {
        transform: rotate(135deg) translatez(0);
      }
      
      .ios div:nth-of-type(4):after {
        background-color: white;
      }
      
      /****************************
        GLOBAL STYLES
      *****************************/
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      
      *:before, *:after {
        content: '';
      }
      
      body {
        background-color: #fff;
        padding: 20px;
      }
      
    `}</style>
  </div>
);

export default Loader;
