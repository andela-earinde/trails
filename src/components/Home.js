import React from 'react-native'

let {
  Component,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  ToolbarAndroid
} = React

import Icon from 'react-native-vector-icons/FontAwesome'

import ScrollCategory from './ScrollCategory'

let deviceHeight = Dimensions.get('window').height

const categories  = [
  'action', 'comedy', 'horror', 'drama', 'animation', 'romance'
]

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
          titleColor='#fff'
          actions={[{
            title: 'Search',
            show: 'always',
            icon: require('../../assets/search100.png')
          }]}/>
        <View style={styles.body}>
          <ScrollView
            style={styles.scrollview}>
            {
              categories.map((category, index) => {
                return (
                  <ScrollCategory
                    key={index}
                    category={category}/>
                )
              })
            }
          </ScrollView>
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
    backgroundColor: '#1B1B1B',
    height: 50
  },

  body: {
    backgroundColor: '#1B1B1B'
  },

  scrollview: {
    backgroundColor: '#1B1B1B',
    height: deviceHeight - 70
  }
})

export default Home
