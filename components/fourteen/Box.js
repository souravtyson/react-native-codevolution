import {View, Text, StyleSheet} from 'react-native'

const Box = (props) => {
    const {children, style} = props 
    return (
        <View style={[styles.boxDiv, style]}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    boxDiv: {
        padding: 20,
        backgroundColor: "#fff"
    },
    boxText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
})

export default Box;