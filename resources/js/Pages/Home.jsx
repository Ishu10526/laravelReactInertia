import { Link, useForm } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            <p className="text-center text-2xl font-bold">Hellow </p>
            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="border-b py-4">
                        <p>{post.title}</p>
                        <p>{post.body}</p>
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