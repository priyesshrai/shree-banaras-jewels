"use client";
import useFetch from "@/hooks/FetchData";
import React, { useState, useEffect } from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import OverlayLoader from "@/components/Skeleton/OverlayLoader";

export default function Products({ productId }) {
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [productData, setProductData] = useState([]);
    const { data, error, loading } = useFetch(`https://gdsons.co.in/demo/shreebanaras/api/categories/${productId}`);
    const [newloading, setNewLoading] = useState(false)
    const [filteredUri, setFilteredUri] = useState(null)
    const filterData = data?.filter_attributes_with_value;
    const [sort, setSort] = useState("");

    useEffect(() => {
        if (data?.products?.data) {
            setProductData(data.products.data);
        }
    }, [data]);

    // useEffect(() => {
    //     const params = new URLSearchParams(window.location.search);
    //     const filters = {};
    //     params.forEach((value, key) => {
    //         filters[key] = value.split(",");
    //     });
    //     setSelectedFilters(filters);
    //     if (Object.keys(filters).length) {
    //         updateURLWithFilters(filters, false);
    //     }
    // }, []);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const filters = {};
        let sortOption = "";

        params.forEach((value, key) => {
            if (key === "sort") {
                sortOption = value;
            } else {
                filters[key] = value.split(",");
            }
        });

        setSelectedFilters(filters);
        setSort(sortOption);

        if (Object.keys(filters).length || sortOption) {
            updateURLWithFilters(filters, sortOption, false);
        }
    }, []);

    function handleFilterChange(attribute, value, isChecked) {
        setSelectedFilters((prevValue) => {
            const updatedFilters = { ...prevValue };

            if (isChecked) {
                if (!updatedFilters[attribute]) {
                    updatedFilters[attribute] = [];
                }
                if (!updatedFilters[attribute].includes(value)) {
                    updatedFilters[attribute].push(value);
                }
            } else {
                if (updatedFilters[attribute]) {
                    updatedFilters[attribute] = updatedFilters[attribute].filter((val) => val !== value);
                    if (updatedFilters[attribute].length === 0) {
                        delete updatedFilters[attribute];
                    }
                }
            }
            updateURLWithFilters(updatedFilters, sort, true);
            return updatedFilters;
        });
    }

    function updateURLWithFilters(filters, sortOption, shouldPushState = true) {
        const searchParams = new URLSearchParams();

        Object.keys(filters).forEach((key) => {
            const values = filters[key].join(",");
            searchParams.set(key, values);
        });

        if (sortOption) {
            searchParams.set("sort", sortOption);
        }

        const queryString = searchParams.toString();
        const formattedQueryString = queryString.replace(/%2C/g, ',');

        setFilteredUri(`https://gdsons.co.in/demo/shreebanaras/api/categories/${productId}?${formattedQueryString}`);
        if (shouldPushState) {
            window.history.pushState(
                {},
                "",
                `${window.location.pathname}?${formattedQueryString}`
            );
        }
    }

    useEffect(() => {
        if (filteredUri) {
            setNewLoading(true);
            fetch(filteredUri)
                .then(response => response.json())
                .then(data => {
                    setProductData(data.products.data);
                    setNewLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching filtered data:', error);
                    setNewLoading(false);
                });
        }
    }, [filteredUri]);

    function handleSortChange(value) {
        setSort(value);
        updateURLWithFilters(selectedFilters, value, true);
    }


    function handleWiget(event) {
        const targetElement = event.target.closest('.widget-title');
        if (!targetElement) return;
        const widgetBody = targetElement.nextElementSibling;
        if (widgetBody) {
            widgetBody.classList.toggle('active');
        }
    }

    function handleFilterMenu(event) {
        event.preventDefault();
        setShowFilterMenu(true);
    }
    console.log(productData[3]?.product_images[0]);

    return (
        <section className="section-padding" style={{ margin: "50px 0" }}>
            <div className="section-container p-l-r">
                <div className="row">
                    <div className="col-12">
                        <div className="products-topbar clearfix">
                            <div className="products-topbar-left">
                                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                                    <div className="toolbox-left">
                                        <a href="#" className="filter-btn" onClick={handleFilterMenu}>
                                            <i className="hgi-stroke hgi-left-to-right-list-bullet lst" />
                                            <span>Filters</span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            <div className="products-topbar-right">
                                <div className="products-sort dropdown">
                                    <span className="sort-toggle dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        {sort ? `Sorting by: ${sort.replace("-", " ")}` : "Default sorting"}
                                    </span>
                                    <ul className="sort-list dropdown-menu">
                                        <li className={sort === "" ? "active" : ""}>
                                            <a onClick={() => handleSortChange("")}>Default sorting</a>
                                        </li>
                                        <li className={sort === "new-arrivals" ? "active" : ""}>
                                            <a onClick={() => handleSortChange("new-arrivals")}>Sort by latest</a>
                                        </li>
                                        <li className={sort === "price-low-to-high" ? "active" : ""}>
                                            <a onClick={() => handleSortChange("price-low-to-high")}>Sort by price: low to high</a>
                                        </li>
                                        <li className={sort === "price-high-to-low" ? "active" : ""}>
                                            <a onClick={() => handleSortChange("price-high-to-low")}>Sort by price: high to low</a>
                                        </li>
                                        <li className={sort === "a-to-z-order" ? "active" : ""}>
                                            <a onClick={() => handleSortChange("a-to-z-order")}>Sort by a-to-z-order</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    {
                        loading || newloading ? <>
                            <OverlayLoader />
                            <Skeleton />
                        </> :
                            <>
                                {productData?.map((product) => (
                                    <div key={product.title} className="col-lg-3 col-md-4 col-12 col-sm-6" style={{ marginBottom: "30px" }}>
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom" style={{ backgroundColor: "#f4f4f4" }}>
                                                    <a href={`${productId}/${product.slug}`}>
                                                        <img className="default-img"
                                                            src={`${product?.product_images[0]?.full_image_url || '/media/logo.png'}`}
                                                            alt={product.title} />
                                                        <img className="hover-img"
                                                            src={`${product?.product_images[1]?.full_image_url || '/media/logo.png'}`}
                                                            alt={product.title} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href={`${productId}`}>{product.category["title"]}</a>
                                                </div>
                                                <h2 style={{ marginTop: "5px" }}>
                                                    <a href={`${productId}/${product.slug}`}>{product.title}</a>
                                                </h2>
                                                <div>
                                                    <span className="font-small text-muted">
                                                        By - <a href="/">Shree Banaras Jewels</a>
                                                    </span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>Rs. 2300</span>
                                                        <span className="old-price">Rs. 2500</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href={`${productId}/${product.slug}`}>
                                                            <i className="fi-rs-shopping-cart mr-5"></i>View
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                    }

                </div>

                <nav className="pagination">
                    <ul className="page-numbers">
                        <li><a className="prev page-numbers" href="#">Previous</a></li>
                        <li><span aria-current="page" className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href="#">2</a></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="next page-numbers" href="#">Next</a></li>
                    </ul>
                </nav>

                <aside className={`${showFilterMenu ? "active" : ""} sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper`}>
                    <div className={`${showFilterMenu ? "active" : ""} sidebar-overlay`} onClick={() => setShowFilterMenu(false)}></div>
                    <div className="sidebar-wraper">
                        <div className="sidebar-close-wraper">
                            <div className="sidebar-close" onClick={() => setShowFilterMenu(false)}>
                                <i className="hgi-stroke hgi-multiplication-sign" />
                            </div>
                        </div>

                        {filterData?.map((filterValue, index) => (
                            <div className="widget widget-collapsible" key={index}>
                                <h3 className="widget-title" onClick={handleWiget}>
                                    <span>{filterValue.title}</span>
                                    <span className="toggle-btn"></span>
                                </h3>
                                <ul className="widget-body">
                                    {filterValue.attributes_values.map((value) => (
                                        <li key={value.id}>
                                            <input
                                                type="checkbox"
                                                id={`filter-${value.id}`}
                                                checked={selectedFilters[filterValue.slug]?.includes(value.slug)}
                                                onChange={(e) => handleFilterChange(filterValue.slug, value.slug, e.target.checked)}
                                            />
                                            <label htmlFor={`filter-${value.id}`}>{value.name}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}