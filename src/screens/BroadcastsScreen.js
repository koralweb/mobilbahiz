import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import globalStyles from '../data/globalStyles';
import broadcastsList from '../data/broadcastsList';
import config from '../data/config';

const BroadcastsScreen = ({navigation}) => {
  console.log(777);
  const renderBroadcasts = () => {
    return broadcastsList
      .filter(el => el.date >= new Date().getDate())
      .map(game => (
        <View key={Math.random()} style={styles.item}>
          <View style={styles.ligaBlock}>
            <Text style={styles.ligaText}>{game.liga}</Text>
          </View>
          <View style={{flexGrow: 1}}>
            <Text>{game.team1}</Text>
            <Text>{game.team2}</Text>
            <View style={styles.dateTime}>
              <Text style={{fontWeight: '700'}}>
                {game.date}.07 - {game.time}
              </Text>
            </View>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <Text style={{...styles.title, marginBottom: 10}}>
        Спортивні трансляції
      </Text>
      <ScrollView>{renderBroadcasts()}</ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  item: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  ligaBlock: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  ligaText: {
    textAlign: 'center',
    fontWeight: '700',
    color: config.colors.orange,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
});

export default BroadcastsScreen;
