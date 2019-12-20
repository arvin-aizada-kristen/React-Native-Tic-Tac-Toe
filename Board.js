import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square'

export default class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            gameBoard: Array(9).fill(null),
            currentPlayer: 'X',
            winner: false
        }
    }

    gamePlay = (index) => {
        const {gameBoard, currentPlayer, winner} = this.state

        if (gameBoard[index] == null && winner == false) {
            gameBoard[index] = currentPlayer
            this.setState({
                gameBoard: gameBoard,
                currentPlayer: currentPlayer == 'X' ? 'O' : 'X'
            })
        }
    }

    test() {
        console.log("Test")
    }

    render() {
        const {gameBoard, currentPlayer, gamePlay} = this.state


        const displayBoard = gameBoard.map((tile, index) => {

            return <Square
                    currentPlayer={currentPlayer}
                    test={this.test}
                    tile={tile}
                    key={index}
                    index={index}
                    gamePlay={this.gamePlay}/>
        })


        return (
        <View><Text>board</Text>
          <View id = "currentBoard" style={styles.gameBoard}>
              {displayBoard}
          </View>
         </View>
        );
    }

}

const styles = StyleSheet.create({
  gameBoard: {
    borderWidth: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height:315,
    width:315,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
