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

    return (
        <div className="h-screen w-full">
            <h1 className="text-4xl">Posts Page</h1>
            <button
                className="m-4 rounded-lg border-2 border-blue-500 px-4 py-1 hover:bg-blue-500 hover:text-white active:bg-gray-300"
                onClick={() => setShow(true)}
            >
                Add new
            </button>
            <Modal
                onClose={() => setShow(false)}
                show={show}
                token={props.token}
            />
            <div className="boder-white mx-4 rounded-lg border p-2">
                {props.posts.map((post) => (
                    <p
                        key={post.id}
                        className="my-2 rounded-md bg-gray-200 p-2 dark:bg-gray-800"
                    >
                        {post.title}
                    </p>
                ))}
            </div>
        </div>
    )
}
