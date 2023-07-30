import { Button, View } from "react-native";

const Fifth = () => {
    return <View style={{padding: 60, flex: 1}}>
        <Button 
        title="Press" 
        onPress={() => console.log('Press')}
        color="lightgreen"
        disabled={false}
        ></Button>
    </View>
}

export default Fifth;