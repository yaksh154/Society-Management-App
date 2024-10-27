import axios from "axios";

const url = 'https://society-management-app-server.onrender.com'

export const UserDataLogin = (data, setLoginError) => {
    console.log(data, setLoginError);

    axios.post(`${url}/manager/login`, {
        Email: data.Email,
        Password: data.Password,
    })
        .then((res) => {
            if (res.data) {
                console.log(res.data);
            } else {
                setLoginError('Incorrect email/phone or password');
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            setLoginError('Login failed. Please try again later.');
        });
}

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
export const ImportantNumbersPost = (setContacts, setLoading) => {

    setLoading(true);

    axios.get(`${url}/importantnumber/createImportantNumber`)
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