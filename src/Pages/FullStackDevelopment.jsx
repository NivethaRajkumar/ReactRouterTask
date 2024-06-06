import React from 'react';
import CardDisplay from '../Components/CardDisplay';

const FullStackDevelopment = ({data}) => {
    const fsd=data.filter((ele)=>ele.content==="Full Stack Development")
    return (
        <>
        <div className='container'>
            <div className='row'>
                 {fsd.map((element,index)=>{
                    return <CardDisplay element={element} index={index}/>
                 })}
            </div>
            
        </div>
        </>
    );
};

export default FullStackDevelopment;