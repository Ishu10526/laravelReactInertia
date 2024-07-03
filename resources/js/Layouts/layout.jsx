export default function Layout({children}) {
    return (
        <>
            <header className="sticky top-0">
                <nav className="flex bg-gray-800 justify-end px-10">
                    <a  href="/" className="p-4 text-white">Home</a>
                    <a  href="" className="p-4 text-white"> List</a>
                    <a  href="/posts/create" className="p-4 text-white">Create</a>
                    <a  href="" className="p-4 text-white">Edit</a>
                </nav>
            </header>

            <main>
                <div className="max-w-screen-lg	mx-auto my-5">
                {children}
                </div>
            </main>
        </>
    )
}