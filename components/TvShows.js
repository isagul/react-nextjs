import Link from 'next/link';

const TvShows = props => {
    return (
        <>
            <h1>Batman TV Shows</h1>
            <ul>
                {
                    props.shows.map(show => (
                        <li key={show.id}>
                            <Link href="/shows/[id]" as={`/shows/${show.id}`}>
                                <a className="show-link">{show.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <style jsx>{`
                .show-link {
                    color: green;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}


export default TvShows;