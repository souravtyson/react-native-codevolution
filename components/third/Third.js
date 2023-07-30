import { View, Image, ImageBackground } from 'react-native';
const logoImage = require('../../assets/adaptive-icon.png')

const Third = () => {
    return <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ImageBackground style={{ flex: 1 }} source={{ uri: "https://picsum.photos/3020" }}>
            <Image source={logoImage} style={{ width: 200, height: 200 }}></Image>
            <Image source={{ uri: "https://picsum.photos/400" }} style={{ width: 200, height: 200 }}></Image>
        </ImageBackground>
    </View>
}

export default Third;