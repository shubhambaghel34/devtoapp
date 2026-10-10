
const DEFAULT_IMAGE = 'https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png';

const Bloglist = (props) => {
    const imageUrl = props.imgUrl || DEFAULT_IMAGE;
    const isDefaultImage = !props.imgUrl;



    return (
    

            <div className="my-3">
                <div className="card" style={{borderRadius: '15px'}}>
                    <img
                        src={imageUrl}
                        className="card-img-top"
                        alt={isDefaultImage ? 'DEV Community' : props.title}
                        style={{
                            aspectRatio: '16 / 9',
                            objectFit: isDefaultImage ? 'contain' : 'cover',
                            backgroundColor: isDefaultImage ? '#f5f5f5' : undefined,
                            padding: isDefaultImage ? '24px' : undefined,
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}...</h5>
                        <p className="card-text">{props.description}...</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {props.createddat} {new Date(props.date).toGMTString()}
                            </small>
                        </p>
                        <a
                            href={props.canonicalUrl}
                            rel="nonreferer"
                            taget="_blank"
                            className="btn btn-sm btn-dark"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        
    )


}

export default Bloglist;