import { Route, useParams } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ali Ibrahim', text: 'Quote 1 text body ...' },
  { id: 'q2', author: 'Mahmoud Galal', text: 'Quote 2 text body ...' },
];

const QuoteDetail = (props) => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <div className='centered'>
        <p> This quote does not exist! </p>
      </div>
    );
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
