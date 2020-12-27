import React from "react";
import "../App.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const MCQ = () => {
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
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

export default MCQ;
