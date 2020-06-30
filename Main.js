import React, { useRef, useEffect, useState } from "react";
import FormGroup from "./components/FormGroup";
import FormField from "./components/FormField";

export default function Main() {
  return (
    <>
      <FormGroup onSubmit={(formData) => console.log(formData)}>
        <FormField name="email" type="email" placeholder="email" />
        <FormField name="text" type="text" placeholder="text"/>
      </FormGroup>
    </>
  );
}
