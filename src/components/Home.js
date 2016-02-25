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
                    key={index}/>
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
    backgroundColor: '#3a3f41',
    height: 50
  },

  body: {
    backgroundColor: 'red'
  },

  scrollview: {
    backgroundColor: '#6A85B1',
    height: deviceHeight - 70
  },

  button: {
    marginBottom: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    height: (deviceHeight - 50) / 4
  }
})

export default Home
