import React, { memo } from 'react';
import "./index.scss";

const index = memo(({children}) => {
    return (
        <div>
            <div className="card-blog">
                {children}
            </div>
        </div>
    );
});

export default index;