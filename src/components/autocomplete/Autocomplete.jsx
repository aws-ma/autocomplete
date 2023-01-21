import { useState, useRef } from 'react';
import Result from './Result';
import './autocomplete.css';
const Autocomplete = ({
  arrayItems = [],
  itemLocation = null,
  onClickResult,
}) => {
  const [resultsMatched, setResultsMatched] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef(null);
  const search = async (text) => {
    setLoading(false);
    if (text) {
      setInputValue(text);
      const mapResult = await Promise.all(
        arrayItems.map(async (item) => {
          return itemLocation
            ? eval(itemLocation).toLowerCase().search(text.toLowerCase()) !== -1
            : item.toLowerCase().search(text.toLowerCase()) !== -1;
        })
      );
      const filterResult = arrayItems.filter((_, index) => mapResult[index]);
      setResultsMatched(filterResult);
      setLoading(true);
    } else {
      setResultsMatched([]);
      setInputValue('');
    }
  };
  return (
    <div className="autocomplete-container">
      <input
        className="main-input"
        type="text"
        placeholder="Search any meal by name"
        value={inputValue}
        onChange={(e) => search(e.target.value)}
      />
      <>
        {inputValue ? (
          loading ? (
            resultsMatched.length > 0 ? (
              <div className='results' ref={resultsRef}>
                {resultsMatched.map((item, index) => {
                  return (
                    <Result
                      key={index}
                      title={eval(itemLocation) || item}
                      highlight={inputValue}
                      item={item}
                      setInputValue={setInputValue}
                      onClickResult={onClickResult}
                      search={search}
                      resultsRef={resultsRef}
                    />
                  );
                })}
              </div>
            ) : (
              <h1 className="h1-result">Oops! No Results</h1>
            )
          ) : (
            <h1 className="h1-result">loading...</h1>
          )
        ) : (
          <></>
        )}
      </>
    </div>
  );
};

export default Autocomplete;
