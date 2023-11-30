"use client";

import { Email, Phone } from "@mui/icons-material";
import TextInput from "../(customHTML)/TextInput";
import { useRef, useState } from "react";
import { useAppContext } from "./AppContext";
import { SpaceBold } from "../(fonts)/font";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { theme } = useAppContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const form = useRef();
  const showToastMessage = () => {
    toast.success("Email Sent!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastErrorMessage = () => {
    toast.success(
      "Email Not Sent. Please check your Internet connection and try again!",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mkx0nhb",
        "template_4g5dlei",
        form.current,
        "rNQTeKHJqIfDy4VUV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setName("");
          setDescription("");

          showToastMessage();
        },
        (error) => {
          showToastErrorMessage();
        }
      );
  };
  return (
    <div className="w-full py-4 px-2">
      <h1 className={` text-3xl ${SpaceBold.className}`}>CONTACT</h1>
      <div className="bg-orange-400 h-1"></div>
      <div className=" flex flex-col gap-4 mt-4">
        <div className=" flex flex-col gap-4 w-full sm:flex-row">
          <div
            className={`flex-1 p-4  flex gap-2  rounded-lg ${
              theme === "light" ? "bg-orange-200" : "bg-slate-400"
            }`}
          >
            <div>
              <Phone sx={{ color: theme === "light" ? "orange" : "white" }} />
            </div>
            <div
              className={`flex flex-col gap-2 ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              <div>
                <h1 className=" font-bold">Phone:</h1>
              </div>
              <div>
                <h1 className="font-medium">+233598045846</h1>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 p-4  flex gap-2  rounded-lg ${
              theme === "light" ? "bg-slate-200" : "bg-slate-400"
            }`}
          >
            <div>
              <Email sx={{ color: theme === "light" ? "orange" : "white" }} />
            </div>
            <div
              className={`flex flex-col gap-2 ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              <div>
                <h1 className="font-bold">Email:</h1>
              </div>
              <div>
                <h1 className="font-medium ">opaul816@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={onSubmitForm}>
            <TextInput
              input={name}
              name={"user_name"}
              label={"Name"}
              type={"text"}
              theme={theme}
              required
              inputStyle={`w-full text-black px-2 py-4 rounded-md font-medium font-mono ${
                theme === "light" && "bg-slate-200"
              }`}
              onChangeHandler={(e) => {
                setName(e.target.value);
              }}
            />
            <TextInput
              input={email}
              name={"user_email"}
              label={"Email"}
              type={"email"}
              theme={theme}
              required
              inputStyle={`w-full text-black px-2 py-4 rounded-md  font-medium font-mono ${
                theme === "light" && "bg-slate-200"
              }`}
              onChangeHandler={(e) => {
                setEmail(e.target.value);
              }}
            />

            <textarea
              value={description}
              name="message"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className={`w-full text-black mt-8 font-mono h-28 p-2 rounded-md ${
                theme === "light" && "bg-slate-200"
              }`}
              placeholder="Your message here"
            />
            <button
              type="submit"
              className={`mt-4 p-2 border-2 border-orange-400 rounded-2xl font-mono font-bold ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
