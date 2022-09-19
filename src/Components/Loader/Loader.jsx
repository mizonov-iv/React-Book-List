import React from 'react';
import loader from '../../img/loader.gif';

const Loader = () => {
    return (
        <React.Fragment>
            <div>
                <img src={loader} alt="" className='d-block m-auto w-25'/>
            </div>
        </React.Fragment>
        
    );
}

export default Loader;
