import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";

const NewFIB = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const testFunc = (e) => {
    console.log("e: ", e.target.value);
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
          <input value="Add Question" className="btn" onClick={testFunc} />
        </div>
      </div>
    </form>
  );
};

export default NewFIB;
