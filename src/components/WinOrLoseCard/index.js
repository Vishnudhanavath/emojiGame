import './index.css'

const WinOrLoseCard = props => {
  const {playAgain, score} = props
  const onPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="bg-container win-lose-bg">
      <div className="win-lose-container">
        {score < 12 ? (
          <div className="container">
            <div>
              <h1>You Lose</h1>
              <p>Score</p>
              <h1 className="output">{score}/12</h1>
              <button
                type="button"
                onClick={onPlayAgain}
                className="playAgain-btn"
              >
                Play Again
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        ) : (
          <div className="container">
            <div>
              <h1>You Won</h1>
              <p>Best Score</p>
              color:;
              <p className="output">12/12</p>
              <button
                type="button"
                onClick={onPlayAgain}
                className="playAgain-btn"
              >
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
    </div>
  )
}

export default WinOrLoseCard
