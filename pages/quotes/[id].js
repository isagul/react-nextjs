import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import useSWR from 'swr';

async function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Quote(){
    const router = useRouter();
    const { data, error } = useSWR(`http://localhost:3000/api/fetchOneQuote?id=${router.query.id}`, fetcher);  
    return (
        <Layout>
            {
                data &&
                <>
                    <p className="quote">{data.quote}</p>
                    <p className="author">{data.author}</p>
                </>
            }
            <style jsx>{`
                .quote {
                    color: purple;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                }
                .author {
                    text-align: right;
                }
            `}</style>
        </Layout>
    )
}