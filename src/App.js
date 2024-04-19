import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import UploadForm from "./Component/UploadForm";
import UploadList from "./Component/UploadList";
import { BACKEND_URI } from './config/constant';

const App = () => {
    const [medias, setMedias] = useState([]);

    useEffect(() => {
        getAllMedias();
    }, []);

    const getAllMedias = () => {
        axios.get(`${BACKEND_URI}/api/vl/media/all`)
            .then((result) => {
                setMedias(result.data);
            })
            .catch(error => {
                setMedias([]);
                console.log(error);
                alert('Error happened!')
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <UploadForm getAllMedias={getAllMedias} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <UploadList medias={medias} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
