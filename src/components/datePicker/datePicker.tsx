import { TextInput, TouchableOpacity, View, Text } from 'react-native'
import styleDate from './datePicker.sytles'
import React, { useEffect, useState } from 'react';
import Color from '../../res/colors/colors'
import DatePicker from 'react-native-date-picker'



const DatePickerBtn = ({ text, title }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [texts, setText] = useState(date.toLocaleDateString());
    

    return (
        <View>
            <TouchableOpacity onPress={() => setOpen(true)} style={styleDate.btn}><Text style={styleDate.btnText}>{texts}</Text></TouchableOpacity>
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                minimumDate={new Date()}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setText(date.toLocaleDateString())
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                title={title}
                theme={'dark'}
            />
        </View>

    );


}

export default DatePickerBtn;