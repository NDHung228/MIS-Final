import React from 'react'

function Coupon({name, value, expired, bgColor}) {
    return (
        <div className='coupon'>
            <div class="container">
                <div class={`card ${bgColor}`}>
                    <div class="main">
                        <div class="co-img w-36 flex flex-col justify-center items-center">
                            <h1 className='text-3xl font-bold text-secondary-color w-fit'>Shoes</h1>
                            <h1 className='text-3xl font-bold text-secondary-color w-fit'>Store</h1>
                        </div>
                        <div class="vertical"></div>
                        <div class="content">
                            <h2>{name}</h2>
                            <h1>{value}% <span>Coupon</span></h1>
                            <p>Valid till {expired}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon