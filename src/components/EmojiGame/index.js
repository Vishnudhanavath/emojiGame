// /*
// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// const shuffledEmojisList = () => {
//   const {emojisList} = this.props
//   return emojisList.sort(() => Math.random() - 0.5)
// }

// */

// // Write your code here.

// import {Component} from 'react'
// import './index.css'
// import EmojiCard from '../EmojiCard'

// import WinOrLoseCard from '../WinOrLoseCard'

// import NavBar from '../NavBar'

// class EmojiGame extends Component {
//   state = {
//     emojiListClick: [],
//     score: 0,
//     topScore: 0,
//     displayScore: false,
//   }

//   shuffledEmojisList = () => {
//     const {emojisList} = this.props
//     return emojisList.sort(() => Math.random() - 0.5)
//   }

//   playAgain = () => {
//     const {score, topScore} = this.state
//     this.setState(prevState => ({
//       displayScore: !prevState.displayScore,
//       emojiListClick: [],
//       score: 0,
//     }))
//     if (score > topScore) {
//       this.setState({topScore: score})
//     }
//   }

//   emojiClick = id => {
//     const {emojiListClick, score} = this.state
//     if (!emojiListClick.includes(id)) {
//       this.setState(prevState => ({
//         emojiListClick: [...prevState.emojiListClick, id],
//         score: prevState.score + 1,
//       }))
//     }
//     if (score > 12) {
//       //   const {topScore} = this.state
//       this.setState(prevState => ({
//         displayScore: !prevState.displayScore,
//       }))
//     } else if (emojiListClick.includes(id)) {
//       this.setState(prevState => ({
//         displayScore: !prevState.displayScore,
//       }))
//     }
//   }

//   render() {
//     const {score, topScore, displayScore} = this.state
//     const emojisList = this.shuffledEmojisList()
//     return (
//       <div className="bg-container">
//         <NavBar score={score} topScore={topScore} displayScore={displayScore} />
//         <div>
//           {!displayScore ? (
//             <ul className="list-items">
//               {emojisList.map(eachItem => (
//                 <EmojiCard
//                   emojiItem={eachItem}
//                   key={eachItem.id}
//                   emojiClick={this.emojiClick}
//                 />
//               ))}
//             </ul>
//           ) : (
//             <WinOrLoseCard playAgain={this.playAgain} score={score} />
//           )}
//         </div>
//       </div>
//     )
//   }
// }

// export default EmojiGame

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
    this.setState(prevState => {
      const {score, topScore} = prevState
      return {
        displayScore: false,
        emojiListClick: [],
        score: 0,
        topScore: score > topScore ? score : topScore,
      }
    })
  }

  emojiClick = id => {
    this.setState(prevState => {
      const {emojiListClick, score} = prevState
      const {emojisList} = this.props
      if (!emojiListClick.includes(id)) {
        const newScore = score + 1
        return {
          emojiListClick: [...emojiListClick, id],
          score: newScore,
          displayScore:
            newScore === emojisList.length ? true : prevState.displayScore,
        }
      }
      return {
        displayScore: true,
      }
    })
  }

  render() {
    const {score, topScore, displayScore} = this.state
    const {emojisList} = this.props
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} displayScore={displayScore} />
        <div>
          {!displayScore ? (
            <ul className="list-items">
              {shuffledEmojis.map(eachItem => (
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
