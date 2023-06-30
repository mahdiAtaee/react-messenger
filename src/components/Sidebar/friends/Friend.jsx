import User from '../../../assets/images/man1.jpg'
function Friend() {
  return (
    <li className="friend">
      <div className="avatar online">
        <img src={User} alt="user" />
      </div>
      <div className="username">مهدی عطایی</div>
    </li>
  )
}

export default Friend