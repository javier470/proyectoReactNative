import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ButtonForm from '../../../components/buttonForm/buttonForm'
import InputForm from '../../../components/inputForm/inputForm'
import AuthContext from '../../../state/contexts/context'
import styles from './confirmCode.style'

const ConfirmCode = ({ navigation }: any) => {
    const [code, setCode] = useState(0);

    const [{}, {confirmCode}] = React.useContext(AuthContext)
    const validation = (code: number) => {
        confirmCode(code)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <View>
                    <Text style={styles.title}>Validation</Text>
                </View>

            </View>
            <View style={styles.body}>

                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Enter code sent to your number</Text>
                    <Text style={styles.info}>On your number: +502 12345678</Text>
                </View>
                <View style={styles.form}>
                    <InputForm text={'0000'} type={'phone-pad'} secure={false} changed={setCode} length={4}/>
                    <ButtonForm text={'Confirm'} pressed={() => { validation(code) }}/>
                </View>
            </View>
        </View>
    )
}

export default ConfirmCode