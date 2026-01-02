import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });
  
  /**
   * Retrieves and combines fiscal data with citizenship results.
   * 
   * @async
   * @function getData
   * @returns {Promise<Object>} A promise that resolves to the fiscal data object with citizenship results attached
   * @throws {Error} May throw if getFiscalData() or getCitizenshipResults() fail
   * 
   * @example
   * const data = await getData();
   * console.log(data.citizenshipResults);
   */
  const getData = async () => {
    const fiscalData = await getFiscalData()
    const citizenshipData = await getCitizenshipResults()
    fiscalData.citizenshipResults = citizenshipData
    return fiscalData
  }

  /**
 * Fetches fiscal summary data from the asylum backend API.
 * 
 * @async
 * @function getFiscalData
 * @returns {Promise<Object>} A promise that resolves to the fiscal summary data
 * @throws {Error} Throws if the API request fails
 * 
 * @example
 * const fiscal = await getFiscalData();
 */
const getFiscalData = async () => {
    const fiscalDataRes = await axios.get('https://asylum-be.onrender.com/fiscalSummary')
    const fiscalData = fiscalDataRes.data
    return fiscalData;
  };

/**
 * Fetches citizenship summary data from the asylum backend API.
 * 
 * @async
 * @function getCitizenshipResults
 * @returns {Promise<Object>} A promise that resolves to the citizenship summary data
 * @throws {Error} Throws if the API request fails
 * 
 * @example
 * const citizenship = await getCitizenshipResults();
 */
  const getCitizenshipResults = async () => {
    const citizenshipRes = await axios.get('https://asylum-be.onrender.com/citizenshipSummary')
    const citizenshipData = citizenshipRes.data
    return citizenshipData;
  };

/**
 * Updates the query by fetching fresh data and updating the graph display.
 * Sets loading state during the data fetch operation.
 * 
 * @async
 * @function updateQuery
 * @returns {Promise<void>} A promise that resolves when the update is complete
 * 
 * @example
 * await updateQuery();
 */
  const updateQuery = async () => {
    setIsDataLoading(true);
    setGraphData(await fetchData())
    setIsDataLoading(false)
  };

/**
 * Fetches all data by calling getData().
 * 
 * @async
 * @function fetchData
 * @returns {Promise<Object>} A promise that resolves to the combined data object
 * 
 * @example
 * const data = await fetchData();
 */
  const fetchData = async () => {
        return await getData()

  };

  const clearQuery = () => {
    setGraphData({});
  };
// console.log(graphData.yearResults.map(({ fiscal_year }) => Number(fiscal_year)))
  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}