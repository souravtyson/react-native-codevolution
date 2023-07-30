import { useState } from 'react';
import {Modal, Pressable, Text, View, Button} from 'react-native'

const Seventh = () => {

    const [isModalLive, setModalLive] = useState(false);

    return <View style={{backgroundColor: 'plum', flex: 1, padding:50}}>
        <View style={{backgroundColor: 'lightgreen', flex: 1, padding: 15}}>
            <Button title="Open Modal" onPress={() => setModalLive(true)}></Button>
        </View>
        <Modal 
        visible={isModalLive} 
        onRequestClose={() => setModalLive(false)} 
        animationType="slide"
        presentationStyle='pageSheet'
        >
            <View style={{backgroundColor: 'lightblue'}}>
                <Pressable onPress={() => setModalLive(false)}>
                    <Text>
                        Close me
                    </Text>
                </Pressable>
            </View>
        </Modal>
    </View>
}

export default Seventh;