import React from "react";
import { useState,useRef } from "react";
import "./Texteditor.css";
import JoditEditor from "jodit-react";

export default function Texteditor() {
const inputRef = useRef(null);

const [input, setInput] = useState("");;

  // const onChangeText = (e) => {
  //   e.preventDefault();
  // }
  const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
  };
  return (
    <div className="row">
      <div style={{ marginLeft: "35%", margin: "auto", marginTop: "50px" }}>
        <from className="form">
          <h2 style={{ marginLeft: "48%", marginTop: "5%" }}>Topic</h2>
          <input style={{ width: "30%", marginLeft: "35%" }}></input>
        </from>
      </div>
      <div className="col-md-6" style={{ margin: "auto", marginTop: "50px" }}>
        <div style={{ margin: "0 auto" }}>
          <h3>Fynii Text Editor</h3>
        </div>
        <JoditEditor
          initialvalue= ""
          config={config}
          tabIndex={1}
          ref = {inputRef}
          //   onBlur={(newContent) => getValue(newContent)}
        />
        <button onClick={() => setInput(inputRef.current.value)}>Button</button>
        <br />
        <div>{input}</div>
      </div>
    </div>
  );
}
