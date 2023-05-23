import { useEffect, useState } from "react";
import Select from "react-select";
import "./App.css";
import BarChart from "./charts/BarChart";

export type StrikePrice = {
  value: string;
  label: string;
};

type OptionChain = {
  [key: string]: string;
};

function App() {
  const [selectedStrikePrice, setSelectedStrikePrice] =
    useState<StrikePrice | null>(null);
  const [strikePriceOptions, setStrikePriceOptions] = useState<StrikePrice[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await fetch(
        "https://h9cg992bof.execute-api.ap-south-1.amazonaws.com/webapi/option/fatch-option-chain?symbol=banknifty&expiryDate="
      )
        .then(async (res) => {
          return await res.json();
        })
        .then((res) => {
          const {
            resultData: { opDatas },
          } = res;
          const strikePriceOptions: StrikePrice[] = opDatas.map(
            (opData: OptionChain) => {
              const { strike_price = "" } = opData;
              setDataIntoStorage(opData);
              return { value: strike_price, label: strike_price };
            }
          );

          setStrikePriceOptions(strikePriceOptions);
          setIsLoading(false);
        });
    };

    getData();
  }, []);

  const setDataIntoStorage = (opData: OptionChain) => {
    const { strike_price = "" } = opData;
    const strikePriceData = sessionStorage.getItem(strike_price);
    if (strikePriceData) {
      const strikePrice = JSON.parse(strikePriceData);
      strikePrice.push(opData);
      sessionStorage.setItem(strike_price, JSON.stringify(strikePrice));
    } else {
      sessionStorage.setItem(strike_price, JSON.stringify([opData]));
    }
  };

  const handleChange = (selectedObj: StrikePrice | null): void => {
    if (selectedObj) {
      setSelectedStrikePrice(selectedObj);
    }
  };

  return (
    <section id="chart-wrapper">
      <section className="dropdown-container">
        <label htmlFor="strikePrice">Choose a Strike Price:</label>
        <Select
          className="basic-single"
          classNamePrefix="filter"
          isLoading={isLoading}
          isSearchable={false}
          name="strikePrice"
          options={strikePriceOptions}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "lightgrey",
              primary: "grey",
            },
          })}
          onChange={handleChange}
          value={selectedStrikePrice}
        />
      </section>
      {selectedStrikePrice && <BarChart strikePrice={selectedStrikePrice} />}
    </section>
  );
}

export default App;
