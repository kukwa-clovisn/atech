import axios from "axios";

axios.defaults.baseURL = "https://advancedtechacademy.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:9002";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "accessToken"
)}`;

axios.defaults.headers.common["accessId"] = `${localStorage.getItem(
  "accessId"
)}`;

axios.defaults.headers.common["adminid"] = `${localStorage.getItem("adminId")}`;
axios.defaults.headers.common["coursename"] = `${localStorage.getItem(
  "courseId"
)}`;
