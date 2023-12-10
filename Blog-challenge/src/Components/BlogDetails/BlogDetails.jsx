import { useEffect, useState } from "react"
import Loading from '../Loading/Loading';
import { useLocation } from 'react-router-dom';

function BlogDetails() {
    let { state } = useLocation()
    const [data, setData] = useState()
    useEffect(() => {
        if (state && state.blogId) {
            getBlogDetails(`/postsDetails/${state.blogId}`);
        }
        else{
            getBlogDetails(`/postsDetails/1`)
        }
    }, [state])
    async function getBlogDetails(x = `/postsDetails/${state.blogId}`) {
        try {
            const response = await fetch(x);
            const result = await response.json();
            setData(result[0])
        } catch (error) {
            console.error(error);
        }
    }

    if (data === undefined) {
        return <Loading />
    }
    return <>
        <article className="container mx-auto ">

            <div className=" bg-slate-200 p-4 rounded-md">
                <h2 className=" text-center text-xl pb-2 font-medium">{data.title}</h2>
                <p className="text-gray-600 text-center pb-2">By <span>{data.author.name}</span> on
                    <span> {data.createdAt}</span></p>
                <p className="mt-8 w-11/12 mx-auto">
                    {data.content}
                </p>
            </div>
            <div className="flex justify-center mt-4 ">
                {data.prev ?
                    <button className="py-2 w-24 rounded-md  text-white bg-slate-600 mx-4 " 
                    onClick={() => getBlogDetails(data.prev)}>Previous</button> : null}

                {data.next ?
                    <button className="py-2 w-24  rounded-md text-white bg-slate-600 mx-4 "
                        onClick={() => getBlogDetails(data.next)}>Next</button> : null}

            </div>
        </article>
    </>
}

export default BlogDetails
