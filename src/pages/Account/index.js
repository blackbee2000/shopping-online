import AccountPersonalInfo from "./components/AccountPersonalInfo";
import { Switch, Route } from 'react-router-dom';
import AccountOrders from "./components/AccountOrders";
import AccountAddress from "./components/AccountAddress";
import AccountPayment from "./components/AccountPayment";
import AccountWishlist from "./components/AccountWishlist";
import AccountOrder from "./components/AccountOrder";
import AccountAddressEdit from "./components/AccountAddressEdit";
import AccountPaymentEdit from "./components/AccountPaymentEdit";

export default function Account(){

    return(
        <Switch>
            <Route exact path="/account" component={AccountPersonalInfo}/>
            <Route path="/account/orders" component={AccountOrders}/>
            <Route path="/account/address" component={AccountAddress}/>
            <Route path="/account/payment" component={AccountPayment}/>
            <Route path="/account/wishlist" component={AccountWishlist}/>

            <Route path="/account/order" component={AccountOrder}/>
            <Route path="/account/address/edit" component={AccountAddressEdit}/>
            <Route path="/account/payment/edit" component={AccountPaymentEdit}/>

        </Switch>
    )
}