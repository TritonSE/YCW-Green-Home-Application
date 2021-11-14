import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppContext } from '../../../contexts/AppContext';

const AddHomeCard = () => {
  const { setAppState } = useContext(AppContext);

  const onboardingPage = () => {
    setAppState('Onboarding Edit');
  };

  return (
    <TouchableOpacity style={styles.addCard} onPress={onboardingPage}>
      <Text style={styles.addLabel}>+ ADD</Text>
    </TouchableOpacity>
  );
};

export default AddHomeCard;
