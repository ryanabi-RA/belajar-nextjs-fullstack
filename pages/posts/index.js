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
        },
    }
}

export default function PostIndex(props) {
    return (
        <div className="w-full h-screen">
            <h1 className="m-4 text-4xl">Posts Page</h1>
            {props.posts.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}
