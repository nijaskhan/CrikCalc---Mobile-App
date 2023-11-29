import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (matchObj) => {
    try {
        await AsyncStorage.setItem(matchObj.matchId, JSON.stringify(matchObj));
    } catch (e) {
        console.log('error message', e.message);
        console.log(e);
    }
};

export const mergeData = async (matchId, teamObj) => {
    try{
        await AsyncStorage.mergeItem(matchId, JSON.stringify(teamObj));
    }catch (e) {
        console.log('error message', e.message);
        console.log(e);
    }
};

export const retrieveData = async (matchId) => {
    try{
        let data = await AsyncStorage.getItem(matchId);
        data = JSON.parse(data);

        if(data!==null){
            return data;
        }else{
            return null;
        }
    }catch(e){
        console.log('error message', e.message);
        console.log(e);
    }
}

export const resetData = async (matchId) => {
    try{
        if(matchId){
            const response = await AsyncStorage.removeItem(matchId);
            console.log('response after the deletion: ', response);
            return;
        }else{
            console.log('no match id', matchId);
            return;
        }
    }catch (e) {
        console.log('error message', e.message);
        console.log(e);
    }
}