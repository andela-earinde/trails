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
              [1,2,4,5,6,7,8,9].map((index) => {
                return (
                  <View
                    style={styles.button}>
                    <Text>
                      {index}
                    </Text>
                  </View>
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
    backgroundColor: 'blue',
    height: 50
  },

  body: {
    backgroundColor: 'red'
  },

  scrollview: {
    backgroundColor: '#6A85B1',
    height: 250
  },

  button: {
    marginBottom: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  }
})

export default Home
