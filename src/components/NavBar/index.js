import './index.css'

const NavBar = props => {
  const {score, topScore, displayScore} = props
  return (
    <nav className="nav-bg">
      <div className="nav-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!displayScore ? (
        <div className="score-container">
          <p>Score:{score}</p>
          <p>Top Score:{topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
