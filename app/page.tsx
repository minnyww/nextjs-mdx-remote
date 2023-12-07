import PostList from './components/PostList'

export default function Home() {
  console.log('GITHUB_TOKEN=>', process.env.GITHUB_TOKEN)
  return (
    <div>
      <h1>My Post</h1>
      <PostList />
    </div>
  )
}
