import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'

// login data

export const UserDataLogin = (data, setLoginError,navigate) => {
    console.log(data, setLoginError);

    axios.post(`${url}/manager/login`, {
        Email: data.Email,
        Password: data.Password,
    })
        .then((res, req) => {
            if (res.data) {
                console.log(res.data);
                localStorage.setItem('message', JSON.stringify(res.data.message));
                localStorage.setItem('token', JSON.stringify(res.data.token));
                console.log('Cookies:', document.cookie);
                navigate('/');
                
            } else {
                setLoginError('Incorrect email/phone or password');
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            setLoginError('Login failed. Please try again later.');
        });
}

// Forgot_password page

export const UserForgot_password = (data, setLoginError) => {
    axios.post(`${url}/manager/forgotpassword`, {
        Email: data.Email,
    })
        .then((res) => {
            if (res.data) {
                console.log('user Login');
            } else {
                setLoginError('Incorrect email/phone');
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            setLoginError('Login failed. Please try again later.');
        });
}

// regegistration page

// Create User Registration

export const UserDataRegistration = (registrationData, setRegistrationError) => {
    console.log(registrationData);

    axios.post(`${url}/manager/createmanager`, registrationData).then((res) => {
        if (res.data) {
            console.log(res.data);
        } else {
            setRegistrationError('Incorrect email/phone or password');
        }
    })
        .catch((error) => {
            console.error('Registration error:', error);
            setRegistrationError('Registration failed. Please try again later.');
        });
}

// Get Socirty

export const GetCreateSocirty = (setSocieties) => {
    axios.get(`${url}/society/societies`).then((res) => {
        setSocieties(res.data.data)
    })
}

// Post Socirty

export const UserCreateSociety = (newSociety, CloseCreatenewSociety) => {
    axios.post(`${url}/society/createsocieties`, {
        societyname: newSociety.societyname,
        societyaddress: newSociety.societyaddress,
        Country: newSociety.Country,
        State: newSociety.State,
        City: newSociety.City,
        Zipcode: newSociety.Zipcode
    })
        .then((res) => {
            if (res.data) {
                console.log(res.data);
                CloseCreatenewSociety()
            } else {
                console.log("Incorrect create society");

            }
        })
        .catch((error) => {
            console.error('Registration error:', error);
        });
}

// ImportantNumbers page Home

// ImportantNumbers get

export const ImportantNumbersGet = (setContacts, setLoading) => {

    setLoading(true);

    axios.get(`${url}/importantnumber/getAllImportantNumbers`)
        .then((res) => {

            setContacts(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error('Error fetching important numbers:', err);
            setLoading(false);
            setContacts([]);
        });
}

// ImportantNumbers post

export const ImportantNumbersPost = (newNumber, Fdata) => {
    axios.post(`${url}/importantnumber/createImportantNumber`, newNumber)
        .then((res) => {
            console.log(res);
            Fdata()
        })
        .catch((err) => {
            console.error('Error fetching important numbers:', err);
        });
}

// ImportantNumbers delete

export const ImportantNumbersDelete = (_id, contacts, setContacts, ClosedeleteContact) => {
    axios.delete(`${url}/importantnumber/deleteImportantNumber/${_id}`)
        .then((res) => {
            console.log(res);
            const deletData = contacts.filter((e) => e._id !== _id)
            setContacts(deletData)
            ClosedeleteContact()
        })
        .catch((err) => {
            console.error('Error fetching important numbers:', err);
        });
}

// ImportantNumbers edit

export const updateImportantNumber = (_id, editNumber, seteditShowModal, closeEditModal) => {
    axios.put(`${url}/importantnumber/updateImportantNumber/${_id}`, editNumber)
        .then(() => {
            seteditShowModal(false);
            closeEditModal();
        })
        .catch((error) => console.error("Error saving data:", error));
};

// Complaint Tracking page

// === Create Complaint get

export const GetComplainy = (setgetComplaint) => {
    axios.get('http://localhost:3030/user').then((res) => {
        setgetComplaint(res.data);
    })
}

// === Create Complaint create

export const CreateComplaint = async (data, setClosecreateComplint, getComplaintdata) => {
    try {
        const response = await axios.post("http://localhost:3030/user", data);
        console.log(response.data);
        getComplaintdata()
        setClosecreateComplint(false);
    } catch (error) {
        console.error("Error submitting complaint:", error);
    }
}

// === Create Complaint delete

export const DeleteComplaint = async (_id, getComplaint) => {
    axios.delete(`http://localhost:3030/user/${_id}`).then((res) => {
        console.log(res);
        getComplaint()
    })
}

// Security Management page

// Get Security Protocols

export const Get_Security_Protocols = (setSecurity) =>{
    axios.get("http://localhost:3030/Security_Protocols").then((res)=>{
        setSecurity(res.data)
    })
}

// Delete Security Protocols

export const Delete_Security_Protocols = (_id,Fdata) =>{
    axios.delete(`http://localhost:3030/Security_Protocols/${_id}`).then((res)=>{
        Fdata()
    })
}

// Security Guard page

// Get Security Guard Details

export const GetGuard_Details = (setGuard_Details) =>{
    axios.get('http://localhost:3030/Guard_Details').then((res)=>{
        setGuard_Details(res.data)
    })
}

// Announcement page

// Get Announcement


export const GetAnnouncement = (setgetAnnouncement) => {
    axios.get('http://localhost:3030/incomeData').then((res) => {
        setgetAnnouncement(res.data)
    })
}

// Post Announcement

export const PostAnnouncement = (data, Fdata, ClaseAddAnnouncement) => {
    axios.post(`http://localhost:3030/incomeData`, data).then((res) => {
        ClaseAddAnnouncement(false)
        Fdata()
    })
}

// Delete Announcement

export const DeleteAnnouncement = (_id, Fdata, ClaseDeleteAnnouncement) => {
    console.log(_id);
    axios.delete(`http://localhost:3030/incomeData/${_id}`).then((res) => {
        Fdata()
        ClaseDeleteAnnouncement(false)
    })
}


// Financial -Maintenance page

// Get Maintenance

export const GetMaintenance = (setudata) => {
    axios.get('http://localhost:3030/Maintenance').then((res) => {
        // console.log(res.data);
        setudata(res.data)
    })
}

// Post Maintenance

export const PostMaintenance = (data, Fdata, ClaseAddMaintenance) => {
    axios.post(`http://localhost:3030/Maintenance`, data).then((res) => {
        ClaseAddMaintenance(false)
        Fdata()
    })
}
