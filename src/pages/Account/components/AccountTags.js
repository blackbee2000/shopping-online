import { NavLink } from "react-router-dom";

export default function AccountTags(){
    return(
        <div className="col-12 col-md-3">
            <nav className="mb-10 mb-md-0">
            <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <NavLink to="/account/orders" className="list-group-item list-group-item-action dropright-toggle">
                Orders
                </NavLink>
                <NavLink to="/account/wishlist" className="list-group-item list-group-item-action dropright-toggle ">
                Widhlist
                </NavLink>
                <NavLink exact to="/account" className="list-group-item list-group-item-action dropright-toggle">
                Personal Info
                </NavLink>
                <NavLink to="/account/address" className="list-group-item list-group-item-action dropright-toggle">
                Addresses
                </NavLink>
                <NavLink to="/account/payment" className="list-group-item list-group-item-action dropright-toggle">
                Payment Methods
                </NavLink>
                <a className="list-group-item list-group-item-action dropright-toggle" href="#">
                Logout
                </a>
            </div>
            </nav>
        </div>
    )
}