import React from "react";
function Contador (props){
    return( 
        <div className="d-flex container py-5 justify-content-center ">
            <div className="row py-5 my-5">
                <div className="col-lg-2 bg-secondary py-1 text-center border rounded">
                <i className="far fa-clock fa-lg"></i>
                </div>
                <div className="col-lg-2 bg-secondary py-1 text-center border rounded">
                <h1>{props.d5}</h1>
                </div>
                <div className="col-lg-2 bg-secondary py-1 text-center border rounded">
                <h1>{props.d4}</h1>
                </div>
                <div className="col-lg-2 bg-secondary py-1 text-center border rounded">
                <h1>{props.d3}</h1>
                </div>
                <div className="col-lg-2 bg-secondary py-1 text-center border rounded">
                <h1>{props.d2}</h1>
                </div>
                <div className="col-lg-2 bg-secondary py-1 text-center border rounded">
                <h1>{props.d1}</h1>
                </div>
                
                

            </div>

        </div>
    );
}
export default Contador;