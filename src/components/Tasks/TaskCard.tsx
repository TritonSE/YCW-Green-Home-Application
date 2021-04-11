import React from 'react';
import { View, Image, ImageSourcePropType, StyleSheet } from 'react-native';

type TaskCardProps = {
  level: string;
  icon: ImageSourcePropType;
  title: string;
  question: string;
  environmentalBenefits: Array<string>;
  cost: string;
};

const styles = StyleSheet.create({
  cardHeader: {
    display: 'flex',
  },
});

const TaskCard = ({
  level,
  icon,
  title,
  question,
  environmentalBenefits,
  cost,
}: TaskCardProps) => {
  return (
    <View style={styles.cardHeader}>
      <View>
        {title} <Image source={icon} />
      </View>
      <View>{question}</View>
    </View>
  );
};
