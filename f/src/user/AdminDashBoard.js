import React from 'react';
import Base from '../core/Base';
import { isAutheticated } from '../auth/helper/index';
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg2 text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link tcol">
              Create Categories
            </Link>
          </li>
          {/* <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link tcol">
              Manage Categories
            </Link>
          </li> */}
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link tcol">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link tcol">
              Manage Products
            </Link>
          </li>
          {/* <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link tcol">
              Manage Orders
            </Link>
          </li> */}
          <li className="list-group-item">
            <Link to="/admin/manageuser" className="nav-link tcol">
              customers
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg1 text-white mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg1 text-white mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item">
            <span className="badge badge-danger">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your products here"
      className="container bg1 p-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
