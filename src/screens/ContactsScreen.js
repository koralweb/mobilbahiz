import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import globalStyles from '../data/globalStyles';

const ContactsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <>
        <Text style={styles.title}>Контакти</Text>
        <Text style={{...styles.lable, marginTop: 40}}>Email</Text>
        <View style={styles.input}>
          <Text>help@mobilbahisbar.site</Text>
        </View>
        <Text style={styles.lable}>Телефон</Text>
        <View style={styles.input}>
          <Text>+380 67 350 7888</Text>
        </View>
        <Text style={styles.lable}>Адреса</Text>
        <View style={styles.input}>
          <Text>вулиця Еспланадна, 34/2, Київ, Украина, 02000</Text>
        </View>
      </>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  lable: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 10,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
  },
});

export default ContactsScreen;
