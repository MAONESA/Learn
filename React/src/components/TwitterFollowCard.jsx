function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-img'
          alt="Avatar" src={`https://pbs.twimg.com/profile_images/1483857113906659328/Q17wROWN_x96.jpg/${userName}`} />
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-infoUserName-strong'>{name}</strong>
          <span className='tw-followCard-infoUserName'>{userName}</span>
        </div>
      </header >
      <aside>
        <button className='tw-followCard-button'>
          {isFollowing ? "Siguiendo" : "Seguir"}
        </button>

      </aside>
    </article>
  )
}
export default TwitterFollowCard;