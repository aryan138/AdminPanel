import React from 'react';
import CSVUploadView from './FileUpload';
import OrderTable from '../PrivateOrders/OrderTable';

function Upload() {
    return ( 
        <><CSVUploadView /><OrderTable /></>
     );
}

export default Upload;