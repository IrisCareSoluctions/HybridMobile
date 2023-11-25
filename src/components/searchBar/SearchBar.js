import React from 'react'
import { StyleSheet, View } from 'react-native'
import InputDefault from '../Input/InputDefault'
import ButtonDefault from '../Buttons/ButtonDefault'

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