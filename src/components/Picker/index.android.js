import React from 'react'
import {Picker as RNPickerSelect} from '@react-native-community/picker'
import {PickerView} from './styles'
import firebase from '../../contexts/auth'

export default function Picker({onChange, tipo}){
    return(
        <PickerView>
            <RNPickerSelect
            style={{
             width: '100%'
            }}
            selectedValue={tipo}
            onValueChange={(valor) => onChange(valor)}>
                <RNPickerSelect label="Receita" value="receita"/>
                <RNPickerSelect label="Despesa" value="despesa"/>
            </RNPickerSelect>
        </PickerView>
    )
}