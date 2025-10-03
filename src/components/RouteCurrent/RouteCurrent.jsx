import React from "react";
import {IoIosArrowForward} from "react-icons/io";
import {Link} from "react-router-dom";

/**
 * items: [{ label, path, current }]
 */
const RouteCurrent = ({items = null, className = ""}) => {
  const defaults = [
    {label: "Home", path: "/"},
    {label: "Product", path: "/product", current: true},
  ];

  const crumbs = items && items.length ? items : defaults;

  return (
    <div className={`mt-10 container flex items-center space-x-2 ${className}`}>
      {crumbs.map((crumb, idx) => (
        <React.Fragment key={idx}>
          {idx !== 0 && (
            <span className="text-gray-900">
              <IoIosArrowForward />
            </span>
          )}
          {crumb.current ? (
            <span className="text-gray-900 font-medium">{crumb.label}</span>
          ) : (
            <div>
              <Link to={crumb.path} className="text-gray-500 transition-colors">
                {crumb.label}
              </Link>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RouteCurrent;
