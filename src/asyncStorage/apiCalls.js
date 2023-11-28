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

        // let retrievedData = await AsyncStorage.getItem(matchId);
        // retrievedData = JSON.parse(retrievedData);
        // console.log(retrievedData, 'retrieved data');
    }catch (e) {
        console.log('error message', e.message);
        console.log(e);
    }
};