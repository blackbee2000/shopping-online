import Layout from "../../components/Layout";
import { Filters, Product, Slider, Tags } from "./components";

export default function Shop(){
    return(
        <Layout>
            <div className="py-3 bg-dark bg-pattern @@classList">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    {/* Text */}
                    <div className="text-center text-white">
                        <span className="heading-xxs letter-spacing-xl">
                        ⚡️ Happy Holiday Deals on Everything ⚡️
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <section class="py-11">
                <div class="container">
                    <div class="row">
                        <Filters />
                        <div className="col-12 col-md-8 col-lg-9">
                            <Slider />
                            <Tags />
                            <Product />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}