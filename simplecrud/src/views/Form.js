import { useState } from "react";
import axios from "axios";

export default function FormPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const add = () => {
    axios
      .post("http://localhost:4002/books", {
        name,
        description,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-10 justify-start content-start text-left">
      <div className="text-2xl">Name</div>
      <input
        type={"text"}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border border-slate-800"
      ></input>
      <div className="text-2xl">Description</div>
      <input
        type={"text"}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="border border-slate-800"
      ></input>
      <div>
        <button
          className="border rounded-xl bg-slate-900 text-white px-3 py-1 mt-2"
          title="Submit"
          onClick={add}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
