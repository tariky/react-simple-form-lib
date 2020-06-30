import React, { useRef, useEffect, useState } from "react";

export default function FormField({ name, type, defaultValue = "", placeholder, addToForm, formGroup }) {
  const [input, setInput] = useState(defaultValue);
  const [all, setAll] = useState({});
  const formField = useRef("");

  useEffect(() => {
    const name = formField.current.getAttribute("name");
    const value = input;
    addToForm({ ...formGroup, [name]: value });
  }, [input]);

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      ref={formField}
      onChange={e => setInput(e.target.value)}
    />
  );
}
