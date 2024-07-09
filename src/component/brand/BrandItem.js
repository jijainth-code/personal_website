import React from 'react';

const Data = [
    {
        image: "/images/brand/work1.png"
    },
    {
        image: "/images/brand/work2.png"
    },
    {
        image: "/images/brand/work3.png"
    },
    {
        image: "/images/brand/work4.png"
    },
    {
        image: "/images/brand/work5.png"
    },
    {
        image: "/images/brand/work6.png"
    },
    {
        image: "/images/brand/work7.png"
    },
    
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;