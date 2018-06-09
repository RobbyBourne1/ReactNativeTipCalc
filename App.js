import React from 'react';
import { Container }from 'native-base'
import Expo from 'expo'
import Hello from './Hello'
import Head from './ui/Head'
import TipBody from './ui/TipBody'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    }
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  componentWillMount() { 
    this.loadFonts();
  }
  
  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Container>
        <Head/>
        <TipBody/>
      </Container>
    );
  }
}
