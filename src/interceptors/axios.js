import axios from "axios";

axios.defaults.baseURL = "https://advancedtechacademy.herokuapp.com/";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`