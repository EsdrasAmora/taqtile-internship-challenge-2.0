import * as React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import Wrapper from './Wrapper';

// Remove this list after the request to the API is complete
const list = [
  { name: 'bulbasaur' },
  { name: 'ivysaur' },
  { name: 'venusaur' },
  { name: 'charmander' },
  { name: 'charmeleon' },
  { name: 'charizard' },
  { name: 'squirtle' },
  { name: 'wartortle' },
  { name: 'blastoise' },
  { name: 'caterpie' },
  { name: 'metapod' },
  { name: 'butterfree' },
  { name: 'weedle' },
  { name: 'kakuna' },
  { name: 'beedrill' },
  { name: 'pidgey' },
  { name: 'pidgeotto' },
  { name: 'pidgeot' },
  { name: 'rattata' },
  { name: 'raticate' },
];

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ld: true, // is loading?
      list: [],
    };
  }

  componentDidMount() {
    // mock request
    setTimeout(() => {
      this.setState({
        ld: false, // remove loading
        list: list,
      });
    }, 2000);
  }

  render() {
    return (
      <View>
        {this.state.ld && <ActivityIndicator size={'large'} />}
        {this.state.list.map((i) => {
          return (
            <View style={{ padding: 8 }}>
              <Text>{i.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
