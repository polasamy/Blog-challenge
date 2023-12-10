import Blog from '../Blog/Blog.jsx'
import { useEffect, useState } from "react"
import Loading from '../Loading/Loading';

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])
    async function getBlogs() {
        try {
            const response = await fetch(`/posts`);
            const result = await response.json();
            setData(result )
        } catch (error) {
            console.error(error);
        }
    }
    if (data === undefined) {
        return <Loading />
    }
    return <>
        <div className=' '>
            <div className=' container mx-auto grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2'>
                {data.map((blog) =><Blog key={blog.id} title={blog.title} name={blog.author.name} date={blog.createdAt} content ={blog.content} id={blog.id} />)}
            </div>
        </div>

    </>
}

export default Home
