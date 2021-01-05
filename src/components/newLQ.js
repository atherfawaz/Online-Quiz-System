import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";

const NewLQ = () => {
  const [k1, setk1] = useState("");
  const [k2, setk2] = useState("");
  const [k3, setk3] = useState("");
  const [k4, setk4] = useState("");
  const [k5, setk5] = useState("");
  const [k6, setk6] = useState("");
  const [k7, setk7] = useState("");
  const [k8, setk8] = useState("");
  const [k9, setk9] = useState("");
  const [k10, setk10] = useState("");
  const [question, setQuestion] = useState("");
  const [marks, setMarks] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const makeAxiosCall = () => {
    console.log(
      "Variables set. Placeholder function for axios call. Just send variables from inside this function."
    );
  };

  const handleClick = () => {
    setQuestion(document.getElementById("question").value);
    setk1(document.getElementById("k1").value);
    setk2(document.getElementById("k2").value);
    setk3(document.getElementById("k3").value);
    setk4(document.getElementById("k4").value);
    setk5(document.getElementById("k5").value);
    setk6(document.getElementById("k5").value);
    setk7(document.getElementById("k6").value);
    setk8(document.getElementById("k7").value);
    setk9(document.getElementById("k8").value);
    setk10(document.getElementById("k9").value);
    setk10(document.getElementById("k10").value);
    setMarks(document.getElementById("marks").value);
    if (
      question == "" ||
      k1 == "" ||
      k2 == "" ||
      k2 == "" ||
      k3 == "" ||
      k4 == "" ||
      k4 == "" ||
      k5 == "" ||
      k6 == "" ||
      k7 == "" ||
      k8 == "" ||
      k9 == "" ||
      k10 == "" ||
      marks == ""
    ) {
      alert("Empty forms, enter values. Otherwise, retry.");
      return;
    }
    makeAxiosCall();
  };

  const classes = useStyles();
  return (
    <form>
      <TextField id="question" label="Question Statement" variant="filled" />
      <br></br>
      <br></br>
      <TextField id="k1" label="First Keyword" variant="outlined" />
      <TextField id="k2" label="Second Keyword" variant="outlined" />
      <TextField id="k3" label="Third Keyword" variant="outlined" />
      <TextField id="k4" label="Fourth Keyword" variant="outlined" />
      <TextField id="k5" label="Fifth Keyword" variant="outlined" />
      <TextField id="k6" label="Sixth Keyword" variant="outlined" />
      <TextField id="k7" label="Seventh Keyword" variant="outlined" />
      <TextField id="k8" label="Eighth Keyword" variant="outlined" />
      <TextField id="k9" label="Ninth Keyword" variant="outlined" />
      <TextField id="k10" label="Tenth Keyword" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="marks" label="Marks" variant="outlined" />
      <br></br>
      <br></br>
      <div className="col-sm-12">
        <div className="submit-box">
          <input value="Add Question" className="btn" onClick={handleClick} />
        </div>
      </div>
    </form>
  );
};

export default NewLQ;
