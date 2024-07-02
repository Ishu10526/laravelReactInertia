export default function Layout({children}) {
    return (
        <>
            <header>
                <nav className="bg-gray-800 pb-10">
                    <a  href="/" className="p-4 bg-gray-400">Home</a>
                    <a  href="" className="p-4 bg-gray-400"> List</a>
                    <a  href="/posts/create" className="p-4 bg-gray-400">Create</a>
                    <a  href="" className="p-4 bg-gray-400">Edit</a>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}