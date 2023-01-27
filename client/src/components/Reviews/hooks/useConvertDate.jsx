import { useState , useEffect} from 'react';

function useConvertDate(dateString) {
  const [convertedDate, setConvertedDate] = useState(null);

  useEffect(() => {
    if (dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const newDate = date.toLocaleDateString('en-US', options);
      setConvertedDate(newDate);
    }
  }, [dateString]);

  return convertedDate;
}

export default useConvertDate;