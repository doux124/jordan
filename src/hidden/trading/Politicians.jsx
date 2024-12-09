import { useState, useEffect } from "react";
import '../../components/table.css'

const Politicians = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      };

    const fetchData = async () => {
      try {
        // Fetch the HTML content using CORS proxy
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://www.quiverquant.com/congresstrading/politician/Nancy%20Pelosi-P000197",
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );
        const html = await response.text();

        // Parse the HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Select the script tag with the trade data
        const scriptTag = Array.from(doc.getElementsByTagName("script")).find((script) =>
          script.textContent.includes("let tradeData =")
        );

        if (!scriptTag) {
          console.log("Trade data not found.");
          return;
        }

        // Extract the tradeData from the script tag
        const scriptContent = scriptTag.textContent;
        const tradeDataMatch = scriptContent.match(/let tradeData = (\[\[.*\]\]);/);
        if (!tradeDataMatch) {
          console.log("No trade data found in script.");
          return;
        }

        // Replace NaNs with nulls to clean
        const rawTradeData = tradeDataMatch[1];
        const cleanedTradeData = rawTradeData.replace(/NaN/g, "null");

        // Parsing
        const parsedTradeData = JSON.parse(cleanedTradeData);

        // Map the tradeData to a more readable structure
        const formattedTrades = parsedTradeData.map((trade) => ({
          symbol: trade[0],
          transactionType: trade[1],
          fileDate: formatDate(trade[2]),
          tradeDate: formatDate(trade[3]),
          description: trade[4],
          type: trade[9],
          amount: trade[10],
          sector: trade[13],
          profit: trade[5] !== null ? Number(trade[5]).toPrecision(3) : null,
        }));
        setTrades(formattedTrades.slice(0, 10));
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='flex-center text-3xl mt-20'>Nancy Pelosi Stock Trades</h1>
      <h1 className='flex-center mt-10'>
        Request temporary access to CORS Anywhere's demo server at&nbsp;
        <a href="https://cors-anywhere.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          https://cors-anywhere.herokuapp.com/
        </a>
      </h1>
      <h1 className='flex-center'>
        Retrieved from:&nbsp;
        <a href="https://www.quiverquant.com/congresstrading/politician/Nancy%20Pelosi-P000197" target="_blank" rel="noopener noreferrer">
          https://www.quiverquant.com/congresstrading/politician/Nancy%20Pelosi-P000197
        </a>
      </h1>

      <div className='flex-center'>
        <table className='mt-10'>
          <thead>
            <tr>
              <th style={{ width: "150px" }}>Symbol</th>
              <th style={{ width: "150px" }}>Filed Date</th>
              <th style={{ width: "150px" }}>Trade Date</th>
              <th style={{ width: "150px" }}>Transaction Type</th>
              <th style={{ width: "150px" }}>Amount</th>
              <th style={{ width: "150px" }}>Profit (%)</th>
              <th style={{ width: "150px" }}>Type</th>
              <th style={{ width: "150px" }}>Sector</th>
              <th style={{ width: "150px" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, index) => (
              <tr key={index}>
                <td>{trade.symbol}</td>
                <td>{trade.fileDate}</td>
                <td>{trade.tradeDate}</td>
                <td>{trade.transactionType}</td>
                <td>{trade.amount}</td>
                <td>{trade.profit}</td>
                <td>{trade.type}</td>
                <td>{trade.sector}</td>
                <td>{trade.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Politicians;
