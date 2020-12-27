import { React, useState } from "react";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

function AddQuestions() {
  const [questions, SetQuestions] = useState([
    { statement: "question 1", type: "short", marks: 2, selected: false },
    { statement: "question 2", type: "mcq", marks: 1, selected: false },
    { statement: "question 3", type: "long", marks: 4, selected: false },
  ]);

  const handleSelected = (index) => {
    SetQuestions(
      questions.map((item, id) => {
        if (index === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };

  const countSelected = () => {
    let count = 0;
    questions.forEach((Element) => {
      if (Element.selected) {
        count += 1;
      }
    });

    return count;
  };

  const countMarks = () => {
    let count = 0;
    questions.forEach((Element) => {
      if (Element.selected) {
        count += Element.marks;
      }
    });

    return count;
  };

  return (
    <div className="wapper">
      <Loader />
      <NavBar />
      <div>
        <section class="cart-page">
          <div class="container">
            <div class="table-view">
              <div class="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Statement</th>
                      <th>Type</th>
                      <th>Marks</th>
                      <th>Selected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {questions.map((data, id) => {
                        return (
                          <tr key={id}>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.statement}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.type}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <div class="name">{data.marks}</div>
                              </div>
                            </td>
                            <td>
                              <div class="product-details">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSelected(id);
                                  }}
                                >
                                  {data.selected ? "unselect" : "select"}
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  </tbody>
                </table>
              </div>
              <div class="cart-total">
                <table>
                  <tbody>
                    <tr>
                      <td>Total Questions:</td>
                      <td>{countSelected()}</td>
                    </tr>
                    <tr>
                      <td>Total Marks:</td>
                      <td>{countMarks()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="cart-row">
              <div class="check-outBtn">
                <a href="check-out.html" class="btn">
                  Add Selected Question
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddQuestions;
