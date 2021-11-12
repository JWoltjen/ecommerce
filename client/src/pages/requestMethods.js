import axios from 'axios'; 


const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGJmYjU4NTlhYTQ1ODRkYzgzYWUzMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzY1NjQyMTksImV4cCI6MTYzNjgyMzQxOX0.dwr949xVaoqfGeP3TIsubshNPF54_-aMIL2JE_QIwRs"; 

export const publicRequest = axios.create({
    baseURL: BASE_URL, 
})



export const userRequest = axios.create({
    baseURL: BASE_URL, 
    header: {token:`Bearer ${TOKEN}`}
})