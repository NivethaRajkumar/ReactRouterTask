import React from 'react';
import CardDisplay from '../Components/CardDisplay';

const CyberSecurity = ({data}) => {
    const cs=data.filter((ele)=>ele.content==='Cyber Security')
    return (
        <>
        <div className='container'>
        <div className='row'>
                {cs.map((element,index)=>{
                    return <CardDisplay element={element} index={index}/>
                 })}
        </div>
        </div>
        </>
    );
};

export default CyberSecurity;