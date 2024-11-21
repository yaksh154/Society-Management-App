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
                // localStorage.removeItem('Email');
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
    console.log(_id);
    axios.delete(`http://localhost:3030/incomeData/${_id}`).then((res) => {
        Fdata()
        ClaseDeleteAnnouncement(false)
    })
}


// Financial Maintenance page

//  Maintenance

export const GetMaintenance = (setudata) => {
    axios.get('http://localhost:3030/Maintenance').then((res) => {
        // console.log(res.data);
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

export const PostOtherIncome= (data, Fdata, setCreateIncome) => {
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
export const DeleteOtherIncome= (data, Fdata, setCreateIncome) => {
    axios.delete(`http://localhost:3030/OtherIncome/:id`, data).then((res) => {
        Fdata()
        setCreateIncome(false)
    })
}


///Expanse 

export const GetExpanse = (setAddExpense) => {
    axios.get('http://localhost:3030/Expenses').then((res) => {
        // console.log(res.data);
        setAddExpense(res.data)
    })
}


export const PostExpanse= (data, Fdata, setAddExpense) => {
    axios.post(`http://localhost:3030/Expenses`, data).then((res) => {
        Fdata()
        setAddExpense(false)
    })
}

export const PutExpense = (setIncomeData) => {
    axios.get('http://localhost:3030/Expenses/:id').then((res) => {
        setIncomeData(res.data)
    })
}

export const DeleteExpense= (data, Fdata, setCreateIncome) => {
    axios.post(`http://localhost:3030/Expenses/:id`, data).then((res) => {
        Fdata()
        setCreateIncome(false)
    })
}

///Visiter Data

export const GetVisiter = (setAddExpense) => {
    axios.get('http://localhost:3030/Visitors').then((res) => {
        // console.log(res.data);
        setAddExpense(res.data)
    })
}