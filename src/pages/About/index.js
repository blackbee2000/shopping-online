import Breadcrumb, { BreadcrumbItem } from "../../components/Breadcrumb";
import Layout from "../../components/Layout";
import { Features, Reviews } from "../Home/components";
import { AboutComponent, Images, OurStoryOne, OurStoryTwo, Slogan } from "./components";

export default function About(){
    return (
        <Layout>
            <Breadcrumb>
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                <BreadcrumbItem to="/about">About</BreadcrumbItem>
            </Breadcrumb>
            {/* WELCOME */}
            <section>
            <div className="container">
                <div className="row justify-content-center py-14 bg-cover" style={{backgroundImage: 'url(/img/covers/cover-21.jpg)'}}>
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    {/* Heading */}
                    <h1 className="mb-0 text-center text-white">
                    We believe we can all make a stylish.
                    </h1>
                </div>
                </div>
            </div>
            </section>
            <OurStoryOne />
            <AboutComponent />
            <OurStoryTwo />
            <Slogan />
            <Images />
            <Reviews />
            <section className="pt-12">
                <div className="container bg-h-100" style={{backgroundImage: 'url(/img/covers/cover-15.jpg)'}}>
                <div className="row">
                    <div className="col-12 py-13 text-center">
                    {/* Button */}
                    <a href="#!" className="btn btn-white px-8">@shopper</a>
                    </div>
                </div>
                </div>
            </section>
            <Features />
        </Layout>
    )
}