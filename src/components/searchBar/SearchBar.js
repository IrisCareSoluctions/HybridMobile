import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import ButtonDefault from '../buttons/ButtonDefault'
import InputDefault from '../Input/InputDefault'

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <InputDefault />

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <InputDefault
                    placeholder="Busque o CEP"
                    value={zipCode}
                    onChangeText={setZipCode}
                    keyboardType="number-pad"
                    format={'XXXXX-XXX'}
                />
                <ButtonDefault onPress={buscarCEP} variant="litler" />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
})