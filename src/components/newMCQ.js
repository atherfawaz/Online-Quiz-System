import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";

const NewMCQ = () => {
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
          <input value="Add Question" className="btn" onClick={testFunc} />
        </div>
      </div>
    </form>
  );
};

export default NewMCQ;
