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
        style={styles.category}>
        <Text>
          'crap'
        </Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  category: {
    padding: 5,
    borderBottomWidth: 2,
    borderColor: '#d6d7da',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    height: (deviceHeight - 50) / 4
  }
});

export default ScrollCategory