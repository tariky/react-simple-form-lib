import React, { useState } from "react";

export default function FormGroup({ children, onSubmit }) {
  const [formGroup, setFormGroup] = useState({});
  const childrenWithProps = children.map(child => {
    return React.cloneElement(child, {
      addToForm: setFormGroup,
      formGroup: formGroup
    });
  });

  function submitForm() {
    onSubmit(formGroup);
  }

  return (
    <div>
      {childrenWithProps} <button onClick={() => submitForm()}>Submit</button>
    </div>
  );
}
