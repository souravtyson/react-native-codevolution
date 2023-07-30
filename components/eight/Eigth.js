import { StatusBar, View } from "react-native";

const Eigth =() => {
    return (
        <View style={{backgroundColor: 'plum', flex: 1}}>
            <StatusBar backgroundColor="lightgreen"
            barStyle={"light-content"}
            hidden={false}
            ></StatusBar>
        </View>
    )
}

export default Eigth;