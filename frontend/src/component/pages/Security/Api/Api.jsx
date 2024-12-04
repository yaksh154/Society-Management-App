import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'



///Visiter Data

export const GetVisiter = (setVisitorLogs) => {
    axios.get(`${url}/Visitor/getallVisitors`).then((res) => {
        setVisitorLogs(res.data)
    })
}

export const PostVisiter = (data, Fdata, setAddVisiterbox) => {
    axios.post('http://localhost:3030/Visitors', data).then((res) => {
        Fdata()
        setAddVisiterbox(res.data)
    })
}


//Emergency Alert
// export const GetAlert = (setAlertType) => {
//     axios.get(`${url}/alert/createAlert`).then((res) => {
//         setAlertType(res.data)
//         setlodingData(false)
//     })
// }

export const PostAlert = async (data, callback) => {
    try {
      const response = await axios.post(`${url}/alert/createAlert`, data);
      console.log('Response:', response.data); // Log the response
      if (callback) callback(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Server Response:', error.response.data); // Server's error response
      } else {
        console.error('Error:', error.message); // Other errors
      }
    }
  };