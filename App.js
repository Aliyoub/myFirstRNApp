import React from 'react';

import Navigation from './Navigation/Navigation';

export default class App extends React.Component {
  render() {

    /* let pic = {
      uri: 'https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628_960_720.jpg'
    }; */

    return (
      /* <View> */
        <Navigation/>
        /* <ImageBackground source={pic} style={backgroundStyle.bg}>                               
          <View style={backgroundStyle.ImageBackgroundView}>
            <Text style={accrocheStyle.accroche1}>Au bonheur des bouts d'chou!</Text>
            <Text style={accrocheStyle.accroche2}>
              Trouver une assitante maternelle ou des enfants à garder 
              n'a jamais été aussi simple !
            </Text>
          </View>
        </ImageBackground> */
      /* </View> */
    );
  }
}
// Pour faire disparaître le warning relatif à ViewpagerAndroid...
// voir : https://github.com/react-native-community/react-native-tab-view/issues/682
console.disableYellowBox = true