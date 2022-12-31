import { authPage } from "../../middlewares/authorizationPage"

export async function getServerSideProps(ctx) {
    const { token } = await authPage(ctx);

    const baseUrl = 'http://localhost:3000';

    const postReq = await fetch(baseUrl + '/api/posts', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const posts = await postReq.json();
    // console.log(posts);

    return {
        props: {
            posts: posts.data
        }
    }
}


export default function index(props) {
    console.log(props);
    return (
        <div>
            <h1>Posts Page</h1>

            {props.posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
}
