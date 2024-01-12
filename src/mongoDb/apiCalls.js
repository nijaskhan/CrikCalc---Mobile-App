import axios from '../axios/axiosConfig';

export const saveMatchServerDb = async (payload) => {
    try{
        // console.log("mongoDB payload:  ",payload);
        const response = await axios.post('/api/crick/saveMatch', payload);
        // console.log("response from MongoDB: ", response);
        return;
    }catch(e){
        console.log("error: ", e);
        console.log("error message: ", e.message);
        return;
    }
}

export const updateMatchServerDb = async (payload) => {
    try{
        // console.log("mongoDB2 payload:  ",payload);
        const response = await axios.post('/api/crick/updateMatch', payload);
        // console.log("response from MongoDB2: ", response);
        return;
    }catch(e){
        console.log("error: ", e);
        console.log("error message: ", e.message);
        return;
    }
}

export const getAllmatches = async ()=>{
    try{
        const response = await axios.get('/api/crick/getAllMatches');
        // console.log(response.data.data);
        return response.data.data;
    }catch(e){
        console.log("error: ", e);
        console.log("errorMessage: ", e.message);
        return [];
    }
}