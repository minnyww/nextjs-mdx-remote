import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostByName, getPostsMeta } from "@/lib/getPost"
import getFormattedDate from "@/lib/getFormattedDate"
// import { MDXRemote } from "next-mdx-remote/rsc"

export const revalidate = 86400

type Props = {
    params: {
        postId: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduped!

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
    }
}

export default async function Post({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduped!

    if (!post) notFound()

    const { meta, content, rawMDX } = post

    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
            <h2>Content at {pubDate}</h2>
            <article>
                {content}
            </article>
            <p>
                <Link href="/">← Back to home</Link>
            </p>

        </>
    )
}