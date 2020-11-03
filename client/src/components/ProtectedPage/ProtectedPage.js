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
        <h1>{props.user.username || props.user.displayName}</h1>
      </section>
    </>
  );
};
