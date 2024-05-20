import './index.css'

const EmojiCard = props => {
  const {emojiItem, emojiClick} = props
  const {emojiName, emojiUrl, id} = emojiItem

  const onClickEmoji = () => {
    emojiClick(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" onClick={onClickEmoji} className="emoji-click">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
