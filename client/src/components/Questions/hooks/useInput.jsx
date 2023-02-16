import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const thevalue = () => {
    setValue('');
  }

  return {
    value,
    onChange: handleChange,
    reset: {thevalue}
  };
};