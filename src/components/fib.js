import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const FIB = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <section class="quiz-view">
        <div class="container">
          <div class="quiz-title">
            <h2>General Quiz</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="row">
            <div class="qustion-main">
              <div class="qustion-box">
                <div class="qustion">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </div>
                <div>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Answer" />
                  </form>
                </div>
                <div class="save-btn">
                  <a class="btn2">Save</a>
                </div>
                <div class="submit-quiz">
                  <a href="/quizresult" class="btn">
                    Submit Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FIB;
