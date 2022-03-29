import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ali Ibrahim', text: 'Quote 1 text body ...' },
  { id: 'q2', author: 'Mahmoud Galal', text: 'Quote 2 text body ...' },
];

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
