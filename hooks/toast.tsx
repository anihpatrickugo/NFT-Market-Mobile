import Toast from "react-native-root-toast";

export type Props ={
    message: string,
    type: 'warning' | 'error' | 'success'
}

export const showToast = ({message, type}: Props) => {

    let backgroundColor: string;
    if (type === 'warning') {
        backgroundColor = 'orange';
    } else if (type === 'error') {
        backgroundColor = 'red';
    } else {
        backgroundColor = 'green';
    }

    const t = Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        backgroundColor,
      })
}
