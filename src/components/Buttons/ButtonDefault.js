import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../../Shared/Colors';

export default function ButtonDefault({ onPress, title }) {

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{
                height: 50,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "rgba(137, 255, 219, 0.51)",
                borderColor: "rgba(137, 255, 219, 0.51)",
                borderWidth: 2,
                padding: 5,
                margin: 20,
                alignSelf: 'center',
                borderRadius: 10,
                fontSize: 18,
                
                
                
            }}
        >
            <Text
                style={{
                    color: Colors.whiteSolid,
                    fontSize: 18,
                    textTransform: "uppercase",
                    fontWeight: 'bold',
                }}
            >{title}</Text>
        </TouchableOpacity>
    );

}