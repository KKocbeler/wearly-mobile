import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage  = async (storageName: string, value: string[] = []) => {
    try {
        await AsyncStorage.setItem(storageName, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}

export const getStorage  = async (name: string) => {
    try {
        const data = await AsyncStorage.getItem(name);
        return data != null ? JSON.parse(data) : null
    } catch (error) {
        console.log(error)
    }
};