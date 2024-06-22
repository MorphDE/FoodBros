import "./Loadingscreen.css";
import { useContext, useEffect } from "react";
import { LoadingContext } from './../../Context/Context';

const Loadingscreen = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 4500);
    }, []);
  
    return (
      <section className="loading-bg">
        <div className="load">
        <div className="hamburger">
            <div className="top-bun"></div>
            <div className="pickle"></div>
            <div className="pickle"></div>
            <div className="tomato"><div></div></div>
            <div className="tomato"><div></div></div>
            <div className="cheese"></div>
            <div className="cheese"></div>
            <div className="beef"></div>
            <div className="bottom-bun"></div>
        </div>
        <h1>FOOD BRO'S</h1>
        </div>
      </section>
    );
  };
 
export default Loadingscreen;