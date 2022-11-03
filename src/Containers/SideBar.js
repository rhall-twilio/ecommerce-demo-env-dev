import React from "react";
import BasketCart from "./BasketCart";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import AccountButton from "./AccountButton";

export const SideBar = () => {
  return (
    <div>
      <div className="row">
        <BasketCart />
      </div>
      
      <div className="row">
        <AccountButton />
      </div>
      <br />

      <Categories />
      <Newsletter />
    </div>
  );
};
