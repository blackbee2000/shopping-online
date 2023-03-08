import Home from 'pages/Home';
import Page404 from "pages/Page404";
import About from "pages/About";
import Auth from "pages/Auth";
import BlogPost from "pages/BlogPost";
import Blog from "pages/Blog";
import CheckOut from "pages/CheckOut";
import ComingSoon from "pages/ComingSoon";
import ContactUs from "pages/ContactUs";
import Faq from "pages/Faq";
import OrderCompleted from "pages/OrderCompleted";
import ShippingAndReturnS from "pages/ShippingAndReturns";
import Shop from "pages/Shop";
import ShoppingCart from "pages/ShoppingCart";
import StoreLocator from "pages/StoreLocator";
import Products from "pages/Products";
import Account from "pages/Account";
import { Switch, Route } from 'react-router-dom';
  
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/blog-post" component={BlogPost}/>
        <Route path="/checkout" component={CheckOut}/>
        <Route path="/contact-us" component={ContactUs}/>
        <Route path="/faq" component={Faq}/>
        <Route path="/order-completed" component={OrderCompleted}/>
        <Route path="/shipping-returns" component={ShippingAndReturnS}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/shopping-cart" component={ShoppingCart}/>
        <Route path="/store-locator" component={StoreLocator}/>
        <Route path="/product" component={Products}/>
        <Route path="/account" component={Account}/>
        <Route path="/auth" component={Auth}/>

        <Route path="/coming-soon" component={ComingSoon}/>

        <Route component={Page404}/>
      </Switch>
    </>
  );
}

export default App;
