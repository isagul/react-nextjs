import { getQuotes } from '../../src/quotes';

const quotes = getQuotes();

export default (req, res) => {
    const { id } = req.query;

    const currentQuote = quotes.find(quote => {
        return quote.id === Number(id);
    });
    
    res.status(200).json(currentQuote)
}
