import * as React from "react";
import "./Card.css";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Card({
  Name,
  youTube,
  twitter,
  instagram,
  description,
  image,
}) {
  const passedProps = {
    Name: Name,
    youTube: youTube,
    twitter: twitter,
    instagram: instagram,
    description: description,
    image: image,
  };
  function displayYoutubeLink() {
    if (youTube !== "") {
      const link = `https://www.youtube.com/@${youTube}`;
      return (
        <a href={link} className="anchor">
          <AiOutlineYoutube />
        </a>
      );
    }
  }
  function displayTwitterLink() {
    if (twitter !== "") {
      const link = `https://twitter.com/${twitter}`;
      return (
        <a href={link} className="anchor">
          <AiOutlineTwitter />
        </a>
      );
    }
  }
  function displayInstagramLink() {
    if (instagram !== "") {
      const link = `https://www.instagram.com/${instagram}`;
      return (
        <a href={link} className="anchor">
          <BsInstagram />
        </a>
      );
    }
  }
  function displayInformationButton() {
    return (
      <div>
        <Link
          key={Name}
          to={`/creator/${Name}`}
          state={{ passedProps: passedProps }}
          className="anchor"
        >
          <AiOutlineInfoCircle />
        </Link>
      </div>
    );
  }

  function displayEditButton() {
    return (
      <div>
        <Link
          to="/edit"
          state={{ passedProps: passedProps }}
          className="anchor"
        >
          <AiFillEdit />
        </Link>
      </div>
    );
  }
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "::before": {
      //   content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(128, 128, 128, 0.5)",
    },
  };

  return (
    <div className="creator-card" style={divStyle}>
      <div className="row-creator-card">
        <div className="leftcol-creator-card">
          <h4>{Name}</h4>
          <br />
          <div className="row-creator-card">
            {displayYoutubeLink()}
            {displayInstagramLink()} {displayTwitterLink()}
          </div>
        </div>
        <div className="rightcol-creator-card">
          <div className="row-creator-card">
            {displayInformationButton()}
            {displayEditButton()}
          </div>
        </div>
      </div>
      <div className="row-creator-card">{description}</div>
    </div>
  );
}
