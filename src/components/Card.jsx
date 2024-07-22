import './card.css';
import Avatar from './Avatar';
import Detail from './Detail';

function Card ({ name, imageUrl, tel, email}) {
    return (
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{name}</h2>
                {/* <img src={imageUrl} alt="pic" /> */}
                <Avatar 
                    imageUrl={imageUrl}
                />
            </div>
            <div className='bottom'>
                {/* <p className='info'>{tel}</p>
                <p className='info'>{email}</p> */}
                <Detail 
                    detail={tel}
                />
                <Detail 
                    detail={email}
                />
            </div>
        </div>
    );
}

export default Card;