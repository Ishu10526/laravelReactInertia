import { Link, useForm } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            <p className="text-center text-2xl font-bold p-4">Posts </p>
            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="border-2 p-4 m-2 hover:bg-gray-800 hover:text-white rounded-lg">
                        <p className="font-semibold">{post.title}</p>
                        <p>{post.body}</p>
                        {/* <Button>Click me</Button> */}
                        <Link href={`/posts/${post.id}`} className="text-cyan-500 font-bold">Read More...</Link>
                    </div>
                )
                )}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) => (
                    <Link key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }} 
                        className={`px-2 ${link.active ? "text-blue-500 font-bold" : "" }`}/>
                ))}
            </div>
        </>
    )
}