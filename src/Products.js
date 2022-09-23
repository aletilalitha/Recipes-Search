import React from "react";

const Products = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map((data) => (
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem", marginTop: "15px" }}>
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ fontWeight: "bold", padding: "10px" }}
                >
                  {data.recipe.label}
                </h5>
                <img
                  class="card-img-top"
                  src={data.recipe.image}
                  alt="card image cap"
                />
                <ol style={{ marginTop: "10px" }}>
                  {data.recipe.ingredients.map((ingredients) => (
                    <li>{ingredients.text}</li>
                  ))}
                </ol>
                <p class="card-text" style={{ fontWeight: "bold" }}>
                  Calories:{Math.round(data.recipe.calories)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
