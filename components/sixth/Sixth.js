import { Pressable, Text, View } from "react-native";

const Sixth = () => {
    return <View style={{ flex: 1, padding: 50 }}>
        <Pressable 
        onPress={() => console.log("Text pressed")} 
        onPressIn={() => console.log("Press in")} 
        onPressOut={() => console.log("Press out ")} 
        onLongPress={() => console.log("long Press")}>
            <Text>Press Me</Text>
        </Pressable>
    </View>
}

export default Sixth;