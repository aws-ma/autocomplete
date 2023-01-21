import arrow from './arrow.svg';
const Result = ({
  item,
  title = '',
  highlight = '',
  setInputValue,
  search,
  resultsRef,
  onClickResult = () => {},
}) => {
  const handleClick = (e) => {
    setInputValue(title);
    search(title);
    resultsRef.current.style.display = 'none !important';

  };
  if (!highlight.trim()) {
    return <span>{title}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = title.split(regex);

  return (
    <div
      className="result"
      onClick={(e) => {
        handleClick(e);
        onClickResult(e, item);
      }}
    >
      <img src={arrow} alt="-" style={{ width: '20px', marginRight: '4px' }} />
      <div>
        {parts.filter(String).map((part, i) => {
          return regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
