import { getPostsMeta } from '@/lib/getPost'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPostsMeta()
  console.log('posts : ', posts)
  return (
    <div>
      <h1>My Post</h1>
      <ul>
        {posts && posts?.length > 0 && posts?.map(post => {
          return <Link href={`/posts/${post?.id}`} key={post.id}>
            <li>
              {post?.title}
            </li>
          </Link>
        })}
      </ul>
    </div>
  )
}
