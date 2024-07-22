import './card.css';

function Card ({name, imageUrl, tel, email}) {
    return (
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{name}</h2>
                <img src={imageUrl} alt="pic" />
            </div>
            <div className='bottom'>
                <p className='info'>{tel}</p>
                <p className='info'>{email}</p>
            </div>
        </div>
    );
}

export default Card;