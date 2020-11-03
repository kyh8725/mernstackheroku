import React from "react";
import AuthButton from "../AuthButton";

export default (props) => {
  console.log(props);
  return (
    <>
      <section className="garage">
        <AuthButton />
        <p>
          <strong>This page is under construction </strong>
        </p>
        <p>saved vehicles will be shown here</p>
        <p>you can check their specs, mileasges, maintenance info and etc.</p>
        <h1>{props.user.username || props.user.displayName}</h1>
      </section>
    </>
  );
};
