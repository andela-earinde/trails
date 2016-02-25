import React from 'react-native'

let {
  View,
  Component,
  StyleSheet,
  Dimensions,
  Text
} = React

let deviceHeight = Dimensions.get('window').height

class ScrollCategory extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View
        style={styles.button}>
        <Text>
          'crap'
        </Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  button: {
    marginBottom: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    height: (deviceHeight - 50) / 4
  }
});

export default ScrollCategory