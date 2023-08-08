import { View, StyleSheet } from "react-native";
import Box from "./Box";
const Fourteen = () => {
    return (
        <View style={styles.container}>
            <Box style={{backgroundColor: "#8e9b00", flex: 1}}>Box 1</Box>
            <Box style={{backgroundColor: "#b65b00", flex: 6}}>Box 2</Box>
            <Box style={{backgroundColor: "#1c4b00"}}>Box 3</Box>
            <Box style={{backgroundColor: "#ab9b00"}}>Box 4</Box>
            <Box style={{backgroundColor: "#6b0803"}}>Box 5</Box>
            <Box style={{backgroundColor: "#1c9b56"}}>Box 6</Box>
            <Box style={{backgroundColor: "#8e9b21"}}>Box 7</Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column-reverse",
        marginTop: 64,
        borderWidth: 6,
        borderColor: "red"
    }
})

export default Fourteen;