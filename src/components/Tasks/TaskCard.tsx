import React from "react";
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";

type TaskCardProps = {
  level: string;
  icon: ImageSourcePropType;
  title: string;
  question: string;
  environmentalBenefits: Array<string>;
  cost: string;
  completed: boolean;
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    position: "absolute",
    width: 155,
    height: 149,
    left: 21,
    top: 229,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  cardHeader: {
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: 16,
    lineHeight: 12,
    color: "#353935",
    width: 69,
    height: 49,
    left: 30,
    top: 244,
  },
  icon: {
    height: 40,
    width: 40,
  },
  cost: {
    justifyContent: "flex-start",
  },
  question: {
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});

const TaskCard: React.FC<TaskCardProps> = ({
  icon,
  title,
  cost,
  question,
}: TaskCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.title}>{title}</View>
        <View style={styles.icon}>
          <Image source={icon} />
        </View>
      </View>
      <View style={styles.cost}>{cost}</View>
      <View style={styles.question}>{question}</View>
    </View>
  );
};

export default TaskCard;
