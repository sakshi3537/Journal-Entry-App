import React from 'react'
import { useSelector } from 'react-redux';
import '../../App.css'
import loader from './gif/loader.gif'

const PageLoader = () => {
    const isLoading  = useSelector((state) => state.loadingReducer);
    if (!isLoading) return null;
    return(
        <div className="loader-container">
        <div className="loader">
        <img src={loader}></img>
        </div>
      </div>
    );
}

export default PageLoader;