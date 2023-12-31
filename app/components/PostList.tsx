import { getPostsMeta } from "@/lib/getPost"
import Link from "next/link"

export default async function PostList() {
    const posts = await getPostsMeta()

    if (!posts) {
        return <p>Sorry, no posts available</p>
    }

    return (
        <ul>
            {posts && posts?.length > 0 && posts?.map(post => {
                return <Link href={`/posts/${post?.id}`} key={post.id}>
                    <li>
                        {post?.title}
                    </li>
                </Link>
            })}
        </ul>
    )
}