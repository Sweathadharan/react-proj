import React from 'react';
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import Menu from "./Menu";

const Main = () => {
  return (
    <>
      <div className="hero">
        <div class="card bg-dark text-white">
          <div class="card bg-dark text-white border-0">
            <img
              src="https://cdn.webshopapp.com/shops/320350/files/370222619/kids-and-glasses-what-to-take-into-account-when-bu.jpg"
              class="card-img"
              alt="bg"
              height="750px"
            ></img>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 class="card-title display-5 fw-bolder mb-8">
                  NEW SEASON ARRIVALS
                </h5>
                <p class="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
