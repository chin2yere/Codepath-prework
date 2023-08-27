import * as React from "react";
import "./CreateNew.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";

export default function CreateNew() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [youTube, setYouTube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  const navigate = useNavigate();

  const handleCreateNew = async (e) => {
    //e.preventDefault();

    const { data, error } = await supabase
      .from("creators")
      .insert([
        {
          name: name,
          description: description,
          imageURL: image,
          twitter: twitter,
          instagram: instagram,
          youtube: youTube,
        },
      ])
      .select();
  };

  return (
    <section>
      <form>
        <div className="group-businessForm">
          <label className="label-create-form" htmlFor="name">
            <strong>Name:</strong>
          </label>
          <br />
          <input
            className="input-create-form"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="group-businessForm">
          <label className="label-create-form" htmlFor="image">
            <strong>Image:</strong>
          </label>
          <br />
          <p className="prompt">
            Provide a link to an image of your creator. Be sure to include the
            http://
          </p>

          <input
            className="input-create-form"
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        {/* description */}
        <div className="group-businessForm">
          <label className="label-create-form" htmlFor="Description">
            <strong>Description:</strong>
          </label>
          <br />
          <p className="prompt">
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
          <input
            className="input-create-form"
            type="textarea"
            id="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {/* youtube */}
        <div className="group-businessForm">
          <label className="label-create-form" htmlFor="Youtube">
            <strong>Youtube:</strong>
          </label>
          <br />
          <p className="prompt">The creator's YouTube handle (without the @)</p>
          <input
            className="input-create-form"
            type="text"
            id="Youtube"
            value={youTube}
            onChange={(e) => setYouTube(e.target.value)}
          />
        </div>
        {/* twitter */}
        <div className="group-businessForm">
          <label className="label-create-form" htmlFor="Twitter">
            <strong>Twitter:</strong>
          </label>
          <br />
          <p className="prompt">The creator's Twitter handle (without the @)</p>

          <input
            className="input-create-form"
            type="text"
            id="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        {/* instagram */}
        <div className="group-businessForm">
          <label className="label-create-form" htmlFor="Instagram">
            <strong>Instagram:</strong>
          </label>
          <br />
          <p className="prompt">
            The creator's Instagram handle (without the @)
          </p>

          <input
            className="input-create-form"
            type="text"
            id="Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            handleCreateNew();
            navigate("/");
          }}
          className="button-create"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
