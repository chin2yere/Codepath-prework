import * as React from "react";
import "./Body.css";
import { useState, useEffect } from "react";
import CreateNew from "../CreateNew/CreateNew";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import Card from "../Card/Card";

export default function Body({ viewAll }) {
  const [creatorList, setCreatorList] = useState([]);
  const handleFetchAll = async (e) => {
    let { data: creators, error } = await supabase.from("creators").select("*");
    setCreatorList(creators);
    console.log(creators);
  };
  useEffect(() => {
    handleFetchAll();
  }, []);

  if (viewAll) {
    return (
      <div className="grid-container">
        {creatorList &&
          creatorList !== [] &&
          creatorList.map((creator) => (
            <div key={creator.imageURL}>
              <Card
                Name={creator.name}
                youTube={creator.youtube}
                twitter={creator.twitter}
                instagram={creator.instagram}
                description={creator.description}
                image={creator.imageURL}
              />
            </div>
          ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          <CreateNew />
        </h1>
      </div>
    );
  }
}
