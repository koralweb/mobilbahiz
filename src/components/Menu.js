import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import config from '../data/config';

const Menu = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle={'light-content'}
      />
      <View style={styles.circle}>
        <Image
          source={require('../assets/mainLogo.png')}
          style={styles.mainLogo}
        />
      </View>
      <View style={styles.positionBlock}>
        <TouchableOpacity
          onPress={() => navigation.push('Shop')}
          style={styles.menuItem}>
          <Text style={styles.menuItemText}>Магазин</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('Booking')}
          style={styles.menuItem}>
          <Text style={styles.menuItemText}>Бронювання</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('Broadcasts')}
          style={styles.menuItem}>
          <Text style={styles.menuItemText}>Трансляції</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('Contacts')}
          style={styles.menuItem}>
          <Text style={styles.menuItemText}>Контакти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push('Cart')}
          style={styles.menuItem}>
          <Text style={styles.menuItemText}>Кошик</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: config.width,
    height: config.height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  circle: {
    backgroundColor: '#000',
    width: 500,
    height: 500,
    borderRadius: 250,
    position: 'relative',
    left: (-1 * (500 - config.width)) / 2,
    top: -250,
  },
  mainLogo: {
    width: 638 / 3,
    height: 578 / 3,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
  positionBlock: {
    position: 'relative',
    top: -250,
    paddingTop: 30,
  },
  menuItem: {
    backgroundColor: config.colors.lightYellow,
    width: '90%',
    height: 45,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  menuItemText: {
    color: config.colors.orange,
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Menu;
