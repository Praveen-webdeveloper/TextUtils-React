import React, { useState } from "react";

export default function TextForm(props) {
  //##### It convert into uppercase #####
  const handerUpClick = () => {
    const newText = text.toUpperCase();
    setTest(newText);
    props.showAlert("Convert to UpperCase", "success");
  };

  //##### It convert into uppercase #####
  const handerLowClick = () => {
    const newText = text.toLowerCase();
    setTest(newText);
    props.showAlert("Convert to LowerCase", "success");
  };

  //##### It convert into Sentencecase #####
  const handerSentenceCase = () => {
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
      var sentence = sentences[i].trim();
      if (sentence.length > 0) {
        sentences[i] =
          sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
      }
    }
    var sentenceCase = sentences.join(". ");
    setTest(sentenceCase);
    props.showAlert("Convert to SentenceCase", "success");
  };

  // ##### It is use for Copy Text #####
  const handleCopy = () => {
    var copyText = document.querySelector("textarea");
    // Select the text field
    copyText.select();
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges()
    props.showAlert("Content is Copied on clipboard", "success");
  };

  // ##### Remove extra space #####
  const handleExtraSpace = () => {
    const removeExtraSpace = text.replace(/\s+/g, " ").trim();
    setTest(removeExtraSpace);
    props.showAlert("Extra space has been removed", "success");
  };

  // ##### Clear Text #####
  const handleClearClick = () => {
    const clearText = "";
    setTest(clearText);
    props.showAlert("Clear successful", "success");
  };

  // ##### It is for TextArea #####
  const handeOnChange = (event) => {
    // It will take text and then add new text and then rewrite
    // It will make text area writable
    setTest(event.target.value);
  };

  // It a hook. Text is a main variable and setText is a updation function for text
  const [text, setTest] = useState("");

  return (
    <>
      <div className="container my-3">
        <h2 className="text-center my-3">{props.heading}</h2>
        <textarea
          className="form-control h-25"
          value={text}
          onChange={handeOnChange}
          style={{
            backgroundColor: props.mode === "primary" ? "white" : "black",
            color: props.mode === "primary" ? "black" : "white",
          }}
          id="myBox"
          rows="8"
        ></textarea>
        <div className="d-flex justify-content-between">
          {/* split give text in an array on the bases of space */}
          <p className="mx-4">
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words and {text.length} Characters
          </p>
          {/* time in read */}
          <p className="mx-4">
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes Read
          </p>
        </div>
        <div className="mb-3 my-4">
          <button disabled={text.length===0}
            className={`btn btn-${props.mode} bg-gradient mx-2 my-1`}
            onClick={handerUpClick}
          >
            Convert to UpperCase
          </button>
          <button disabled={text.length===0}
            className={`btn btn-${props.mode} bg-gradient mx-2 my-1`}
            onClick={handerLowClick}
          >
            Convert to LowerCase
          </button>
          <button disabled={text.length===0}
            className={`btn btn-${props.mode} bg-gradient mx-2 my-1`}
            onClick={handerSentenceCase}
          >
            Convert to Sentence case
          </button>
          <button disabled={text.length===0}
            className={`btn btn-${props.mode} bg-gradient mx- my-1`}
            onClick={handleCopy}
          >
            Copy
          </button>
          <button disabled={text.length===0}
            className={`btn btn-${props.mode} bg-gradient mx-2 my-1`}
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
          <button disabled={text.length===0}
            className={`btn btn-${props.mode} bg-gradient mx-2 my-1`}
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-4 ">
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
