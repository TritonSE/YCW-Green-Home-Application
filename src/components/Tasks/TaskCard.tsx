import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SvgContainer from "../SvgContainer";

type TaskCardProps = {
  level: string;
  title: string;
  question: string;
  environmentalBenefits: Array<string>;
  cost: string;
  completed: boolean;
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    width: 160,
    height: 160,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingLeft: 10,
  },
  cardHeader: {
    paddingVertical: 10,
    flexDirection: 'row'
  },
  title: {
    alignItems: "flex-start",
  },
  titleText: {
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: 16,
    maxWidth: 75,
    color: "#353935",
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 30,
    alignItems: 'flex-end'
  },
  cost: {
    justifyContent: "flex-start",
  },
  question: {
    marginTop: 10,
  },
  questionText: {
    width: 125,
    fontSize: 12,
  }
});

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  cost,
  question,
}: TaskCardProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.icon}>
          <SvgContainer badgeTitle={title} height="40" width="40"/>
        </View>
      </View>
      <View style={styles.cost}>
        <Text>{cost}</Text>
      </View>
      <View style={styles.question}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
    </View>
  </TouchableOpacity>
    
  );
};

export default TaskCard;
