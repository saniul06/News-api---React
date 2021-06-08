const link = ({ value, url }) => {
    return (
        <a
            href={url}
            rel='noopener noreferrer'
            target='_blank'
            style={{ color: '#424242' }}
        >
            <h5 className='card-title'>{value}</h5>
        </a>
    );
};

export default link;
