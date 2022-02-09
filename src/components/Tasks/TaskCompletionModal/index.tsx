import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomSheet } from 'react-native-elements';
import { API } from '@aws-amplify/api';
import SvgContainer from '../../SvgContainer';
import { toProperCase, CostTextToSymbol } from '../../../utils';
import { TaskContext } from '../../../contexts/TaskContext';
import styles from './styles';
import { createResponse, createUserResponse } from '../../../graphql/mutations';
import { UserContext } from '../../../contexts/UserContext';
import { CreateResponseMutation } from '../../../API';
import { ResponseContext } from '../../../contexts/ResponseContext';
import { ResponseType } from '../../../models/index';
import { UserResponseContext } from '../../../contexts/UserResponseContext';

const TaskCompletionModal: React.FC = () => {
  const {
    selectedTask,
    setIsTaskCompletionRendered,
    isTaskCompletionRendered,
  } = useContext(TaskContext);
  const { userState, currentHome } = useContext(UserContext);
  const { responseState, setResponseState } = useContext(ResponseContext);
  const [isCompleted, setIsCompleted] = useState(false);
  const { level, categories, cost, questionText } = selectedTask;

  const completeCurrentTask = async () => {
    // TODO: implement user vs. home specific responses
    const questionIsHome = selectedTask.type === ResponseType.HOME;

    if (questionIsHome) {
      const homeResponse = {
        homeID: userState.homes.items[currentHome].home.id,
        questionID: selectedTask.id,
        answer: 'Y',
      };

      const result: any = await API.graphql({
        query: createResponse,
        variables: { input: homeResponse },
      });
      const { id, createdAt } = result.data.createResponse;
      if (!result.error) {
        setResponseState({
          items: [
            ...responseState.items,
            {
              id,
              createdAt,
              ...homeResponse,
            },
          ],
        });
      }
    } else {
      // TODO: implement createUserResponse correctly
      // this is a placeholder
      const userResponse = {
        userId: userState.id,
        questionID: selectedTask.id,
        answer: 'Y',
      };

      const result: any = await API.graphql({
        query: createUserResponse,
        variables: { input: userResponse },
      });
      const { userId, createdAt } = result.data.createUserResponse;
      // TODO: set user response state
      // if (!result.error) {
      //   setUserResponseState({
      //     items: [
      //     ],
      //   });
      // }
    }

    setIsTaskCompletionRendered(false);
  };

  return (
    <BottomSheet
      modalProps={{ animationType: 'fade' }}
      isVisible={isTaskCompletionRendered}
      containerStyle={{ zIndex: 10 }}
    >
      <View style={styles.iconContainer}>
        <View style={styles.badgeIcon}>
          <SvgContainer
            badgeTitle={selectedTask.title}
            height="70"
            width="70"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.closeIcon}>
            <TouchableOpacity
              onPress={() => setIsTaskCompletionRendered(false)}
            >
              <Ionicons name="close-outline" size={32} />
            </TouchableOpacity>
          </View>

          <View style={styles.bodyContainer}>
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>Level: {toProperCase(level)}</Text>
              <Text style={styles.statsText}>
                Categories:{' '}
                {categories.map(category => toProperCase(category)).join(', ')}
              </Text>
              <Text style={styles.statsText}>
                Cost: {CostTextToSymbol[cost]}
              </Text>
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>{questionText}</Text>
            </View>
            <View style={styles.dropdownContainer}>
              <DropDownPicker
                items={[
                  { label: 'No', value: 'no', selected: true },
                  { label: 'Yes', value: 'yes' },
                ]}
                containerStyle={styles.dropdown}
                itemStyle={styles.itemList}
                showArrow
                onChangeItem={item => setIsCompleted(item.value === 'yes')}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              ...styles.button,
              ...(isCompleted ? styles.buttonEnabled : styles.buttonDisabled),
            }}
            disabled={!isCompleted}
            onPress={completeCurrentTask}
          >
            <Text style={styles.buttonText}>Task Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default TaskCompletionModal;
