import Breadcrumb, { BreadcrumbItem } from "../../../components/Breadcrumb";
import Layout from "../../../components/Layout";
import { useForm } from "../../../cores/useForm";
import AccountTags from "../components/AccountTags";

export default function AccountPersonalInfo(){

    let {register, form, handleSubmit, error} = useForm();

    const submit = (form) => {
        console.log('form', form);
    }

    return(
        <Layout>
            <Breadcrumb>
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                <BreadcrumbItem to="/account">My Account</BreadcrumbItem>
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
                            {/* Form */}
                            <form onSubmit={handleSubmit(submit)}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="accountFirstName">
                                    First Name *
                                    </label>
                                    <input {...register('firstName', {required: true})} className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="First Name *" />
                                    { error.firstName && <p className="error-text">{error.firstName}</p> }
                                </div>
                                </div>
                                <div className="col-12 col-md-6">
                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="accountLastName">
                                    Last Name *
                                    </label>
                                    <input {...register('lastName', {required: true})} className="form-control form-control-sm" id="accountLastName" type="text" placeholder="Last Name *" />
                                    { error.lastName && <p className="error-text">{error.lastName}</p> }
                                </div>
                                </div>
                                <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="accountEmail">
                                    Email Address *
                                    </label>
                                    <input {...register('email', {patern: 'email'})} className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" />
                                    { error.email && <p className="error-text">{error.email}</p> }
                                </div>
                                </div>
                                <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label htmlFor="accountPassword">
                                    Current Password *
                                    </label>
                                    <input {...register('password', {min: 6, max: 32})} className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" />
                                    { error.password && <p className="error-text">{error.password}</p> }
                                </div>
                                </div>
                                <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label htmlFor="AccountNewPassword">
                                    New Password *
                                    </label>
                                    <input {...register('password', {min: 6, max: 32})} className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" />
                                    { error.password && <p className="error-text">{error.password}</p> }
                                </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                {/* Birthday */}
                                <div className="form-group">
                                    {/* Label */}
                                    <label>Date of Birth</label>
                                    {/* Inputs */}
                                    <div className="form-row">
                                    <div className="col-auto">
                                        {/* Date */}
                                        <label className="sr-only" htmlFor="accountDate">
                                        Date
                                        </label>
                                        <select className="custom-select custom-select-sm" id="accountDate">
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected>12</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        {/* Date */}
                                        <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                        </label>
                                        <select className="custom-select custom-select-sm" id="accountMonth">
                                        <option>January</option>
                                        <option selected>February</option>
                                        <option>March</option>
                                        </select>
                                    </div>
                                    <div className="col-auto">
                                        {/* Date */}
                                        <label className="sr-only" htmlFor="accountYear">
                                        Year
                                        </label>
                                        <select className="custom-select custom-select-sm" id="accountYear">
                                        <option>1990</option>
                                        <option selected>1991</option>
                                        <option>1992</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                {/* Gender */}
                                <div className="form-group mb-8">
                                    <label>Gender</label>
                                    <div className="btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-sm btn-outline-border active">
                                        <input type="radio" name="gender" defaultChecked /> Male
                                    </label>
                                    <label className="btn btn-sm btn-outline-border">
                                        <input type="radio" name="gender" /> Female
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-dark" type="submit">Save Changes</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>        
        </Layout>
    )
}