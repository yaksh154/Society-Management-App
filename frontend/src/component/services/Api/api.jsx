import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'

// login data

export const UserDataLogin = (data, setLoginError) => {
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

                // user login
            } else {
                setLoginError('Incorrect email/phone or password');
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            setLoginError('Login failed. Please try again later.');
        });
}

// regegistration data

export const UserDataRegistration = (data, setRegistrationError) => {
    axios.post('/manager/createmanager', {
        Email: data.Email,
        Password: data.Password,
        City: data.City,
        Country: data.Country,
        Email: data.Email,
        Number: data.Number,
        // Password:data.Password,
        State: data.State,
        confirmPassword: data.confirmPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        society: data.society
    })
        .then((res) => {
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

export const ImportantNumbersDelete = (_id, contacts, setContacts) => {
    axios.delete(`${url}/importantnumber/deleteImportantNumber/${_id}`)
        .then((res) => {
            console.log(res);
            const deletData = contacts.filter((e) => e._id !== _id)
            setContacts(deletData)
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