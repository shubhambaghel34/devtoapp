import Bloglist from "./Bloglist";
import useDevToArticles from '../hooks/useDevToArticles';

const Blog = () => {
    const { articles: blogdata, loading, error } = useDevToArticles();

    return (
        <>
           <h1 className="text-center" style={{margin:'35px 0px',marginTop:'80px'}}>Tech Blogs</h1>
            <div className="container">

                {loading && <p role="status">Loading articles...</p>}
                {error && <p role="alert">{error}</p>}

                <div >
                    <div className="row">
                        {blogdata.map((element) => (

                            <div className="col-md-4" key={element.id}>
                                <Bloglist title={element.title}
                                    description={element.description}
                                    imgUrl={element.cover_image || element.social_image}
                                    //blogurl={props.blogurl}
                                     author={element.twitter_username}
                                     date={element.published_at}
                                     createddat={element.created_at}
                                    source={element.source}
                                    canonicalUrl={element.canonical_url}
                                />
                            </div>


                        ))}
                    </div>


                </div>


            </div>

        </>
    )



}

export default Blog;