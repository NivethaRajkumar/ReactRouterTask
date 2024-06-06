import React from 'react';
import CardDisplay from '../Components/CardDisplay';

const All = ({data}) => {
    return (
            <div className="container"> 
                <div className="row">
                    {data.map((element,index)=>{
                        return   <CardDisplay element={element} index={index} />
                    })}
                </div>
            </div>
    );
};

export default All;