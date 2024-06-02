  import React from "react";
import { PROJECT_COMPONENTS } from "../utils/constants/constants";

const PortfolioProject: React.FC<{ id: string }> = ({ id }) => {
  const ProjectComponent = PROJECT_COMPONENTS[id];
  return (
    <ProjectComponent />
  )
};

export default PortfolioProject;
//   const [data, setData]: [data: any, setData: SetStateAction<any>] = useState(null);
//   const [query, setQuery]: [query: string, setQuery: Dispatch<SetStateAction<string>>] = useState("");
//   const [url, setUrl]: [url: string, setUrl: Dispatch<SetStateAction<string>>] = useState("");
//   const [history, setHistory]: [history: any, setHistory: any] = useState({});
  
//   const fetchData = async (url: string | null, setUrl: Dispatch<SetStateAction<string>>) => {
//     if (url) {
//       const response = await fetch(url);
//       const json = await response?.json();
      
//       if (json) {
//         setData(json);
//         setHistory({ [query]: json, ...history});
//         setUrl("");
//       }
//     }
//   }

//   useMemo(async () => {
//     const isUrlForOldQuery = url.split(`query=${query}`)?.length === 1;
//     if (!data || !isUrlForOldQuery) {
//       fetchData(url, setUrl);
//     }
//   }, [url]);

//   useEffect(() => {
//     console.log("history", history);
//   }, [history]);

//   return (
//     <>
//       <div className="row">
//         <div className="col-12 text-center">
//           <h2 className="my-4">Weather App</h2>
//           <p className="mb-4">Search for a city below.</p>
//         </div>
//         <div className="col-12 mx-auto">
//           <div className="input-group">
//             <span className="input-group-text">City</span>
//             <input
//               className="form-control"
//               aria-label="city"
//               id="city"
//               type="text"
//               value={query}
//               onChange={(e) => {
//                 setQuery(e.target.value);
//               } }
//               onKeyDown={(e) => {
//                 setUrl(e.code === "Enter"
//                   ? `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${query}`
//                   : ""
//                 );
//               } } />
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-12 mx-auto my-5" role="alert" aria-live="polite" aria-atomic={true}>
//           {data?.current && (
//             <WeatherBanner data={data} />
//           )}
//           {data?.success === false && (
//             <div className="alert alert-primary">
//               <p className="m-0 text-center">No data available for <span className="fw-bolder">{query}</span>.</p>
//             </div>
//           )}
//         </div>
//       </div><hr /><h3 className="my-4 text-center">Search History</h3><section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex align-items-center flex-column">
//           {Object.values(history)?.map((item: any, index: number) => item !== data && <WeatherCard data={item} key={`weather-card-${index}`} />).filter(i => !!i)}
//       </section>
//     </>
//   )
// }

// export default PortfolioProject; 