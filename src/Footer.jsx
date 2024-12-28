import React from "react";
import ReactDom from "react-dom"

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer(){
    return <div className="footer">
       <p>Copyright {year}</p>
    </div>
}

export default Footer