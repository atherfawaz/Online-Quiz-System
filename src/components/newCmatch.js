import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

const NewCmatch = ({classID}) => {
  const [question, setQuestion] = useState("");
  const [marks, setMarks] = useState("");
  const [s1, sets1] = useState("");
  const [s2, sets2] = useState("");
  const [s3, sets3] = useState("");
  const [s4, sets4] = useState("");
  const [s5, sets5] = useState("");
  const [s6, sets6] = useState("");
  const [s7, sets7] = useState("");
  const [s8, sets8] = useState("");
  const [s9, sets9] = useState("");
  const [s10, sets10] = useState("");
  const [a1, seta1] = useState("");
  const [a2, seta2] = useState("");
  const [a3, seta3] = useState("");
  const [a4, seta4] = useState("");
  const [a5, seta5] = useState("");
  const [a6, seta6] = useState("");
  const [a7, seta7] = useState("");
  const [a8, seta8] = useState("");
  const [a9, seta9] = useState("");
  const [a10, seta10] = useState("");

  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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
    const statements = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
    const correct = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]
    let answers = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]
    shuffle(answers);
    try{
      const res = await axios
      .post("/add-question", {
        token: localStorage.token,
        cid: classID,
        type: "cmatch",
        question: { "statements":statements, 
        "answers":answers,
        "correct":correct,
        "marks": marks 
      }
      });
      console.log(res);
    }
    catch(error){
      console.log(error.request);
    }
  };

  const handleClick = () => {
    setQuestion(document.getElementById("question").value);
    sets1(document.getElementById("s1").value);
    sets2(document.getElementById("s2").value);
    sets3(document.getElementById("s3").value);
    sets4(document.getElementById("s4").value);
    sets5(document.getElementById("s5").value);
    sets6(document.getElementById("s6").value);
    sets7(document.getElementById("s7").value);
    sets8(document.getElementById("s8").value);
    sets9(document.getElementById("s9").value);
    sets10(document.getElementById("s10").value);
    sets10(document.getElementById("s10").value);

    seta1(document.getElementById("a1").value);
    seta2(document.getElementById("a2").value);
    seta3(document.getElementById("a3").value);
    seta4(document.getElementById("a4").value);
    seta5(document.getElementById("a5").value);
    seta6(document.getElementById("a6").value);
    seta7(document.getElementById("a7").value);
    seta8(document.getElementById("a8").value);
    seta9(document.getElementById("a9").value);
    seta10(document.getElementById("a10").value);

    setMarks(document.getElementById("marks").value);
    if (
      question == "" ||
      a1 == "" ||
      a2 == "" ||
      a3 == "" ||
      a4 == "" ||
      a5 == "" ||
      a6 == "" ||
      a7 == "" ||
      a8 == "" ||
      a9 == "" ||
      a10 == "" ||
      s1 == "" ||
      s2 == "" ||
      s3 == "" ||
      s4 == "" ||
      s5 == "" ||
      s6 == "" ||
      s7 == "" ||
      s8 == "" ||
      s9 == "" ||
      s10 == "" ||
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
      <TextField
        id="question"
        label="Statement (Ex: Match the columns)"
        variant="filled"
      />
      <br></br>
      <br></br>
      <TextField id="s1" label="First Statement" variant="outlined" />
      <TextField id="a1" label="First Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s2" label="Second Statement" variant="outlined" />
      <TextField id="a2" label="Second Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s3" label="Third Statement" variant="outlined" />
      <TextField id="a3" label="Third Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s4" label="Fourth Statement" variant="outlined" />
      <TextField id="a4" label="Fourth Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s5" label="Fifth Statement" variant="outlined" />
      <TextField id="a5" label="Fifth Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s6" label="Sixth Statement" variant="outlined" />
      <TextField id="a6" label="Sixth Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s7" label="Seventh Statement" variant="outlined" />
      <TextField id="a7" label="Seventh Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s8" label="Eighth Statement" variant="outlined" />
      <TextField id="a8" label="Eighth Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s9" label="Ninth Statement" variant="outlined" />
      <TextField id="a9" label="Ninth Answer" variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="s10" label="Tenth Statement" variant="outlined" />
      <TextField id="a10" label="Tenth Answer" variant="outlined" />

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

export default NewCmatch;
