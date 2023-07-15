import React from "react";
import withLayout from "../withLayout";
import { ContactComp } from "../Components/Contact/ContactComp";
const Contact = () => {
  return (
    <>
      <ContactComp />
    </>
  );
};

export default withLayout(Contact);
