import { getQuotes } from '../../src/quotes';

const quotes = getQuotes();

export default (req, res) => {
    res.status(200).json(quotes)
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}