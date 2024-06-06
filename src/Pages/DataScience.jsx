import React from 'react';
import CardDisplay from '../Components/CardDisplay';

const DataScience = ({data}) => {
    const ds=data.filter((ele)=>ele.content==='Data Science')
    return (
        <>
        <div className='container'>
        <div className='row'>
                {ds.map((element,index)=>{
                    return <CardDisplay element={element} index={index}/>
                 })}
        </div>
        </div>
        </>
    );
};

export default DataScience;