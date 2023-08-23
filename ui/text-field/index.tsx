import { Input, Label, StyledTextArea } from "./styled";

type TextField = {
  name: string;
  title: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
};

export function TextField({
  type = "text",
  name,
  placeholder,
  title,
  required,
}: TextField) {
  return (
    <div>
      <Label htmlFor={name} style={{ fontFamily: "var(--main-font)" }}>
        {title}
      </Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        required={required}
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
