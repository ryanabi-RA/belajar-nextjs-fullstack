import { useState } from 'react'
import Modal from '../../components/modal/modal'
import { authPage } from '../../middlewares/authorizationPage'

export async function getServerSideProps(ctx) {
    const { token } = await authPage(ctx)

    const baseUrl = 'http://localhost:3000'

    const postReq = await fetch(baseUrl + '/api/posts', {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })

    const posts = await postReq.json()
    // console.log(posts);

    return {
        props: {
            posts: posts.data,
            token,
        },
    }
}

export default function PostIndex(props) {
    const [show, setShow] = useState(false)
    const { token } = props

    async function deleteHandler(id, e) {
        e.preventDefault()

        const ask = confirm('Apakah data ini akan dihapus')

        if (ask) {
            const deletePost = await fetch('/api/posts/delete/' + id, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })

            const res = await deletePost.json()

            console.log(res)
        }
    }

    return (
        <div className="h-screen w-full px-4">
            <h1 className="my-6 text-4xl">Posts Page</h1>
            <button
                className="mb-4 rounded-lg border-2 border-blue-500 px-4 py-1 hover:bg-blue-500 hover:text-white active:bg-gray-300"
                onClick={() => setShow(true)}
            >
                Add new
            </button>
            <Modal onClose={() => setShow(false)} show={show} token={token} />
            <div className="rounded-lg border-2 border-gray-200 p-2">
                {props.posts.map((post) => (
                    <div
                        key={post.id}
                        className="my-2 flex items-center justify-between rounded-md bg-gray-200 p-2 dark:bg-gray-800"
                    >
                        <div className="ml-2">
                            <h3 className="text-xl font-semibold">
                                {post.title}
                            </h3>
                            <p>{post.content}</p>
                        </div>
                        <div className="">
                            <button className="mx-2 rounded-lg border-2 border-yellow-500 bg-yellow-500 py-1 px-3 text-white hover:bg-transparent hover:text-yellow-500 active:bg-gray-500">
                                Edit
                            </button>
                            <button
                                onClick={deleteHandler.bind(this, post.id)}
                                className="mx-2 rounded-lg border-2 border-red-500 bg-red-500 py-1 px-3 text-white hover:bg-transparent hover:text-red-500 active:bg-gray-500"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
