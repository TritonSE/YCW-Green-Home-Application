import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#939393',
    paddingTop: 20,
    paddingBottom: 20,
    margin: -0.5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    color: '#939393',
    fontSize: 18,
    height: 40,
  },
  icon: {
    paddingBottom: 24,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    flex: 1,
    paddingBottom: 20,
    color: '#939393',
    fontSize: 18,
  },
});

interface Props {
  type: string;
  icon: string;
  place?: string;
  valueInput?: string;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  text?: string;
}

const SettingsBox: React.FC<Props> = ({
  type,
  icon,
  place,
  valueInput,
  setInput,
  text,
}) => {
  return (
    <View style={styles.inputBox}>
      <Ionicons style={styles.icon} name={icon} size={24} color="#939393" />
      {type === 'Input' && (
        <TextInput
          style={styles.input}
          placeholder={place}
          value={valueInput}
          onChangeText={setInput}
        />
      )}
      {type === 'Text' && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

export default SettingsBox;
