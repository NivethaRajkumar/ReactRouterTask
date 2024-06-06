import React from 'react';
import CardDisplay from '../Components/CardDisplay';

const Career = ({data}) => {
    const career=data.filter((ele)=>ele.content==='Career')
    return (
        <>
        <div className='container'>
        <div className='row'>
                {career.map((element,index)=>{
                    return <CardDisplay element={element} index={index}/>
                 })}
        </div>
        </div>
        </>
    );
};

export default Career;