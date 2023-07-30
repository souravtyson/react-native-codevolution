import { ActivityIndicator, View } from "react-native";

const Nine = () => {
    return <>
    <ActivityIndicator></ActivityIndicator>
    <ActivityIndicator size="large"></ActivityIndicator>
    <ActivityIndicator size="large" color="black"></ActivityIndicator>
    <ActivityIndicator size="large" color="black" animating={true}></ActivityIndicator>
    </>
}

export default Nine;