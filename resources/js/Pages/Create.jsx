import { useForm } from "@inertiajs/react";

export default function Create() {
    const {data, setData, post, errors, processing} = useForm({
        title: "",
        body: "",
    });

    function submit(e){
        e.preventDefault()
        post("/posts")
    }

    console.log(errors);

    return (
        <>
            <h1 className="text-center font-bold text-2xl">Create new Post</h1>
            <form className="w-1/2 mx-auto " onSubmit={submit}>
                <div className="flex flex-col space-y-5">
                    <input type="text" value={data.title}
                    onChange={(e) => setData('title', e.target.value)} className="border-2" /> 
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                    <textarea rows="4" value={data.body}
                    onChange={(e) => setData('body', e.target.value)}
                    className="border-2" ></textarea>
                    {errors.body && <p className="text-red-500">{errors.body}</p>}
                    <button className="bg-blue-900 rounded-lg"> Create Post</button>
                </div>
            </form>

        </>
    )

}