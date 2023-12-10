import { Link } from "react-router-dom";
function Blog({ title, name, date, content,id }) {

    function truncate(str) {
        return str.slice(0,50).trim() + "... Read more";
    }
    return <>
        <Link to={"details"} id={`blogNumber-${id}`}  className="m-3" state={{blogId:id}}>
            <div className=" blog bg-slate-200 p-4  rounded-md">
                <h2 className=" text-center text-xl pb-2 font-medium">{title}</h2>
                <p className="text-gray-600 text-center pb-2">By <span>{name}</span> on <span>{date}</span></p>
                <p>{truncate(`${content}`)}</p>
            </div>
        </Link>
    </>
}

export default Blog
