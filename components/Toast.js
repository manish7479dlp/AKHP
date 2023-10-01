import { ToastAndroid } from "react-native";

export default (content, x = 0, y = 0) => ToastAndroid.showWithGravityAndOffset(`${content}`, ToastAndroid.SHORT, ToastAndroid.TOP, x, y);
