import React, { useState } from "react";
import HomePage from "./componets/HomePage";

const App = () => {
  const [itemsCurOnSales, setItemsCurOnSales] = useState("A Hammer");
  const [edit, setEdit] = useState(true);
  const toggleEdit = (event) => setEdit(!edit);
  const handelItemOnSales = (event) => {
    const itemsCurOnSales = event.target.value;
    setItemsCurOnSales(itemsCurOnSales);
  };

  return (
    <div>
      <HomePage
        saleItem={itemsCurOnSales}
        edit={edit}
        toggleEdit={toggleEdit}
        handelItemOnSales={handelItemOnSales}
      />
    </div>
  );
};

export default App;
