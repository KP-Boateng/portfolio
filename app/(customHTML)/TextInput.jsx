import { useEffect, useState } from "react";

const TextInput = ({
  input,
  name,
  onChangeHandler,
  type,
  label,
  required,
  inputStyle,
  theme,
}) => {
  // const [input, setInput] = useState("");
  const [textActive, setTextActive] = useState(false);

  useEffect(() => {
    input && setTextActive(true);
    !input && setTextActive(false);
  }, [input]);
  // const onChangeHandler = (event) => {
  //   setInput(event.target.value);
  // };
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <label
          className={`font-bold font-serif relative  left-1 transition-all duration-700
         
          ${
            textActive && theme === "light"
              ? "top-0 text-black"
              : !textActive && theme === "light"
              ? "top-8 text-black"
              : textActive && theme === "dark"
              ? "top-0 text-white"
              : "text-black top-8"
          }`}
        >
          {label}
        </label>
      </div>
      <div>
        <input
          type={type}
          className={inputStyle}
          value={input}
          required={required}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default TextInput;
