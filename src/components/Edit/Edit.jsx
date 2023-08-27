import * as React from "react";
import "./Edit.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../client";

export default function Edit() {
  const location = useLocation();
  const data = location.state; // Access the passed props
  const passedProps = data.passedProps;
  const namee = passedProps.Name;
  const [name, setName] = useState(passedProps.Name);
  const [image, setImage] = useState(passedProps.image);
  const [description, setDescription] = useState(passedProps.description);
  const [youTube, setYouTube] = useState(passedProps.youTube);
  const [twitter, setTwitter] = useState(passedProps.twitter);
  const [instagram, setInstagram] = useState(passedProps.instagram);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    const { data, error } = await supabase
      .from("creators")
      .update({
        name: name,
        description: description,
        imageURL: image,
        twitter: twitter,
        instagram: instagram,
        youtube: youTube,
      })
      .eq("name", namee)
      .select();

    navigate("/");
  };
  //delete
  const handleDelete = async (e) => {
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("name", namee);
    navigate("/");
  };
  console.log(name);
  return (
    <section>
      <div>
        <div className="group-businessForm">
          <label className="label-create-form" htmlFor="name">
            <strong>Name:</strong>
          </label>
          <br />
          <input
            className="input-edit-form"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="group-businessForm">
          <label className="label-edit-form" htmlFor="image">
            <strong>Image:</strong>
          </label>
          <br />
          <p className="prompt">
            Provide a link to an image of your creator. Be sure to include the
            http://
          </p>

          <input
            className="input-edit-form"
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {/* description */}
        <div className="group-businessForm">
          <label className="label-edit-form" htmlFor="Description">
            <strong>Description:</strong>
          </label>
          <br />
          <p className="prompt">
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
          <input
            className="input-edit-form"
            type="textarea"
            id="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* youtube */}
        <div className="group-businessForm">
          <label className="label-edit-form" htmlFor="Youtube">
            <strong>Youtube:</strong>
          </label>
          <br />
          <p className="prompt">The creator's YouTube handle (without the @)</p>
          <input
            className="input-edit-form"
            type="text"
            id="Youtube"
            value={youTube}
            onChange={(e) => setYouTube(e.target.value)}
          />
        </div>
        {/* twitter */}
        <div className="group-businessForm">
          <label className="label-edit-form" htmlFor="Twitter">
            <strong>Twitter:</strong>
          </label>
          <br />
          <p className="prompt">The creator's Twitter handle (without the @)</p>

          <input
            className="input-edit-form"
            type="text"
            id="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        {/* instagram */}
        <div className="group-businessForm">
          <label className="label-edit-form" htmlFor="Instagram">
            <strong>Instagram:</strong>
          </label>
          <br />
          <p className="prompt">
            The creator's Instagram handle (without the @)
          </p>

          <input
            className="input-edit-form"
            type="text"
            id="Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            handleUpdate();
          }}
          className="button-create"
          type="submit"
        >
          Submit
        </button>
        <button
          onClick={() => {
            handleDelete();
          }}
          className="button-create"
          type="submit"
        >
          delete
        </button>
      </div>
    </section>
  );
}
