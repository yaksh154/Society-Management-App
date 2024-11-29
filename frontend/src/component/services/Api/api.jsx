import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'

// login Manger

export const ManagerLogin = (data, setLoginError, navigate, storetokenInLs, setLoading, reset) => {
    axios.post(`${url}/manager/login`, {
        Email: data.Email,
        Password: data.Password,
    })
        .then((res) => {
            if (res.data) {
                setLoading(false);
                storetokenInLs(res.data.token)
                navigate('/');
                reset()
            } else {
                setLoading(false);
                setLoginError('Incorrect email/phone or password');
            }
        })
        .catch((error) => {
            setLoading(false);
            console.error('Login error:', error);
            setLoginError('Login failed. Please try again later.');
        })
}

// Forgot password Manger

export const ManagerForgot_password = (data, setLoginError, navigate, setLoading) => {
    axios.post(`${url}/manager/sedotp`, { Email: data.Email, }).then((res) => {
        if (res.data) {
            console.log(res.data);
            setLoading(false);
            localStorage.setItem('Email', JSON.stringify(res.data.data));
            navigate('/forgot_password/opt');
        } else {
            setLoading(false);
            setLoginError('Incorrect email/phone');
        }
    }).catch((error) => {
        setLoading(false);
        console.error('Login error:', error);
        setLoginError('Login failed. Please try again later.');
    })
};

// resend otp

export const ResendOtp = (datas) => {
    axios.post(`${url}/manager/sedotp`, { Email: datas.Email, }).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.error('Login error:', error);
    })
}


// Verifyotp Manger

export const Managerverifyotp = (datas, setLoginError, setLoading, navigate, reset) => {
    axios.post(`${url}/manager/verifyotp`, { otp: datas.otp, Email: datas.Email })
        .then((res) => {
            if (res.data) {
                setLoading(false);
                navigate('/reset_password')
            } else {
                setLoading(false);
                setLoginError('Incorrect OTP');
            }
        })
        .catch((error) => {
            setLoading(false);
            console.error('Login error:', error);
            setLoginError('Verify failed. Please try again later.');
            reset({ otp: new Array(4).fill("") });
        })
}

// Reset password Manger

export const ManagerResetPassword = (data, setLoginError, setLoading, reset, navigate) => {
    axios.post(`${url}/manager/forgotpassword`, { newpass: data.Password, Email: data.Email })
        .then((res) => {
            if (res.data) {
                setLoading(false);
                reset()
                console.log("Password Reset Successful");
                localStorage.removeItem('Email');
                navigate('/login')
            } else {
                setLoading(false);
                reset()
                setLoginError('Reset password failed. Please try again.');
            }
        })
        .catch(() => {
            setLoading(false);
            reset()
            setLoginError('Reset password failed. Please try again later.');
        });
}

// regegistration page

// Create User Registration

