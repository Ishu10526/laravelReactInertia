import { useForm } from "@inertiajs/react";

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    function submit(e) {
        e.preventDefault()
        destroy(`/posts/${post.id}`)
    }
    return (
        <>
            <div className="w-1/2 mx-auto">
                <p className="text-center font-bold text-2xl">{post.title}</p>
                <p className="text-center w-1/2 mx-auto">{post.body}</p>
                <form onSubmit={submit}>
                    <button href={`/posts/${post.id}`} className="text-red-500 font-bold float-right">Delete</button>
                </form>
            </div>
        </>
    )

}