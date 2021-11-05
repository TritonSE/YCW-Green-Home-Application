import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import HomeNewsItem from '../HomeNewsItem';
import styles from './styles';

/* eslint-disable react/no-array-index-key */

const MAX_STATIC_NEWS_COUNT = 2;

export interface NewsItem {
  datePosted: string;
  link: string;
  article: string;
  excerpt: string;
  title: string;
  author: string;
}

const getNewsItems = async () => {
  try {
    const res = await fetch(
      'https://3vmaot03ul.execute-api.us-west-1.amazonaws.com/articles',
    );
    if (res.status === 200) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (err) {
    console.error(`Error getting news items: ${err}`);
    return null;
  }
};

interface HomeNewsProps {
  navigation?: any;
}

const HomeNews = ({ navigation }: HomeNewsProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [viewAll, setViewAll] = useState(false);
  const recentNewsCount = news.length;

  useEffect(() => {
    getNewsItems().then(newsItems => {
      const sorted = newsItems.Items.sort((a: NewsItem, b: NewsItem) =>
        Date.parse(a.datePosted) > Date.parse(b.datePosted) ? 1 : -1,
      );
      setNews(sorted);
    });
  }, []);

  // displays the recent news and the view all button
  const StaticRecentNews = () => {
    const canDisplayViewAll = recentNewsCount > MAX_STATIC_NEWS_COUNT;
    const itemsToRender = canDisplayViewAll
      ? MAX_STATIC_NEWS_COUNT
      : recentNewsCount;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ ...styles.title, flex: 1 }}>NEWS</Text>
          {canDisplayViewAll && (
            <View style={{ alignSelf: 'flex-end', marginRight: '3%', flex: 0 }}>
              <TouchableOpacity
                onPress={() => {
                  // setViewAll(true);
                  navigation.navigate('News View All', { news });
                }}
              >
                <Text style={styles.buttonText}>View All +</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {news.slice(0, itemsToRender).map(recentNews => {
          const { title, excerpt, link } = recentNews;
          return (
            <HomeNewsItem
              key={link}
              newsTitle={title}
              newsText={excerpt}
              link={link}
            />
          );
        })}
      </View>
    );
  };

  // displays all the recent news in a scroll view
  const ScrollableRecentNews = () => {
    return (
      <View>
        <Text style={styles.title}>NEWS</Text>
        <ScrollView style={{ marginLeft: '3%' }}>
          {news.map(recentNews => {
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

  // displays the correct component based on if the view all button has been pressed
  return viewAll ? <ScrollableRecentNews /> : <StaticRecentNews />;
};

export default HomeNews;
