import { StyleSheet, Text, View } from "react-native";

const Twelve = () => {
    return (<>
        <View style={[styles.containerCommon, styles.bgColorBlue]}>
            <Text>This is light blue color</Text>
        </View>
        <View style={[styles.containerCommon, styles.bgColorGreen]}>
            <Text style={styles.textFont}>This is light green color</Text>
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
        paddingVertical: 20,
        marginVertical:10,
        borderWidth: 2,
        borderColor: "purple",
        borderStyle: "solid",
        borderRadius: 20
    },
    bgColorBlue: {
        backgroundColor: 'lightblue'
    },
    bgColorGreen: {
        backgroundColor: 'lightgreen'
    },
    textFont:{
        fontSize: 10
    }
})

export default Twelve;