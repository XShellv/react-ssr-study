import React from "react";
// import { StaticRouterProps } from "react-router-dom";

interface IProps {
    // staticContext?: StaticRouterProps['context']
}

const NotFound: React.FC<IProps> = (props) => {
    // props.staticContext && (props.staticContext.statusCode = 404);
    return (
        <div>
            <h1>404 NOT FOUND</h1>
        </div>
    );
}

export default NotFound
