import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';                                                                                                                                                                                                                                                                                     

const CharacterNameSelection = ({ selectedValue, setSelectedValue }) => {
  const [text, setText] = useState('Dorian');

  // Update the placeholder based on whether text is empty or not
  const placeholder = "Dorian";

  return (
    <View>
      <TextInput className="font-mainfont text-fwhite text-4xl justify-center items-center"
        editable
        maxLength={12}
        onChangeText={text => {
          setText(text);
          if (text) {
            setSelectedValue(text);
          }
          else{
            setSelectedValue(placeholder);
          }
        }}
        placeholder={placeholder}
        placeholderTextColor="#2a2d3c"
      />
    </View>
  )
}

export default CharacterNameSelection;
