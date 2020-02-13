import { getQuotes } from '../../src/quotes';

const quotes = getQuotes();
const uniqueAuthors = quotes.reduce((acc, item) => {
    console.log(item);
    const idx = acc.findIndex(value => item.author === value.author);
    if (idx === -1) {
        acc.push(item);
    };
    return acc;
}, []);

export default (req, res) => {
    res.status(200).json(uniqueAuthors)
}
