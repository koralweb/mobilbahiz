import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import globalStyles from '../data/globalStyles';

const BookingScreen = ({navigation}) => {
  const [thankYou, setThankYou] = useState(false);
  return (
    <Wrapper navigation={navigation}>
      {thankYou ? (
        <>
          <Image
            source={require('../assets/thankYou.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Ваше замовлення успішно розміщено</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Home')}>
            <Text>Головна сторінка</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Бронювання столика</Text>
          <Text style={{...styles.lable, marginTop: 40}}>Ім'я</Text>
          <TextInput placeholder={"Ім'я"} style={styles.input} />
          <Text style={styles.lable}>Телефон</Text>
          <TextInput placeholder={'Телефон'} style={styles.input} />
          <Text style={styles.lable}>Email</Text>
          <TextInput placeholder={'Email'} style={styles.input} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setThankYou(true)}>
            <Text>Замовити</Text>
          </TouchableOpacity>
        </>
      )}
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

export default BookingScreen;
