import Layout from '../components/MyLayout.js';
import TvShows from '../components/TvShows';
import Quotes from '../components/Quotes';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const PostLink = props => {
    const {post} = props;
    return (
        <li key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <a className="post-link">{post.title}</a>
            </Link>
            <style jsx>{`
                .post-link {
                    color: purple;
                    text-decoration: none;
                }
            `}</style>
        </li>
    );
}

const Index = (props) => {
    return (
        <Layout>
            <h1>My Posts</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink post={post}/>
                ))}
            </ul>
            <TvShows shows={props.shows}/>     
            <Quotes />       
        </Layout>
    );
};

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return {
        shows: data.map(entry => entry.show)
    };
};


export default Index;
