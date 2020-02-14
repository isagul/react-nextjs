import { getQuotes } from '../../src/quotes';

const quotes = getQuotes();



export default (req, res) => {
    const { author } = req.query;

    const authorQuotes = quotes.reduce((allQuotes, quote) => {
        if (quote.url === author) {
            allQuotes.push(quote);
        }
        return allQuotes;
    }, []);
    
    res.status(200).json(authorQuotes)
}
