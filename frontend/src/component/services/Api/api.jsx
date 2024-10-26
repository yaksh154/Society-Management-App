import axios from "../Axios/axois";

export const UserDataLogin = (data,setLoginError) =>{
    axios.post('/user/login', {
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