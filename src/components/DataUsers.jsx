import React, { useState } from "react";
import data from "../json/data.json";

const DataUsers = () => {
  const random = Math.floor(Math.random() * data.length);
  const auxObj = data[Math.floor(Math.random() * data.length)];
  const { large } = auxObj.picture;
  const { title, first, last } = auxObj.name;
  const email = auxObj.email;
  const phone = auxObj.phone;
  const { city, state, country } = auxObj.location;

  const [shuffle, setshuffle] = useState(0);
  const randomUser = () => {
    setshuffle(Math.floor(Math.random() * data.length));
    console.log(random);
  };
  return (
    <div className={`App bg${random}`}>
      <div className={`cards_Users card${random}`}>
        <h1>{`${title} ${first} ${last} `}</h1>
        <img src={large} alt="" />
        <div className="box_icons">
          <box-icon name="envelope" color={`var(--Color${random})`}></box-icon>
          <p>{`${email} `}</p>
        </div>
        <div className="box_icons">
          <box-icon name="phone" color={`var(--Color${random})`}></box-icon>
          <p>{`${phone} `}</p>
        </div>
        <div className="box_icons">
          <box-icon name="map" color={`var(--Color${random})`}></box-icon>
          <p>{`${city} ${state} ${country} `}</p>
        </div>
        <div className={`iconrepeat bg${random}`}>
          <box-icon
            onClick={randomUser}
            className="repeat"
            name="repeat"
            ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default DataUsers;
