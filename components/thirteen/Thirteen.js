import { View, Text, StyleSheet } from "react-native";

// shadow property doesn't work in android so you have to use elevation property

const Thirteen = () => {
    return (
        <>
            <View style={[styles.divContainer, styles.androidElevationShadow]}>
                <Text style={styles.textDiv}>Hello Shadow & Elevation</Text>
            </View>
            <View style={[styles.divContainer, styles.iosShadow]}>
                <Text style={styles.textDiv}>Hello Shadow & Elevation</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    divContainer: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: "black",
        padding: 20,
        backgroundColor: "lightblue",
        marginVertical: 10
    },
    androidElevationShadow: {
        elevation: 20,
        shadowColor: "blue"
    },
    textDiv: {
        color: "black"
    },
    iosShadow: {
        shadowColor: "#333333",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 4
    }
})

export default Thirteen;