import React, {useState} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

function MobilScreen({navigation}) {
  const [indicator, setIndicator] = useState(true);

  const str = '<style>#cdk-overlay-0 {display:none !important;}</style>';

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://mobilbahizbar.site/terms.php',
        }}
        onMessage={event => {}}
        javaScriptEnabled={true}
        injectedJavaScript={`document.body.insertAdjacentHTML('afterbegin', '${str}')`}
        style={{marginTop: 35}}
        onLoadEnd={syntheticEvent => {
          setIndicator(false);
        }}
        allowsInlineMediaPlayback={true}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          if (nativeEvent.statusCode === 404) {
            navigation.push('Home', {err: 404});
          }
        }}
      />
      {indicator && (
        <View style={styles.loader}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    width: 55,
    height: 55,
    top: Dimensions.get('window').height / 2 - 25,
    left: Dimensions.get('window').width / 2 - 25,
  },
});

export default MobilScreen;
