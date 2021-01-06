import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

const NewFIB = ({ classID }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [marks, setMarks] = useState("");
  console.log("CID in FIB: ", classID);
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const makeAxiosCall = async () => {
    console.log(
      "Variables set. Placeholder function for axios call. Just send variables from inside this function."
    );
    console.log("question: ", question)
    console.log("answer: ", answer)
    console.log("marks: ", marks)
    try {
      const res = await axios
        .post("http://localhost:8000/add-question", {
          token: localStorage.token,
          cid: classID,
          type: "fib",
          question: { "question":question, 
          "answer":answer,
          "marks": marks 
        }
        });
        console.log(res);
        setQuestion('');
        setAnswer('');
        setMarks('');
    }
    catch (e) {
      console.log(e);
    }

  };

  const handleClick = () => {
    setQuestion(document.getElementById("question").value);
    setAnswer(document.getElementById("correct").value);
    setMarks(document.getElementById("marks").value);
    if (question == "" || answer == "" || marks == "") {
      alert("Empty forms, enter values. Otherwise, retry.");
      return;
    }
    makeAxiosCall();
  };
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="question" label="Question Statement" variant="filled" />
      <br></br>
      <br></br>
      <TextField id="correct" label="Correct Answer" variant="outlined" />
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

export default NewFIB;
