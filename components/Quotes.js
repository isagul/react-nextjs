import useSWR from 'swr';
import Link from 'next/link';

async function fetcher(url) {
    return fetch(url).then(r => r.json());
}

const Quotes = () => {
    const { data, error } = useSWR(`http://localhost:3000/api/allQuotes`, fetcher);
    console.log(data);

    return (
        <main className="center">
            <h1>Quotes</h1>
            {data &&
                data.map((item, index) => {
                    return (
                        <div key={index} className="quote-area">
                            <Link href="/quotes/[id]" as={`/quotes/${item.id}`}>
                                <a>
                                    <span className="quote">{item.quote}</span>
                                    <span className="author"> - {item.author}</span>
                                </a>
                            </Link>                            
                        </div>                        
                    )
                })
            }
            <style jsx>{`
                .quote-area {
                    cursor:pointer;
                }
                .quote-area a{
                    text-decoration: none;
                }
                .quote {
                font-family: cursive;
                color: #e243de;
                font-size: 24px;
                padding-bottom: 10px;
                }
                .author {
                font-family: sans-serif;
                color: #559834;
                font-size: 20px;
                }
                .quotes-link {
                    text-decoration: none;
                }
            `}</style>
        </main>
    );
}

export default Quotes;