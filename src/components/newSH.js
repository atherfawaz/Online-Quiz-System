import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";

const NewSH = () => {
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
          <input value="Add Question" className="btn" onClick={testFunc} />
        </div>
      </div>
    </form>
  );
};

export default NewSH;
