import { StyleSheet, Text, View } from "react-native";

const Twelve = () => {
    return (<>
        <View style={[styles.containerCommon, styles.bgColorBlue]}>
            <Text>This is light blue color</Text>
        </View>
        <View style={[styles.containerCommon, styles.bgColorGreen]}>
            <Text>This is light green color</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    containerCommon: {
        width: 100,
        height: 100,
        // padding: 10,
        paddingHorizontal: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 20
    },
    bgColorBlue: {
        backgroundColor: 'lightblue'
    },
    bgColorGreen: {
        backgroundColor: 'lightgreen'
    }
})

export default Twelve;