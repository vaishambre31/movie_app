import { Alert } from 'react-native';
export const Set_error = (message) => {
    return Alert.alert(
        'Error!',
        message,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
    );
}