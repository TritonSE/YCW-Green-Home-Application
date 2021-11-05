import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import HomeNewsItem from '../HomeNewsItem';
import styles from './styles';

/* eslint-disable react/no-array-index-key */

interface NewsItem {
  datePosted: string;
  link: string;
  article: string;
  excerpt: string;
  title: string;
  author: string;
}

interface HomeNewsViewAllProps {
  news: NewsItem[];
}

const HomeNewsViewAll = ({ news }: HomeNewsViewAllProps) => {
  return (
    <View>
      <Text style={styles.title}>NEWS</Text>
      <ScrollView style={{ marginLeft: '3%' }}>
        {news.map((recentNews: NewsItem) => {
          const { title, link, excerpt } = recentNews;
          return (
            <HomeNewsItem
              key={link}
              newsTitle={title}
              newsText={excerpt}
              link={link}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeNewsViewAll;