export const UserDataRegistration = (registrationData, setRegistrationError, reset) => {

    axios.post(`${url}/manager/createmanager`, registrationData).then((res) => {
        if (res.data) {
            console.log(res.data);
            reset()
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

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ImportantNumbers page Home

// ImportantNumbers get

export const ImportantNumbersGet = (setContacts, setLoading) => {
    setLoading(true);
    // const token = localStorage.getItem('token')
    // console.log(token);
    axios.get(`${url}/importantnumber/getAllImportantNumbers`
        //  {
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }
        // }
    )
        .then((res) => {
            console.log(res.headers)
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

export const ImportantNumbersPost = (newNumber, Fdata, setLoading) => {
    const token = localStorage.getItem('token')
    axios.post(`${url}/importantnumber/createImportantNumber`, newNumber, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            setLoading(false)
            Fdata()

        })
        .catch((err) => {
            setLoading(false)
            console.error('Error fetching important numbers:', err);
        });
}

// ImportantNumbers delete

export const ImportantNumbersDelete = (_id, contacts, setContacts, ClosedeleteContact, setLoading) => {
    axios.delete(`${url}/importantnumber/deleteImportantNumber/${_id}`)
        .then((res) => {
            console.log(res);
            const deletData = contacts.filter((e) => e._id !== _id)
            setContacts(deletData)
            ClosedeleteContact()
            setLoading(false)
        })
        .catch((err) => {
            console.error('Error fetching important numbers:', err);
            setLoading(false)
        });
}

// ImportantNumbers edit

export const updateImportantNumber = (_id, editNumber, Fdata, closeEditModal, setLoading) => {
    axios.put(`${url}/importantnumber/updateImportantNumber/${_id}`, editNumber)
        .then(() => {
            closeEditModal();
            Fdata()
            setLoading(false)
        })
        .catch((error) => {
            console.error("Error saving data:", error)
            setLoading(false)
        });
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

export const Get_Security_Protocols = (setSecurity) => {
    axios.get("http://localhost:3030/Security_Protocols").then((res) => {
        setSecurity(res.data)
    })
}

// Post Security Protocols

export const Post_Security_Protocols = (data, Fdata, CloseAddProtocols) => {
    axios.post("http://localhost:3030/Security_Protocols", data).then((res) => {
        CloseAddProtocols()
        Fdata()
    })
}

// Delete Security Protocols

export const Delete_Security_Protocols = (_id, Fdata) => {
    axios.delete(`http://localhost:3030/Security_Protocols/${_id}`).then((res) => {
        Fdata()
    })
}

// Security Guard page

// Get Security Guard Details

export const GetGuard_Details = (setGuard_Details) => {
    axios.get('http://localhost:3030/Guard_Details').then((res) => {
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
    axios.delete(`http://localhost:3030/incomeData/${_id}`).then((res) => {
        Fdata()
        ClaseDeleteAnnouncement(false)
    })
}

// Facility Management page

// Facility Management Get

export const Facility_Management_Get = (setincomeData) => {
    axios.get(`${url}/facility/getAllFacilities`).then((res) => {
        setincomeData(res.data)
    })
}

// Facility Management Post

export const Facility_Management_Post = (data, Fdata, setClosecreate_facility, setloading) => {
    setloading(true)
    axios.post(`${url}/facility/createFacility`, data).then((res) => {
        console.log(res.data);
        Fdata()
        setClosecreate_facility(false)
        setloading(false)
    })
}

// Facility Management Delete

export const Facility_Management_Delete = (DeleteData, DeleteClose, setloading, incomeData, setincomeData) => {
    setloading(true)
    axios.delete(`${url}/facility/deleteFacility/${DeleteData}`).then((res) => {
        DeleteClose()
        const deletData = incomeData.filter((e) => e._id !== DeleteData)
        setincomeData(deletData)
        setloading(false)
    })
}

// Facility Management Edit

export const Facility_Management_Edit = (_id, data, setloading, seteditcreate_facility, lodData) => {
    setloading(true)
    axios.put(`${url}/facility/updateFacility/${_id}`, data).then((res) => {
        console.log(res.data);
        lodData()
        seteditcreate_facility(false)
        setloading(false)
    })
}

// Financial Maintenance page

//  Maintenance

export const GetMaintenance = (setudata) => {
    axios.get('http://localhost:3030/Maintenance').then((res) => {
        setudata(res.data)
    })
}

//   Income page 
export const PostIncome = (data, Fdata, setShowAddDetail) => {
    axios.post(`http://localhost:3030/Income`, data).then((res) => {
        Fdata()
        setShowAddDetail(false)
    })
}

//Other Income
export const GetOtherIncome = (setIncomeData) => {
    axios.get('http://localhost:3030/OtherIncome').then((res) => {
        // console.log(res.data);
        setIncomeData(res.data)
    })
}

export const PostOtherIncome = (data, Fdata, setCreateIncome) => {
    axios.post(`http://localhost:3030/OtherIncome`, data).then((res) => {
        Fdata()
        setCreateIncome(false)
    })
}
export const UpdateOtherIncome = async (id, data) => {
    try {
        const response = await axios.put(`http://localhost:3030/OtherIncome/${id}`, data);
        return response.data; // Backend should return `{ success: true, data: updatedItem }`
    } catch (error) {
        console.error('Error in UpdateOtherIncome API:', error);
        throw error;
    }
};
export const DeleteOtherIncome = (data, Fdata, setCreateIncome) => {
    axios.delete(`http://localhost:3030/OtherIncome/:id`, data).then((res) => {
        Fdata()
        setCreateIncome(false)
    })
}

///Expanse 

export const GetExpanse = (setAddExpense) => {
    axios.get(`${url}/expenses/getAllexpensess`).then((res) => {
        // console.log(res.data);
        setAddExpense(res.data)
    })
}


export const PostExpanse = async (data, Fdata, setAddExpense, setPreviewImage, reset, handleCancel, setLoading) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('date', new Date(data.date).toISOString());
    formData.append('amount', data.amount);
    if (data.Bill && data.Bill.length > 0) {
        formData.append('Bill', data.Bill[0]);
    }
    try {
        await axios.post('https://society-management-app-server.onrender.com/expenses/createexpenses', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        Fdata();
        setAddExpense(false);
        reset();
        setPreviewImage(null);
        handleCancel()
        setLoading(false)
    } catch (error) {
        console.error('Error submitting expense:', error);
        setLoading(false)
    }
}

export const PutExpense = async (data, Fdata, setAddExpense, setPreviewImage, reset, handleCancel) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('date', new Date(data.date).toISOString());
    formData.append('amount', data.amount);
    if (data.Bill && data.Bill.length > 0) {
        formData.append('Bill', data.Bill[0]);
    }
    try {
        await axios.post('https://society-management-app-server.onrender.com/expenses/createexpenses', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        Fdata();
        setAddExpense(false);
        reset();
        setPreviewImage(null);
        handleCancel()
        setLoading(false)
    } catch (error) {
        console.error('Error submitting expense:', error);
        setLoading(false)
    }
}

export const DeleteExpense = (RemoveId, Fdata, RemoveView, setLoading) => {
    axios.delete(`${url}/expenses/deleteexpenses/${RemoveId}`).then((res) => {
        Fdata()
        RemoveView()
        setLoading(false)
    })
}

///Visiter Data

export const GetVisiter = (setVisitorLogs) => {
    axios.get('http://localhost:3030/Visitors').then((res) => {
        // console.log(res.data);

        setVisitorLogs(res.data)
    })
}

export const PostVisiter = (data, Fdata, setAddVisiterbox) => {
    axios.post('http://localhost:3030/Visitors', data).then((res) => {
        Fdata()
        setAddVisiterbox(res.data)
    })
}

//Notes

export const GetNotes = (setNotes) => {
    axios.get(`${url}/note/getAllNotes`).then((res) => {
        setNotes(res.data)
    })
}

export const PostNotes = (data, Fdata, setcreate, setloading) => {
    setloading(true)
    axios.post(`${url}/note/createNote`, data).then((res) => {
        setloading(false)
        Fdata()
        setcreate(false)
    })
}

export const DeleteNotes = (DeleteId, setloading, DeleteClose, Fdata) => {
    setloading(true)
    axios.delete(`${url}/note/deleteNote/${DeleteId}`).then((res) => {
        setloading(false)
        Fdata()
        DeleteClose()
    })
}

export const EditNotes = async (_id,formData,setloading,seteditcreate) => {
    console.log("Submitted Data:", formData);
    setloading(true)
    try {
        const response = await axios.put(`https://society-management-app-server.onrender.com/note/updateNote/${_id}`, formData);
        console.log(response.data);
        
        seteditcreate(false);
        setloading(false)
    } catch (error) {
        console.error("Error updating note:", error);
        alert("Failed to update note");
        setloading(false)
    }
}