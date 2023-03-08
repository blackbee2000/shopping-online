import { Link } from "react-router-dom";
import Breadcrumb, { BreadcrumbItem } from "../../../components/Breadcrumb";
import Layout from "../../../components/Layout";
import AccountTags from "../components/AccountTags";

export default function AccountPayment(){
    return(
        <Layout>
            <Breadcrumb>
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                <BreadcrumbItem to="/account/payment">My Account</BreadcrumbItem>
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
                            <div className="row">
                            <div className="col-12 col-lg-6">
                                {/* Card */}
                                <div className="card card-lg bg-light mb-8">
                                <div className="card-body">
                                    {/* Heading */}
                                    <h6 className="mb-6">
                                    Debit / Credit Card
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-5">
                                    <strong>Card Number:</strong> <br />
                                    <span className="text-muted">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
                                    </p>
                                    {/* Text */}
                                    <p className="mb-5">
                                    <strong>Expiry Date:</strong> <br />
                                    <span className="text-muted">Feb 2022</span>
                                    </p>
                                    {/* Text */}
                                    <p className="mb-0">
                                    <strong>Name on Card:</strong> <br />
                                    <span className="text-muted">Daniel Robinson</span>
                                    </p>
                                    {/* Action */}
                                    <div className="card-action card-action-right">
                                    {/* Button */}
                                    <Link className="btn btn-xs btn-circle btn-white-primary" to="/account/payment/edit">
                                        <i className="fe fe-edit-2" />
                                    </Link>
                                    {/* Button */}
                                    <button className="btn btn-xs btn-circle btn-white-primary">
                                        <i className="fe fe-x" />
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <Link className="btn btn-block btn-lg btn-outline-border" to="/account/payment/edit">
                                Add Payment Method <i className="fe fe-plus" />
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
        </Layout>
    )
}