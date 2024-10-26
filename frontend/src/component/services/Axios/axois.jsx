import axios from "axios";


export default axios.create({
    baseURL : 'http://localhost:8080'
    // Admin(manager)
    // Login ==> "http://localhost:8080/manager/login  "
    // Register ==>"http://localhost:8080/manager/createmanager"

    // Create_Societi ==> "http://localhost:8080/society/createsocieties"
    // getSocietyById ==> "http://localhost:8080/society/societies/:id"



})