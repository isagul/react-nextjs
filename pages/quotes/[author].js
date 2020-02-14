import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import useSWR from 'swr';

async function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Quote(){
    const router = useRouter();
    const { data, error } = useSWR(`http://localhost:3000/api/fetchOneQuote?author=${router.query.author}`, fetcher); 
    let authorName = "";
    if (data) {
        authorName = data[0].author;
    }
    return (
        <Layout>
            <h1 className="author">{authorName}</h1>
            {
                data &&
                data.map(item => {
                    return (
                        <div key={item.id}>
                            <p className="quote">{item.quote}</p>
                        </div>
                    )
                })
            }
            <style jsx>{`
                .quote {
                    color: purple;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: left;
                }
                .author {
                    text-align: center;
                }
            `}</style>
        </Layout>
    )
}