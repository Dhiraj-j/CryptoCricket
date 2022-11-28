import axios from "axios";
import { BASEURL } from "./BaseUrl";


// Fetching Contest for the Home page 

export async function getCompleted(){
    return await axios({
        method:'get',
        url:`${BASEURL}contests?status=completed`
    });
}

export async function getLive(){
    const res = await axios({
        method:'get',
        url:`${BASEURL}contests?status=live`
    });
    return res; 
}


export async function getUpcoming(){
    const res = await axios({
        method:'get',
        url:`${BASEURL}contests?status=upcoming`
    });
    return res; 
}



// Fetching Contest for the Users prediction Page


