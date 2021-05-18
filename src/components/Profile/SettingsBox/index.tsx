import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface Props {
  type: string;
  icon: string;
  place?: string;
  valueInput?: string;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  text?: string;
  password?: boolean;
}

const SettingsBox: React.FC<Props> = ({
  type,
  icon,
  place,
  valueInput,
  setInput,
  text,
  password,
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
          secureTextEntry={password}
        />
      )}
      {type === 'Text' && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

export default SettingsBox;
