import React, { useState } from "react";
import "./Grid.css";

const Grid = ({ arrObj, setValue }) => {
  const [status, setStatus] = useState({});

  const addToCart = (index) => {
    const updatedCounts = {
      ...status,
      [index]: (status[index] || 0) + 1,
    };
    setStatus(updatedCounts);
    setValue((prevCount) => prevCount + 1);
  };

  const removeFromCart = (index) => {
    const updatedCounts = {
      ...status,
      [index]: Math.max((status[index] || 0) - 1),
    };
    setStatus(updatedCounts);
    setValue((prevCount) => prevCount - 1);
  };

  // const isInCart = (index) => status[index] !== 0 && status[index] > 0;

  const isInCart = (index) => status[index] > 0;


  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-1 align-itens-center justify-content-center g-5 py-5 m-2 mb-5">
        {arrObj.map((element, index) => (
          <div
            key={index}
            className="col-12 align-itens-center justify-content-center"
          >
            <div className="card">
              <div className="badge bg-dark text-white position-absolute sale">
                {element.sale}
              </div>
              <img src={element.img} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-2">{element.product}</h5>
                <i className={element.star}></i>
                <i className={element.star}></i>
                <i className={element.star}></i>
                <i className={element.star}></i>
                <i className={element.star}></i>
                {index ? (
                  <p className="card-text mt-2">
                    <span className="text-decoration-line-through">
                      {element.strike}
                    </span>
                    {element.cost}
                  </p>
                ) : (
                  <p className="card-text m-0 mt-2">{element.cost}</p>
                )}
              </div>
              <div className="card-body text-center mt-4">
                {isInCart(index) ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(index)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
