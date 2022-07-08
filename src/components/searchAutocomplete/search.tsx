import { SafeAreaView, TextInput } from 'react-native'
import stylesSearch from './search.style'
import React, { useEffect } from 'react'
import Color from '../../res/colors/colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import AuthContext from '../../state/contexts/context'
import { initialDirections, loginReducer } from '../../state/reducers/auth'


const SearchInput = ({ text, pressed }) => {
    return (
        <SafeAreaView style={stylesSearch.searchContainer}>
            <GooglePlacesAutocomplete
                placeholder={text}
                textInputProps={stylesSearch.text}
                minLength={2}
                fetchDetails={true}
                onPress={pressed}
                query={{
                    key: 'AIzaSyAl0HmQXXjnCCC6-royC4T_2H2aNLEOMjg',
                    language: 'en',
                }}
                onFail={error => console.error(error)}
                listUnderlayColor={Color.white}
                styles={stylesSearch.inputSearch}
            />
        </SafeAreaView>

    );


}

export default SearchInput;