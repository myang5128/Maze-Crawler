import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';                                                                                                                                                                                                                                                                                     

const CharacterNameSelection = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View>
      <TextInput className="font-mainfont text-fwhite text-4xl justify-center items-center"
        editable
        maxLength={20}
        onChangeText={text => onChangeText(text)}
        placeholder="Enter Your Name"
        placeholderTextColor="#2a2d3c" 
        value={text}
      />
    </View>
  )
}

export default CharacterNameSelection
