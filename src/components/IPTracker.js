import { useRef } from "react";
import Arrow from "../assets/icon-arrow.svg";
import classes from "./IPTracker.module.css";


const IPTracker = ({inputValue, handleInputValue, handleSearch, data}) => {
  const inputRef = useRef();
  

  return (
    <div className={classes.box}>
      <h1 className={classes.title}>IP Address Tracker</h1>

      <div className={`${classes.searchBox} ${data && classes.data}`}>
        <input
          className={classes.input}
          ref={inputRef}
          type="text"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={() => handleInputValue(inputRef.current.value)}
        />
        <button className={classes.btn} onClick={handleSearch}>
          <img src={Arrow} alt="Submit search" />
        </button>
      </div>

      <div className={classes.resultsBoxOuter}>
        <div className={classes.resultsBoxInner}>
          <div className={classes.resultBox}>
            <p className={classes.resultTitle}>IP Address</p>
            <p className={classes.result}>{data ? data.address : ""}</p>
          </div>
          <div className={classes.resultBox}>
            <p className={classes.resultTitle}>Location</p>
            <p className={classes.result}>{data ? data.location : ""}</p>
          </div>
          <div className={classes.resultBox}>
            <p className={classes.resultTitle}>Timezone</p>
            <p className={classes.result}>{data ? data.timezone : ""}</p>
          </div>
          <div className={classes.resultBox}>
            <p className={classes.resultTitle}>ISP</p>
            <p className={classes.result}>{data? data.isp : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPTracker;
