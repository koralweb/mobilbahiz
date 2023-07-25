import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import globalStyles from '../data/globalStyles';
import products from '../state/products';
import config from '../data/config';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';
import Popup from '../components/Popup';

const Counter = ({product}) => {
  const [cnt, setCnt] = useState(product.count);

  const inc = () => setCnt(cnt + 1);
  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={dec} style={styles.counterOperator}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text>{cnt}</Text>
      <TouchableOpacity onPress={inc} style={styles.counterOperator}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const CartScreen = ({navigation}) => {
  const [done, setDone] = useState(false);
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(product => {
        return (
          <View style={styles.item} key={product.name}>
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={() => products.removeProduct(product.id)}>
              <FontAwesomeIcon icon={'close'} />
            </TouchableOpacity>
            <Image source={product.img} style={styles.img} />
            <View style={styles.centerBlock}>
              <Text style={styles.productTitle}>{product.name}</Text>
              <Text style={styles.productDesc}>{product.desc}</Text>
              <Text style={styles.productPrice}>
                {product.price}
                {config.currency}
              </Text>
            </View>
            <Counter product={product} />
          </View>
        );
      });
  };

  return (
    <Wrapper navigation={navigation}>
      {products.list.some(el => el.added) ? (
        <>
          <Text style={styles.title}>Ваш кошик</Text>
          <ScrollView>{renderProducts()}</ScrollView>
          <TouchableOpacity style={styles.btn} onPress={() => setDone(true)}>
            <Text>Підтвердити замовлення</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.emptyTitle}>Кошик порожній</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Shop')}>
            <Text>Перейти в магазин</Text>
          </TouchableOpacity>
        </>
      )}
      {done && <Popup setDone={setDone} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  item: {
    backgroundColor: '#ededed',
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-betweens',
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  centerBlock: {
    width: config.width - 40 - 10 - 80 - 80,
  },
  productTitle: {
    fontWeight: '700',
  },
  productDesc: {
    fontSize: 12,
    color: 'grey',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterOperator: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: config.colors.orange,
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
  },
  removeBtn: {
    position: 'absolute',
    top: -7,
    left: -7,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  emptyTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default observer(CartScreen);
