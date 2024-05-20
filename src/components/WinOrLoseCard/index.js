import './index.css'

const WinOrLoseCard = props => {
  const {playAgain, score} = props
  const onPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="bg-container">
      {score < 12 ? (
        <div className="container">
          <div>
            <h1>You Lose</h1>
            <p>Score</p>
            <h1>{score}/12</h1>
            <button type="button" onClick={onPlayAgain}>
              Play Again
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="lose"
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <div>
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>12/12</p>
            <button type="button" onClick={onPlayAgain}>
              Play Again
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="won"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
