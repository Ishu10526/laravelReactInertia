import { Link,useForm } from "@inertiajs/react";

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    function submit(e) {
        e.preventDefault()
        destroy(`/posts/${post.id}`)
    }
    return (
        <>
            <div className="w-3/4 mx-auto border-2 p-8">
                <p className="text-center font-bold text-2xl">{post.title}</p>
                <p className="text-center mx-auto">{post.body}</p>
                <form onSubmit={submit}>
                    <button href={`/posts/${post.id}`} className="text-red-500 font-bold float-right">Delete</button>
                </form>
                <Link href={`/posts/${post.id}/edit`} className="text-green-500 font-bold float-right mx-2">Edit</Link>
            </div>
        </>
    )

}