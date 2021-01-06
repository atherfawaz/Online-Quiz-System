import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../App.css";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import TextField from "@material-ui/core/TextField";

import NewMCQ from "../components/newMCQ";
import NewFIB from "../components/newFIB";
import NewSQ from "../components/newSH";
import NewCmatch from "../components/newCmatch";
import NewLQ from "../components/newLQ";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
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
    "aria-controls": `simple-tabpanel-${index}`,
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
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const [cid, setCid] = React.useState('');

  useEffect(() => {
    setCid(location.state.cid);
  }, [localStorage]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const testFunc = (e) => {
    console.log("e: ", e.target.value);
  };

  console.log("cid in add questions to pool page: " , cid);
  return (
    <div className={classes.root}>
      <Loader />
      <NavBar />
      <section className="banner inner-page">
        <div className="banner-img">
          <img src="images/banner/contact-us.jpg" alt="" />
        </div>
        <div className="page-title">
          <div className="container">
            <h1>Create Quiz</h1>
          </div>
        </div>
      </section>
      <section className="breadcrumb">
        <div className="container">
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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="MCQ" {...a11yProps(0)} />
          <Tab label="Fill in the Blank" {...a11yProps(1)} />
          <Tab label="Short Question" {...a11yProps(2)} />
          <Tab label="Long Question" {...a11yProps(3)} />
          <Tab label="Column Matching" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <NewMCQ classID={cid}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewFIB  classID={cid}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewSQ classID={cid}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NewLQ  classID={cid}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NewCmatch classID={cid} />
      </TabPanel>
    </div>
  );
}
