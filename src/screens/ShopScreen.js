import React, {useState} from 'react';
import Wrapper from '../components/Wrapper';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../data/globalStyles';
import config from '../data/config';
import menuList from '../data/menuList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import SingleProduct from '../components/SingleProduct';
import products from '../state/products';

const typesArr = ['Все'];

menuList.forEach(type => {
  if (typesArr.includes(type.type)) {
    return;
  }
  typesArr.push(type.type);
});

const ShopScreen = ({navigation}) => {
  const [currentType, setCurrentType] = useState('Все');
  const [currentProduct, setCurrentProduct] = useState(null);
  const renderTypes = () => {
    return typesArr.map(type => (
      <TouchableOpacity
        style={styles.type}
        key={type}
        onPress={() => setCurrentType(type)}>
        <View
          style={{
            ...styles.inner,
            backgroundColor:
              currentType === type ? config.colors.lightYellow : '#fff',
          }}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const renderProducts = () => {
    return products.list
      .filter(el => {
        if (currentType === 'Все') {
          return true;
        }
        if (el.type === currentType) {
          return true;
        }
        return false;
      })
      .map(product => (
        <TouchableOpacity
          style={styles.productItem}
          onPress={() => setCurrentProduct(product)}>
          <Image source={product.img} style={styles.img} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDesc}>{product.desc}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <Text style={styles.title}>Насолоджуйтесь смачною їжею</Text>
      <ScrollView style={styles.types} horizontal={true}>
        {renderTypes()}
      </ScrollView>
      <ScrollView style={styles.products} horizontal={true}>
        {renderProducts()}
      </ScrollView>
      <View style={styles.bottomLine}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <FontAwesomeIcon
            icon={'home'}
            size={30}
            color={config.colors.orange}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon
            icon={'shopping-cart'}
            size={30}
            color={config.colors.orange}
          />
        </TouchableOpacity>
      </View>
      {currentProduct && (
        <SingleProduct
          setCurrentProduct={setCurrentProduct}
          product={currentProduct}
        />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  types: {
    marginTop: 20,
  },
  type: {
    width: 80,
    height: 100,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: config.colors.orange,
    marginHorizontal: 10,
    padding: 10,
  },
  inner: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  typeText: {
    fontSize: 12,
    textAlign: 'center',
  },
  productItem: {
    width: 300,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#ededed',
    paddingTop: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  img: {
    width: 450 / 2,
    height: 338 / 2,
  },
  productName: {
    fontSize: 22,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  productDesc: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: 'grey',
  },
  bottomLine: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});

export default ShopScreen;
