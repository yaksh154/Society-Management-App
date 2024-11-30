import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'

// Home page 
// Pending Maintenances

export const Get_Pending_Maintenances = (setPendingData) => {
  axios.get('http://localhost:3030/PendingMaintenances').then((res) => {
    setPendingData(res.data)
  })
}

// Service_And_Complaint page
// Complaint_Submissionpage
// Complaint data Get

export const GetComplaint = (setdata) => {
  axios.get('http://localhost:3030/Complaint_Submission').then((res) => {
    setdata(res.data);
  })
}

// Complaint data Post
export const PostComplaint = (data, Fdata, close) => {
  axios.post('http://localhost:3030/Complaint_Submission', data).then((res) => {
    Fdata()
    close()
  })
}

// Complaint data Delete
export const DeleteComplaint = (setdata, closeDelete, DId) => {
  axios.delete(`http://localhost:3030/Complaint_Submission/${DId}`).then((res) => {
    console.log("Deleted:", res.data);
    setdata((prevData) => prevData.filter((item) => item.id !== DId));
    closeDelete();
  })
    .catch((err) => {
      console.error("Error deleting:", err);
    });
}

// Request_Submission page

// Request_Submission data Get

export const GetRequest_Submission = (setdata) => {
  axios.get('http://localhost:3030/Request_Submission').then((res) => {
    setdata(res.data);
  })
}

// Complaint data Post
export const PostRequest_Submission = (data, Fdata, close) => {
  axios.post('http://localhost:3030/Request_Submission', data).then((res) => {
    Fdata()
    close()
  })
}

// Complaint data Delete
export const DeleteRequest_Submission = (setdata, closeDelete, DId) => {
  axios.delete(`http://localhost:3030/Request_Submission/${DId}`).then((res) => {
    console.log("Deleted:", res.data);
    setdata((prevData) => prevData.filter((item) => item.id !== DId));
    closeDelete();
  })
    .catch((err) => {
      console.error("Error deleting:", err);
    });
}

// payment portal page
// Maintenance_Invoices page
// Pending Maintanance Get
export const Get_Pending_Maintanance = (setMaintanance) =>{
  axios.get('http://localhost:3030/Pending_Maintanance').then((res) => {
    setMaintanance(res.data);
});
}

// Pending Maintanance User Data Get

export const Get_Maintenance_Invoices_data = () =>{
  axios.get('http://localhost:3030/Maintenance_Invoices_data').then((res) => {
    setgetInvoices(res.data);
});
}


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


export const PostOwnpoll = (data, Fdata, closeCreatePoll) => {
  console.log(data);

  axios.post(`http://localhost:3030/OwnPoll`, data).then((res) => {
    closeCreatePoll(false)
    Fdata()
  })
}





export const GetNewPoll = async () => {
  const res = await axios.get('http://localhost:3030/OwnPoll');
  return res.data;
};

export const GetPreviousPoll = async () => {
  const res = await axios.get('http://localhost:3030/OwnPoll');
  return res.data;
};


