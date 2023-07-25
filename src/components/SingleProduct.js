import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import config from '../data/config';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import globalStyles from '../data/globalStyles';
import products from '../state/products';
import {observer} from 'mobx-react-lite';

const SingleProduct = ({product, setCurrentProduct}) => {
  const [cnt, setCnt] = useState(product.count);

  const inc = () => setCnt(cnt + 1);
  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => setCurrentProduct(null)}>
        <FontAwesomeIcon icon={'angle-left'} size={25} />
      </TouchableOpacity>
      <Image source={product.img} style={styles.img} />
      <View style={styles.counter}>
        <TouchableOpacity onPress={dec}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{cnt}</Text>
        <TouchableOpacity onPress={inc}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.desc}>{product.desc}</Text>
      {products.list.find(el => el.id === product.id).added ? (
        <View style={{...styles.btn, backgroundColor: 'lightseagreen'}}>
          <Text>Додано</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => products.addProduct(product.id, cnt)}>
          <Text>Додати в кошик</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    width: config.width,
    height: config.height,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  back: {
    marginTop: 45,
    marginLeft: 20,
    marginBottom: 30,
  },
  img: {
    width: 450 / 1.5,
    height: 338 / 1.5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
  },
  counter: {
    backgroundColor: '#fd7e3b',
    flexDirection: 'row',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  desc: {
    paddingHorizontal: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default observer(SingleProduct);
