import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

const HomeNews = ({ navigation }: any) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const recentNewsCount = news.length;
  const canDisplayViewAll = recentNewsCount > MAX_STATIC_NEWS_COUNT;
  const itemsToRender = MAX_STATIC_NEWS_COUNT;

  useEffect(() => {
    getNewsItems().then(newsItems => {
      const sorted = newsItems.Items.sort((a: NewsItem, b: NewsItem) =>
        Date.parse(a.datePosted) > Date.parse(b.datePosted) ? 1 : -1,
      );
      setNews(sorted);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ ...styles.title, flex: 1 }}>NEWS</Text>
        {canDisplayViewAll && (
          <View style={{ alignSelf: 'flex-end', marginRight: '3%', flex: 0 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('News', { news });
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

export default HomeNews;
