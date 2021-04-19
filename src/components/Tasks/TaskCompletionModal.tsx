import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { toProperCase } from '../../utils';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
  level: string;
  category: string;
  cost: string;
  question: string;
}

const CostTextToSymbol: { [key: string]: string } = {
  'ONE': '$',
  'TWO': '$$',
  'THREE': '$$$',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    height: 375,
    borderColor: '#ddd',
    borderWidth: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingLeft: 36,
  },
  statsContainer: {
    marginTop: 50,
  },
  statsText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  questionContainer: {
    marginTop: 20,
    marginRight: 31,
  },
  questionText: {
    fontSize: 16,
  },
  dropdownContainer: {
    marginTop: 30,
    zIndex: 10,
    elevation: 10,
  },
  dropdown: {
    width: 100,
    height: 43,
    backgroundColor: 'white',
  },
  dropdownList: {
    backgroundColor: 'white',
    alignItems: 'flex-start'
  },
  buttonContainer: {
    zIndex: 1,
    elevation: 1,
  },
  button: {
    backgroundColor: 'rgba(233, 102, 97, 1)',
    marginTop: 30,
    width: 300,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }

});

const TaskCompletionModal: React.FC<Props> = ({ level, category, cost, question }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>Level: {toProperCase(level)}</Text>
          <Text style={styles.statsText}>Category: {toProperCase(category)}</Text>
          <Text style={styles.statsText}>Cost: {CostTextToSymbol[cost]}</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            items={[
              { label: 'No', value: 'no', selected: true },
              { label: 'Yes', value: 'yes' },
            ]}
            containerStyle={styles.dropdown}
            dropDownStyle={styles.dropdownList}
            showArrow={true}
            onChangeItem={item => console.log(item.label, item.value)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => ''}>
            <Text style={styles.buttonText}>Task Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



export default TaskCompletionModal;
