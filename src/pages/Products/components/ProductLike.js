import { Link } from "react-router-dom";

export function ProductLike(){
    return(
        <section className="pt-11">
            <div className="container">
            <div className="row">
                <div className="col-12">
                {/* Heading */}
                <h4 className="mb-10 text-center">You might also like</h4>
                {/* Items */}
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    {/* Card */}
                    <div className="card mb-7">
                        {/* Badge */}
                        <div className="badge badge-white card-badge card-badge-left text-uppercase">
                        New
                        </div>
                        {/* Image */}
                        <div className="card-img">
                        {/* Image */}
                        <Link className="card-img-hover" to="/product">
                            <img className="card-img-top card-img-back" src="/img/products/product-120.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-5.jpg" alt="..." />
                        </Link>
                        {/* Actions */}
                        <div className="card-actions">
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                            </span>
                        </div>
                        </div>
                        {/* Body */}
                        <div className="card-body px-0">
                        {/* Category */}
                        <div className="font-size-xs">
                            <Link className="text-muted" to="/shop">Shoes</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to="/product">
                            Leather mid-heel Sandals
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $129.00
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    {/* Card */}
                    <div className="card mb-7">
                        {/* Image */}
                        <div className="card-img">
                        {/* Image */}
                        <Link className="card-img-hover" to="/product">
                            <img className="card-img-top card-img-back" src="/img/products/product-121.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-6.jpg" alt="..." />
                        </Link>
                        {/* Actions */}
                        <div className="card-actions">
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                            </span>
                        </div>
                        </div>
                        {/* Body */}
                        <div className="card-body px-0">
                        {/* Category */}
                        <div className="font-size-xs">
                            <Link className="text-muted" to="/shop">Dresses</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to="/product">
                            Cotton floral print Dress
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $40.00
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    {/* Card */}
                    <div className="card mb-7">
                        {/* Badge */}
                        <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                        Sale
                        </div>
                        {/* Image */}
                        <div className="card-img">
                        {/* Image */}
                        <Link className="card-img-hover" to="/product">
                            <img className="card-img-top card-img-back" src="/img/products/product-122.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-7.jpg" alt="..." />
                        </Link>
                        {/* Actions */}
                        <div className="card-actions">
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                            </span>
                        </div>
                        </div>
                        {/* Body */}
                        <div className="card-body px-0">
                        {/* Category */}
                        <div className="font-size-xs">
                            <Link className="text-muted" to="/shop">Shoes</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to="/product">
                            Leather Sneakers
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold">
                            <span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
                            <span className="text-primary">$85.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
                    {/* Card */}
                    <div className="card mb-7">
                        {/* Image */}
                        <div className="card-img">
                        {/* Image */}
                        <Link to="/product">
                            <img className="card-img-top card-img-front" src="/img/products/product-8.jpg" alt="..." />
                        </Link>
                        {/* Actions */}
                        <div className="card-actions">
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                            </span>
                            <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                            </span>
                        </div>
                        </div>
                        {/* Body */}
                        <div className="card-body px-0">
                        {/* Category */}
                        <div className="font-size-xs">
                            <Link className="text-muted" to="/shop">Tops</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to="/product">
                            Cropped cotton Top
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $29.00
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}