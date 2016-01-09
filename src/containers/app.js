import React from 'react-native'

let {
  StyleSheet,
  Navigator,
  View,
  Text
} = React

import HomeContainer from './HomeContainer'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  renderScene(route, navigator) {
    let Component = route.component

    return (
      <Component navigator={navigator} route={route}/>
    )
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        style={styles.navigator}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        initialRoute={{
          component: HomeContainer,
          name: 'Home'
        }}/>
    )
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})

export default App
