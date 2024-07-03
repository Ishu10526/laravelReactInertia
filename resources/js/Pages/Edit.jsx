import { useForm } from "@inertiajs/react";

export default function Edit({post}) {
    const { data, setData, put, errors, processing } = useForm({
        title: post.title,
        body: post.body,
    });

    function submit(e) {
        e.preventDefault()
        put(`/posts/${post.id}`)
    }

    console.log(errors);

    return (
        <>
            <h1 className="text-center font-bold text-2xl my-5">Create new Post</h1>
            <form className="w-1/2 mx-auto " onSubmit={submit}>
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="title" className="font-semibold">Title</label>
                        <input type="text" id="title" value={data.title}
                            onChange={(e) => setData('title', e.target.value)} className="border-2 p-2" />
                        {errors.title && <p className="text-red-500">{errors.title}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="body" className="font-semibold">Content</label>
                        <textarea rows="4" id="body" value={data.body}
                            onChange={(e) => setData('body', e.target.value)}
                            className="border-2 p-2" ></textarea>
                        {errors.body && <p className="text-red-500">{errors.body}</p>}
                    </div>
                    <button className="bg-blue-900 rounded-lg p-2 text-white hover:bg-gray-800"> Update Post</button>
                </div>
            </form>

        </>
    )

}