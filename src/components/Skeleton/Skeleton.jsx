'use client'
import React from 'react'
import './Skeleton.css'

export default function Skeleton() {
    const skeleton = 8;
    return (
        <div className="row">
            {
                Array.from({ length: skeleton }).map((_, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-12 col-sm-6" style={{ marginBottom: "30px" }}>
                        <div className="skeleton-wraper mb-30">
                            <div className="skeleton-img-wrap">
                                <div className="skeleton-img">
                                    {/* <img className="default-img" src="/media/product/1-2.jpg" alt="" /> */}
                                </div>
                            </div>
                            <div className="skeleton-content-wrap">
                                <div className="skeleton-category">
                                    <span></span>
                                </div>
                                <h2>
                                    <span></span>
                                </h2>
                                <div className='by'>
                                    <span></span>
                                </div>
                                <div className="skeleton-bottom">
                                    <div className="skeleton-price">
                                        <span style={{ marginBottom: "3px" }}></span>
                                        <span></span>
                                    </div>
                                    <div className="skeleton-add-cart">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
