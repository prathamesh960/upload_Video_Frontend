// import React from "react";
// import { BACKEND_URI } from "../config/constant";

// const UploadList = ({medias})=>{

//     return
//         <div className="row">

//                 <div className="col-md-12">
//                     <table className="table table-bordered">

//                         <thead>
//                             <tr>
//                                 <th width="200">Name</th>
//                                 <th>Videos</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {medias && medias.map(media =>{
//                                 return(
//                                     <tr>
//                                         <td>{media.name}</td>
//                                         <td>{media.vides.map(video =>{
//                                             return (
//                                                 <video
//                                                 preload="auto"
//                                                 width='320'
//                                                 height='240'
//                                                 controls

//                                                 >
//                                                     <source src={`${BACKEND_URI}${video}`}/>; your browser does not support the video tag 
//                                                 </video>
//                                             )
//                                         })}</td>

//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//         </div>
// }

// export default UploadList;


import React from "react";
import { BACKEND_URI } from "../config/constant";

const UploadList = ({ medias }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="200">Name</th>
                            <th>Videos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {medias && medias.map(media => {
                            return (
                                <tr key={media.id}> {/* Make sure to provide a unique key for each iteration */}
                                    <td>{media.name}</td>
                                    <td>
                                        {media.videos.map(video => (
                                            <video
                                                key={video.id} /* Make sure to provide a unique key for each video */
                                                preload="auto"
                                                width='320'
                                                height='240'
                                                controls
                                            >
                                                <source src={`${BACKEND_URI}${video}`} /> {/* Make sure to provide the correct video source */}
                                                Your browser does not support the video tag.
                                            </video>
                                        ))}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UploadList;
