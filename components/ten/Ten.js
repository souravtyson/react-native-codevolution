import { Button, View, Alert } from "react-native"

const Ten = () => {
    return (
        <View style={{ flex: 1, padding: 10}}>
            <Button title="Alert"
            onPress={() => Alert.alert("First Alert")}
            ></Button>

            <Button title="Alert 2"
            onPress={() => Alert.alert("Second Alert", "DOB Invalid")}
            ></Button>

            <Button title="Alert 3"
            onPress={() => Alert.alert("Second Alert", "DOB Invalid", [
                {
                    text: 'Ok',
                    onPress: () => console.log("ok pressed")
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log("cancel pressed")
                },
                {
                    text: 'Cancel3',
                    onPress: () => console.log("cancel pressed")
                }
            ])}
            ></Button>
        </View>
    )
}

export default Ten