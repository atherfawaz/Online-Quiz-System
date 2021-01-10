import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

const NewSH = ({classID}) => {
  const [k1, setk1] = useState("");
  const [k2, setk2] = useState("");
  const [k3, setk3] = useState("");
  const [question, setQuestion] = useState("");
  const [marks, setMarks] = useState("");

  console.log()

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
    const keywords = [k1, k2, k3];
    console.log("question: ", question);
    console.log("Keywords: ", keywords);
    console.log("marks: ", marks);
    try {
      const res = await axios
        .post("/add-question", {
          token: localStorage.token,
          cid: classID,
          type: "short",
          question: { "question":question, 
          "keywords":keywords,
          "marks": marks 
        }
        });
        console.log(res);
        setQuestion('');
        setMarks('');
    }
    catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    setQuestion(document.getElementById("question").value);
    setk1(document.getElementById("k1").value);
    setk2(document.getElementById("k2").value);
    setk3(document.getElementById("k3").value);
    setMarks(document.getElementById("marks").value);
    if (question == "" || k1 == "" || k2 == "" || k3 == "" || marks == "") {
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

export default NewSH;
