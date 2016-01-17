import React from 'react-native'

let {
  Component,
  StyleSheet,
  View,
  Text
} = React

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Hello React Native</Text>
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
    backgroundColor: 'blue'
  },

  body: {
    marginTop: 20,
    backgroundColor: 'blue'
  }
})

export default Home
