import React, {useState} from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import {useRoute} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import config from '../data/config';

const Wrapper = ({navigation, children}) => {
  const [menu, setMenu] = useState(useRoute().name === 'Home');
  const screenName = useState(useRoute().name)[0];

  const renderMenuBtn = () => {
    if (screenName === 'Home') {
      return <></>;
    }
    return (
      <TouchableOpacity
        style={{
          ...styles.menuBtn,
          backgroundColor: menu ? config.colors.yellow : '#fff',
        }}
        onPress={() => setMenu(!menu)}>
        <FontAwesomeIcon
          icon={menu ? 'close' : 'bars'}
          color={menu ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={
        screenName === 'Booking' || screenName === 'Contacts'
          ? require('../assets/bg.png')
          : null
      }
      style={styles.cont}>
      {renderMenuBtn()}
      {menu && <Menu navigation={navigation} />}
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  menuBtn: {
    zIndex: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
});

export default Wrapper;
