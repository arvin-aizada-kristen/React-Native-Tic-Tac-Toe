import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tileState: this.props.tile,
            tileDisplay: ""
        }
    }
    handleClick = () => {
        console.log("Pressed")
        const { gamePlay, index, test, currentPlayer } = this.props

        gamePlay(index)
        this.setState({
            tileDisplay: currentPlayer
        })
    }
    render() {
        const {tileState} = this.state
        const {currentPlayer} = this.props
        return (
           <View style={styles3.square}>

            <Text
                style={{color:"red", fontSize: 20}}
                onPress={this.handleClick}
            >
            {this.state.tileDisplay}
            </Text>
          </View>
        );
    }
}

const styles3 = StyleSheet.create({
  square: {
    borderWidth: 1,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
