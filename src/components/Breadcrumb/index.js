import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ children }){

    const count = React.Children.count(children);

    return(
        <nav className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                            {
                                React.Children.map(children, (child, index) =>{
                                    return <li className="breadcrumb-item">{child}</li>
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export const BreadcrumbItem = ({children, to}) => {
    return <Link className="text-gray-400" to={to}>{children}</Link>
}