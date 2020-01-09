import useSWR from 'swr';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

const Quotes = () => {
    const { data, error } = useSWR('/api/randomQuote', fetcher);
    // console.log(data);
    return (
        <main className="center">
            <h1>Quotes</h1>
            {data &&
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <span className="quote">{item.quote}</span>
                            <span className="author"> - {item.author}</span>
                        </div>
                    )
                })
            }
            <style jsx>{`
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
            `}</style>
        </main>
    );
}

export default Quotes;