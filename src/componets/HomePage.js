import React from "react";

const HomePage = (props) => {
  return (
    <div>
      <h1>My Hardwear Store </h1>
      <span> item on sales :{props.saleItem}</span>
      <span>
        <button onClick={props.toggleEdit}>
          {" "}
          {props.edit ? "Hide" : "edit sale items"}
        </button>
      </span>
      <div>
        {props.edit ? (
          <input
            type="text"
            value={props.itemsCurOnSales}
            onChange={props.handelItemOnSales}
          />
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
