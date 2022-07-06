import { TextInput } from 'react-native'
import stylesSearch from './search.style'
import React from 'react'
import Color from '../../res/colors/colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const SearchInput = ({ text }) => {

    return (
        <GooglePlacesAutocomplete
            placeholder={text}
            query={{
                key: 'AIzaSyAE26kNbmt7Z_1IkIg6DiHRGr-xODpaQvY',
                language: 'en',
            }}
            onFail={error => console.error(error)}
        />
    );


}

export default SearchInput;