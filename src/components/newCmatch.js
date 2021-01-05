import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import TextField from "@material-ui/core/TextField";

const NewCmatch = () => {
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
      <TextField id="s1" label="Match the Columns" variant="filled" />
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
          <input value="Add Question" className="btn" onClick={testFunc} />
        </div>
      </div>
    </form>
  );
};

export default NewCmatch;
