import { Link } from "react-router-dom";
import Breadcrumb, { BreadcrumbItem } from "../../../components/Breadcrumb";
import Layout from "../../../components/Layout";
import AccountTags from "../components/AccountTags";

export default function AccountWishlist(){
    return(
        <Layout>
            <Breadcrumb>
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                <BreadcrumbItem to="/account/wishlist">My Account</BreadcrumbItem>
            </Breadcrumb>
            <section class="pt-7 pb-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h3 class="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div class="row">
                        <AccountTags />
                        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                            {/* Products */}
                            <div className="row">
                            {/* Item */}
                            <div className="col-6 col-md-4">
                                <div className="card mb-7">
                                {/* Image */}
                                <div className="card-img">
                                    {/* Action */}
                                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                                    <i className="fe fe-x" />
                                    </button>
                                    {/* Button */}
                                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                                    <i className="fe fe-eye mr-2 mb-1" /> Quick View
                                    </button>
                                    {/* Image */}
                                    <img className="card-img-top" src="/img/products/product-6.jpg" alt="..." />
                                </div>
                                {/* Body */}
                                <div className="card-body font-weight-bold text-center">
                                    <Link className="text-body" to="/product">Cotton floral print Dress</Link> <br />
                                    <span className="text-muted">$40.00</span>
                                </div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-6 col-md-4">
                                <div className="card mb-7">
                                {/* Image */}
                                <div className="card-img">
                                    {/* Action */}
                                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                                    <i className="fe fe-x" />
                                    </button>
                                    {/* Badge */}
                                    <span className="badge badge-dark card-badge card-badge-left text-uppercase">
                                    Sale
                                    </span>
                                    {/* Button */}
                                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                                    <i className="fe fe-eye mr-2 mb-1" /> Quick View
                                    </button>
                                    {/* Image */}
                                    <img className="card-img-top" src="/img/products/product-10.jpg" alt="..." />
                                </div>
                                {/* Body */}
                                <div className="card-body font-weight-bold text-center">
                                    <Link className="text-body" to="/product">Suede cross body Bag</Link> <br />
                                    <span>
                                    <span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
                                    <span className="text-primary">$49.00</span>
                                    </span>
                                </div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-6 col-md-4">
                                <div className="card mb-7">
                                {/* Image */}
                                <div className="card-img">
                                    {/* Action */}
                                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                                    <i className="fe fe-x" />
                                    </button>
                                    {/* Button */}
                                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                                    <i className="fe fe-eye mr-2 mb-1" /> Quick View
                                    </button>
                                    {/* Image */}
                                    <img className="card-img-top" src="/img/products/product-32.jpg" alt="..." />
                                </div>
                                {/* Body */}
                                <div className="card-body font-weight-bold text-center">
                                    <Link className="text-reset" to="/product">Cotton leaf print Shirt</Link>
                                    <span className="text-muted">$65.00</span>
                                </div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-6 col-md-4">
                                <div className="card mb-7">
                                {/* Image */}
                                <div className="card-img">
                                    {/* Action */}
                                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                                    <i className="fe fe-x" />
                                    </button>
                                    {/* Button */}
                                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                                    <i className="fe fe-eye mr-2 mb-1" /> Quick View
                                    </button>
                                    {/* Image */}
                                    <img className="card-img-top" src="/img/products/product-7.jpg" alt="..." />
                                </div>
                                {/* Body */}
                                <div className="card-body font-weight-bold text-center">
                                    <Link className="text-body" to="/product">Leather Sneakers</Link> <br />
                                    <a className="text-primary" href="#">Select Options</a>
                                </div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-6 col-md-4">
                                <div className="card mb-7">
                                {/* Image */}
                                <div className="card-img">
                                    {/* Action */}
                                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                                    <i className="fe fe-x" />
                                    </button>
                                    {/* Button */}
                                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                                    <i className="fe fe-eye mr-2 mb-1" /> Quick View
                                    </button>
                                    {/* Image */}
                                    <img className="card-img-top" src="/img/products/product-11.jpg" alt="..." />
                                </div>
                                {/* Body */}
                                <div className="card-body font-weight-bold text-center">
                                    <Link className="text-body" to="/product">Another fine dress</Link> <br />
                                    <span className="text-muted">$99.00</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Pagination */}
                            <nav className="d-flex justify-content-center justify-content-md-end">
                            <ul className="pagination pagination-sm text-gray-400">
                                <li className="page-item">
                                <a className="page-link page-link-arrow" href="#">
                                    <i className="fa fa-caret-left" />
                                </a>
                                </li>
                                <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                <a className="page-link" href="#">4</a>
                                </li>
                                <li className="page-item">
                                <a className="page-link" href="#">5</a>
                                </li>
                                <li className="page-item">
                                <a className="page-link" href="#">6</a>
                                </li>
                                <li className="page-item">
                                <a className="page-link page-link-arrow" href="#">
                                    <i className="fa fa-caret-right" />
                                </a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>        
        </Layout>
    )
}