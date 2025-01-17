import { useState, useEffect } from "react";
import '../../standards/table.css';
import '../../CV/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { useNavigate } from 'react-router-dom';

const Politicians = () => {
  const [trades, setTrades] = useState([]);
  const [mobile, setMobile] = useState(window.innerWidth < 760);
  const navigate = useNavigate();

  const handleVideoSrcSet = () => {
    setMobile(window.innerWidth < 760);
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

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
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://www.quiverquant.com/congresstrading/politician/Nancy%20Pelosi-P000197",
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const scriptTag = Array.from(doc.getElementsByTagName("script")).find((script) =>
          script.textContent.includes("let tradeData =")
        );

        if (!scriptTag) {
          console.log("Trade data not found.");
          return;
        }

        const scriptContent = scriptTag.textContent;
        const tradeDataMatch = scriptContent.match(/let tradeData = (\[\[.*\]\]);/);
        if (!tradeDataMatch) {
          console.log("No trade data found in script.");
          return;
        }

        const rawTradeData = tradeDataMatch[1];
        const cleanedTradeData = rawTradeData.replace(/NaN/g, "null");

        const parsedTradeData = JSON.parse(cleanedTradeData);

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

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  return (
    <div>
      <nav className="mt-10 mr-10 text-2xl flex justify-end">
        <a 
          className="navLink"
          onClick={() => navigate('/tools')}
        >
          <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px' }} />
        </a>
      </nav>
      <div className="w-full px-4 text-center">
        <h2 className="subHeader flex-center text-3xl my-5 md:my-10">Nancy Pelosi Stock Trades</h2>
        <span className="text-sm md:text-lg">
          Request temporary access to CORS Anywhere's demo server at&nbsp;
          <a href="https://cors-anywhere.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: '#87CEEB' }}>
            CORS Anywhere
          </a> then refresh this page.
          <br />
          Retrieved from:&nbsp;
          <a href="https://www.quiverquant.com/congresstrading/politician/Nancy%20Pelosi-P000197" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: '#87CEEB' }}>
            Quiver Quantitative
          </a>
        </span>    
      </div>

      {mobile ? (
        <div className='flex-center flex-col mt-5'>
          {trades.map((trade, index) => (
            <table key={index} className='mobile-table'>
              <tbody>
                <tr>
                  <td data-label="Ticker"></td>
                  <td>{trade.symbol}</td>
                </tr>
                <tr>
                  <td data-label="Filed Date"> </td>
                  <td>{trade.fileDate}</td>
                </tr>
                <tr>
                  <td data-label="Trade Date"></td>
                  <td>{trade.tradeDate}</td>
                </tr>
                <tr>
                  <td data-label="Transaction Type"></td>
                  <td>{trade.transactionType}</td>
                </tr>
                <tr>
                  <td data-label="Amount"></td>
                  <td>{trade.amount}</td>
                </tr>
                <tr>
                  <td data-label="Profit (%)"></td>
                  <td>{trade.profit}</td>
                </tr>
                <tr>
                  <td data-label="Type"></td>
                  <td>{trade.type}</td>
                </tr>
                <tr>
                  <td data-label="Sector"></td>
                  <td>{trade.sector}</td>
                </tr>
                <tr>
                  <td data-label="Description"></td>
                  <td>{trade.description}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ) : (
        <div className='flex-center'>
          <table className='mt-5 md:mt-10'>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Filed Date</th>
                <th>Trade Date</th>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Profit (%)</th>
                <th>Type</th>
                <th>Sector</th>
                <th>Description</th>
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
      )}
    </div>
  );
};

export default Politicians;
