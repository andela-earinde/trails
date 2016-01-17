import React from 'react-native'

let {
  Component
} = React

import Home from '../components/Home'

class HomeContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Home {...this.props} />
    )
  }
}

export default HomeContainer
