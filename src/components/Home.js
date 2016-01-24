import React from 'react-native'

let {
  Component,
  StyleSheet,
  View,
  Text,
  ToolbarAndroid
} = React

import Icon from 'react-native-vector-icons/FontAwesome'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title="Trails"
          actions={[{
            title: 'Search',
            show: 'always',
            icon: require('../../assets/search100.png')
          }]}/>
        <View style={styles.body}>
          <Text>Crap me</Text>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000'
  },

  header: {
    alignItems: 'center',
  },

  toolbar: {
    backgroundColor: 'blue',
    height: 50
  },

  body: {
    backgroundColor: 'red'
  }
})

export default Home
