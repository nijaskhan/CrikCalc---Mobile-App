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
    try {
        await AsyncStorage.mergeItem(matchId, JSON.stringify(teamObj));
    } catch (e) {
        console.log('error message', e.message);
        console.log(e);
    }
};

export const retrieveData = async (matchId) => {
    try {
        let data = await AsyncStorage.getItem(matchId);
        data = JSON.parse(data);

        if (data !== null) {
            return data;
        } else {
            return null;
        }
    } catch (e) {
        console.log('error message', e.message);
        console.log(e);
    }
}

export const resetData = async (matchId) => {
    try {
        if (matchId) {
            await AsyncStorage.removeItem(matchId);
            return;
        } else {
            return;
        }
    } catch (e) {
        console.log('error message', e.message);
        console.log(e);
    }
}

export const getAllDatas = async () => {
    try{
        const allKeys = await AsyncStorage.getAllKeys();
        // console.log('all keys', allKeys);
        let allData = await AsyncStorage.multiGet(allKeys);
        // console.log('all datas');
        const parsedData = allData.map(([id, jsonString]) => [id, JSON.parse(jsonString)]);
        // console.log(parsedData);
        return parsedData;
    }catch(e){
        console.log('error message', e.message);
        console.log(e);
    }
}