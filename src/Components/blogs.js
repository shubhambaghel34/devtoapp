import Bloglist from "./Bloglist";
import { useEffect, useState } from 'react'

const Blog = () => {

    URL = "https://dev.to/api/articles?username=shubham57396755";

    const [blogdata, setBlogdata] = useState([]);
    const fetchData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        //console.log(blogdata);
        setBlogdata(data);

    }


    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
           <h1 className="text-center" style={{margin:'35px 0px',marginTop:'80px'}}>Tech Blogs</h1>
            <div className="container">

                <div >
                    <div className="row">
                        {blogdata.map((element) => (

                            <div className="col-md-4">
                                <Bloglist title={element.title}
                                    description={element.description}
                                    imgUrl={element.social_image}
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