import * as React from "react";
import "./CreatorInfo.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { supabase } from "../../client";
//import "@picocss/pico";

export default function CreatorInfo() {
  const location = useLocation();
  const data = location.state; // Access the passed props
  const passedProps = data.passedProps;
  const youTubeLink = `https://www.youtube.com/@${passedProps.youTube}`;
  const youtubeUsername = `@${passedProps.youTube}`;
  const twitterLink = `https://www.youtube.com/@${passedProps.twitter}`;
  const twitterUsername = `@${passedProps.twitter}`;
  const instagramLink = `https://www.youtube.com/@${passedProps.instagram}`;
  const instagramUsername = `@${passedProps.instagram}`;
  const namee = passedProps.Name;
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("name", namee);
    navigate("/");
  };
  return (
    <div className="creator-info">
      <div className="row-info">
        <div className="col1-info">
          <img
            src={passedProps.image}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col2-info">
          <h1>{passedProps.Name}</h1>
          <p>{passedProps.description}</p>
          <div>
            <a className="links" href={youTubeLink}>
              <AiOutlineYoutube /> {youtubeUsername}
            </a>
            <br />
            <a className="links" href={twitterLink}>
              <AiOutlineTwitter /> {twitterUsername}
            </a>
            <br />
            <a className="links" href={instagramLink}>
              <BsInstagram /> {instagramUsername}
            </a>
          </div>
        </div>
      </div>
      <div>
        <Link to="/edit" state={{ passedProps: passedProps }}>
          <button className="button-edit">Edit</button>
        </Link>
        &nbsp; &nbsp; &nbsp;
        <button
          onClick={() => {
            handleDelete();
          }}
          className="button-edit"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
