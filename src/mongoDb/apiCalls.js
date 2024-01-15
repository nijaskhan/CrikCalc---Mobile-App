import Toast from 'react-native-toast-message';
import axios from '../axios/axiosConfig';

export const saveMatchServerDb = async (payload) => {
    try {
        // console.log("mongoDB payload:  ",payload);
        const response = await axios.post('/api/crick/saveMatch', payload);
        // console.log("response from MongoDB: ", response);
        return;
    } catch (e) {
        Toast.show({
            type: 'error',
            text1: 'You are Offline!',
            text2: 'Internet connection needed !',
            visibilityTime: 2000
        });
        console.log("error: ", e);
        console.log("error message: ", e.message);
        return;
    }
}

export const updateMatchServerDb = async (payload) => {
    try {
        // console.log("mongoDB2 payload:  ",payload);
        const response = await axios.put('/api/crick/updateMatch', payload);
        // console.log("response from MongoDB2: ", response);
        return;
    } catch (e) {
        Toast.show({
            type: 'error',
            text1: 'You are Offline!',
            text2: 'Internet connection needed !',
            visibilityTime: 2000
        });
        console.log("error: ", e);
        console.log("error message: ", e.message);
        return;
    }
}

export const getAllmatches = async () => {
    try {
        const response = await axios.get('/api/crick/getAllMatches');
        // console.log(response.data.data);
        return response.data.data;
    } catch (e) {
        Toast.show({
            type: 'error',
            text1: 'You are Offline!',
            text2: 'Internet connection needed !',
            visibilityTime: 2000
        });
        console.log("error: ", e);
        console.log("errorMessage: ", e.message);
        return [];
    }
}

export const getMatchById = async (payload) => {
    try {
        const response = await axios.post(
            '/api/crick/getMatchById', 
            { matchId: payload }
        );
        // console.log(response.data.data[0]);
        return response.data.data[0];
    } catch (e) {
        Toast.show({
            type: 'error',
            text1: 'You are Offline!',
            text2: 'Internet connection needed !',
            visibilityTime: 2000
        });
        console.log("error: ", e);
        console.log("errorMessage: ", e.message);
        return null;
    }
}