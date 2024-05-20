/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

class EmojiGame extends Component {
  state = {
    emojiListClick: [],
    score: 0,
    topScore: 0,
    displayScore: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState(prevState => ({
      displayScore: !prevState.displayScore,
      emojiListClick: [],
      score: 0,
    }))
  }

  emojiClick = id => {
    const {emojiListClick} = this.state
    if (!emojiListClick.includes(id)) {
      this.setState(prevState => ({
        emojiListClick: [...prevState.emojiListClick, id],
        score: prevState.score + 1,
      }))
    } else {
      const {score, topScore} = this.state
      if (score > topScore) {
        this.setState({
          topScore: score,
        })
      }
      this.setState(prevState => ({
        displayScore: !prevState.displayScore,
      }))
    }
  }

  render() {
    const {score, topScore, displayScore} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} displayScore={displayScore} />
        <div>
          {!displayScore ? (
            <ul className="list-items">
              {emojisList.map(eachItem => (
                <EmojiCard
                  emojiItem={eachItem}
                  key={eachItem.id}
                  emojiClick={this.emojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard playAgain={this.playAgain} score={score} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
