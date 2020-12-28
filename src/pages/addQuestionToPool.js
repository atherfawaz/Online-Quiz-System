import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
    const { children, value, index, ...other } = props;


    // const addMCQ = async () => {
    //     axios
    //       .post("http://localhost:8000/add-question", {
    //         token: localStorage.token,
    //         cid: localStorage.cid,
    //         type: "mcqs",
    //         question: {"question": , "choices":[], "correct": , "marks":  }
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //         SetCourses(response.data.courses);
    //         return;
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

    // const addShort = async () => {
    //     axios
    //       .post("http://localhost:8000/add-question", {
    //         token: localStorage.token,
    //         cid: localStorage.cid,
    //         type: "short",
    //         question: {"question": , "keywords":[], "marks":  }
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //         SetCourses(response.data.courses);
    //         return;
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

    // const addLong = async () => {
    //     axios
    //       .post("http://localhost:8000/add-question", {
    //         token: localStorage.token,
    //         cid: localStorage.cid,
    //         type: "long",
    //         question: {"question": , "keywords":[], "marks":  }
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //         SetCourses(response.data.courses);
    //         return;
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

    // const addFib = async () => {
    //     axios
    //       .post("http://localhost:8000/add-question", {
    //         token: localStorage.token,
    //         cid: localStorage.cid,
    //         type: "fib",
    //         question: {"question": , "answer":, "marks":  }
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //         SetCourses(response.data.courses);
    //         return;
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

    // const addCmatch = async () => {
    //     axios
    //       .post("http://localhost:8000/add-question", {
    //         token: localStorage.token,
    //         cid: localStorage.cid,
    //         type: "cmatch",
    //         question: {"statements": [] , "answers": [],"correct": [], "marks":  }
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //         SetCourses(response.data.courses);
    //         return;
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    const classes = useStyles();

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <Loader />
            <NavBar />
            <section class="banner inner-page">
                <div class="banner-img">
                    <img src="images/banner/contact-us.jpg" alt="" />
                </div>
                <div class="page-title">
                    <div class="container">
                        <h1>Create Quiz</h1>
                    </div>
                </div>
            </section>
            <section class="breadcrumb">
                <div class="container">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Add Question to Pool</a>
                        </li>
                    </ul>
                </div>
            </section>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="MCQ" {...a11yProps(0)} />
                    <Tab label="Fill in the Blank" {...a11yProps(1)} />
                    <Tab label="Short Question" {...a11yProps(2)} />
                    <Tab label="Long Question" {...a11yProps(3)} />
                    <Tab label="Column Matching" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
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
                    <div class="col-sm-12">
                        <div class="submit-box">
                            <input type="submit" value="Add Question" class="btn" />
                        </div>
                    </div>

                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="question" label="Question Statement" variant="filled" />
                    <br></br>
                    <br></br>
                    <TextField id="correct" label="Correct Answer" variant="outlined" />
                    <TextField id="marks" label="Marks" variant="outlined" />
                    <br></br>
                    <br></br>
                    <div class="col-sm-12">
                        <div class="submit-box">
                            <input type="submit" value="Add Question" class="btn" />
                        </div>
                    </div>

                </form>
            </TabPanel>
            <TabPanel value={value} index={2}>
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
                    <div class="col-sm-12">
                        <div class="submit-box">
                            <input type="submit" value="Add Question" class="btn" />
                        </div>
                    </div>
                </form>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <form>
                    <TextField id="question" label="Question Statement" variant="filled" />
                    <br></br>
                    <br></br>
                    <TextField id="k1" label="First Keyword" variant="outlined" />
                    <TextField id="k2" label="Second Keyword" variant="outlined" />
                    <TextField id="k3" label="Third Keyword" variant="outlined" />
                    <TextField id="k4" label="Fourth Keyword" variant="outlined" />
                    <TextField id="k5" label="Fifth Keyword" variant="outlined" />
                    <TextField id="k6" label="Sixth Keyword" variant="outlined" />
                    <TextField id="k7" label="Seventh Keyword" variant="outlined" />
                    <TextField id="k8" label="Eighth Keyword" variant="outlined" />
                    <TextField id="k9" label="Ninth Keyword" variant="outlined" />
                    <TextField id="k10" label="Tenth Keyword" variant="outlined" />
                    <br></br>
                    <br></br>
                    <TextField id="marks" label="Marks" variant="outlined" />
                    <br></br>
                    <br></br>
                    <div class="col-sm-12">
                        <div class="submit-box">
                            <input type="submit" value="Add Question" class="btn" />
                        </div>
                    </div>
                </form>
            </TabPanel>
            <TabPanel value={value} index={4}>
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
                    <div class="col-sm-12">
                        <div class="submit-box">
                            <input type="submit" value="Add Question" class="btn" />
                        </div>
                    </div>
                </form>
            </TabPanel>
        </div>
    );
}