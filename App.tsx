/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CustomTextInput from "./TextInput";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingTop: safePadding,
            paddingBottom: safePadding,
          }}>
            <TextInput style={{
                height: 60,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 20,
                fontFamily: 'Roboto',
                fontSize: 20,
                color: 'black',
            }} placeholder={"Search..."} placeholderTextColor={"red"} />
        </View>
          <View
              style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                  paddingHorizontal: safePadding,
                  paddingTop: safePadding,
                  paddingBottom: safePadding,
              }}>
              <TextInput style={{
                  height: 60,
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginBottom: 20,
                  fontFamily: 'Roboto-Regular',
                  fontSize: 20,
                  color: 'black',
              }} placeholder={"Search..."} placeholderTextColor={"red"} />
          </View>
          <View
              style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                  paddingHorizontal: safePadding,
                  paddingTop: safePadding,
                  paddingBottom: safePadding,
              }}>
              <CustomTextInput style={{
                  height: 60,
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginBottom: 20,
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  fontSize: 20,
                  color: 'black',
              }} placeholder={"Custom search..."} placeholderTextColor={"red"} />
          </View>
          <View
              style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                  paddingHorizontal: safePadding,
                  paddingTop: safePadding,
                  paddingBottom: safePadding,
              }}>
              <TextInput style={{
                  height: 60,
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginBottom: 20,
                  fontFamily: 'DancingScript',
                  fontWeight: '400',
                  fontSize: 20,
                  color: 'black',
              }} placeholder={"DancingScript..."} autoCapitalize={'none'} placeholderTextColor={"red"}/>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
