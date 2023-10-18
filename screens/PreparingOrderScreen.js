import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import React from 'react'

const PreparingOrderScreen = () => {
    return (
        <SafeAreaView className="flex-1 justify-center bg-[#00CCBB] items-center">
            <Animatable.Image
                source={require('../assets/favicon.png')}
                animation="slideInUp"
                iterationCount={1}
                className="h-50 w-50"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>
            <Progress.Bar progress={0.3} width={200} color='white'/>
        </SafeAreaView>

    )
}

export default PreparingOrderScreen