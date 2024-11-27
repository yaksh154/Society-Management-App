import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'

export const GetEventData = (setEventData) => {
  axios.get('http://localhost:3030/EventData').then((res) => {
      // console.log(res.data);
      setEventData(res.data)
  })
}

export const GetActivityData = (setActivityData) => {
  axios.get('http://localhost:3030/ActivityData').then((res) => {
      // console.log(res.data);
      setActivityData(res.data)
  })
}