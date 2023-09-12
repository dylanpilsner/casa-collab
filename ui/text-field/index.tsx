import { Input, Label, StyledTextArea } from "./styled";
import { useState, useEffect } from "react";

type TextField = {
  name: string;
  title: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  color?: string;
  value?: string;
};

export function TextField({
  type = "text",
  name,
  placeholder,
  title,
  required,
  color,
}: TextField) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: any) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <Label
        htmlFor={name}
        style={{ fontFamily: "var(--main-font)", color: color ?? "black" }}
      >
        {title}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={name}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
}
export function ControlledTextField({
  type = "text",
  name,
  placeholder,
  title,
  required,
  color,
  value,
}: TextField) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  function handleChange(e: any) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <Label
        htmlFor={name}
        style={{ fontFamily: "var(--main-font)", color: color ?? "black" }}
      >
        {title}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={name}
        value={inputValue}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
}

export function TextArea({ name, placeholder, title, required }: TextField) {
  return (
    <div>
      <Label htmlFor={name} style={{ fontFamily: "var(--main-font)" }}>
        {title}
      </Label>
      <StyledTextArea
        name={name}
        id={name}
        cols={30}
        rows={10}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
