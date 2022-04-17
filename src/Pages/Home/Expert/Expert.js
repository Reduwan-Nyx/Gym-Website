import React from "react";

const Expert = ({ expert }) => {
  const { name, img, description } = expert;
  return (
    <div className= "g-5 col-12 col-md-6 col-lg-4">
      <div card>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Expert;
