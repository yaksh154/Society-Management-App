import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'


// EventData
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


//Polls 
export const GetOwnPoll = async () => {
  const res = await axios.get('http://localhost:3030/OwnPoll');
  return res.data;
};

export const GetNewPoll = async () => {
  const res = await axios.get('http://localhost:3030/NewPoll');
  return res.data;
};

export const GetPreviousPoll = async () => {
  const res = await axios.get('http://localhost:3030/PreviousPoll');
  return res.data;
};