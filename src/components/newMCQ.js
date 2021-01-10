import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

const NewMCQ = ({classID}) => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [marks, setMarks] = useState("");

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
    const choices = [option1, option2, option3, option4];
    try{
      const res = await axios
      .post("/add-question", {
        token: localStorage.token,
        cid: classID,
        type: "mcqs",
        question: { "question":question, 
        "choices": choices,
        "correct": answer,
        "marks": toString(Number(answer) - 1) 
      }
      });
      console.log(res);
    }
    catch(error)
    {
      console.log(error.request);
    }
  };

  const handleClick = () => {
    setQuestion(document.getElementById("question").value);
    setOption1(document.getElementById("o1").value);
    setOption2(document.getElementById("o2").value);
    setOption3(document.getElementById("o3").value);
    setOption4(document.getElementById("o4").value);
    setAnswer(document.getElementById("correct").value);
    setMarks(document.getElementById("marks").value);
    if (
      question == "" ||
      option1 == "" ||
      option2 == "" ||
      option3 == "" ||
      option4 == "" ||
      answer == "" ||
      marks == ""
    ) {
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
      <TextField id="o1" label="Option 1" />
      <br></br>
      <br></br>
      <TextField id="o2" label="Option 2" />
      <br></br>
      <br></br>
      <TextField id="o3" label="Option 3" />
      <br></br>
      <br></br>
      <TextField id="o4" label="Option 4" />
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

export default NewMCQ;
