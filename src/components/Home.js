import React from 'react-native'

let {
  Component,
  StyleSheet,
  View,
  Text,
  ToolbarAndroid
} = React

import Icon from 'react-native-vector-icons/MaterialIcons'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ToolbarAndroid
            title="Trails"
            actions={[{
              title: 'Search',
              icon: <Icon name='search' color="#FFFFFF"/>,
              show: 'always'
            }]}/>
        </View>
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
    backgroundColor: 'blue',
    height: 100
  },

  body: {
    backgroundColor: 'blue'
  }
})

export default Home
