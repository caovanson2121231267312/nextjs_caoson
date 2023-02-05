import React from 'react';

const index = ({ children, ...props }) => {
    return (
        <div className="col-md-12">
            <div className="card text-white bg-dark mt-3 overflow-hidden">
                <div className="card-header boder-0 card-header-code">
                    <h6 className='m-p-0'>
                        <i className="c-setting fas fa-cog"></i>
                        <span className='c-text'> {props.type} </span>
                        <i className="c-setting float-end fas fa-chevron-down"></i>
                    </h6>
                </div>
                <div className="card-body p-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default index;