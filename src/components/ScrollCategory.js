import React from 'react-native'

let {
  View,
  Component,
  StyleSheet,
  Dimensions,
  Text,
  Image
} = React

let deviceHeight = Dimensions.get('window').height

// require doesn't support dynamic generation of path to image,
// so they will be defined here.
images = {
  'action': require('../../assets/action.jpg'),
  'comedy': require('../../assets/comedy.jpg'),
  'horror': require('../../assets/horror.jpg'),
  'drama': require('../../assets/drama.jpg'),
  'animation': require('../../assets/animation.jpg'),
  'romance': require('../../assets/romance.jpg'),
}

class ScrollCategory extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View
        style={styles.category}>
        <Image
          style={styles.image}
          source={images[this.props.category]}>
          <Text
            style={styles.imageText}>
            {this.props.category}
          </Text>
        </Image>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  category: {
    borderBottomWidth: 2,
    borderColor: '#d6d7da',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    height: (deviceHeight - 50) / 4
  },

  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: (deviceHeight - 50) / 4
  },

  imageText: {
    top: 25,
    color: '#ffffff'
  }
});

export default ScrollCategory