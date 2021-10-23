
const Bloglist = (props) => {



    return (
    

            <div className="my-3">
                <div className="card" style={{borderRadius: '15px'}}>
                    <img src={props.imgUrl} className="card-img-top" alt="..." />
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