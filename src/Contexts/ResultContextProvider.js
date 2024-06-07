import React, { createContext, useContext, useState, useEffect } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searching, setSearching] = useState('');

  const getResults = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}?query=${query}&limit=10&related_keywords=true`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '33ac062ad0msh558ea84bdc302e8p1de351jsnedf5813a1b0d',
          'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        }
      });
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResultContext.Provider value={{ getResults, result, searching, setSearching, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
