import {AsyncStorage} from "react-native";

export const saveStorage = async (key:string,value:string) => {
    try {
        await AsyncStorage.setItem(key,value);
    } catch (error) {
        console.log(error)
    }
};

export const loadStorage = async (key:string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value
        }
    } catch (error) {
        console.log(error)
    }
};