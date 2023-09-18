import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { useState } from "react";
import { eco, shoe1 } from "../../assets";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SearchBar from "../SearchBar";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { MdOutlineSegment } from "react-icons/md";

const Ecommerce = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openfilter, setopenfilter] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const subCategories = [
    { name: "Totes", href: "#" },
    { name: "Backpacks", href: "#" },
    { name: "Travel Bags", href: "#" },
    { name: "Hip Bags", href: "#" },
    { name: "Laptop Sleeves", href: "#" },
  ];

  const data = [
    {
      id: 1,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 2,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 3,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 4,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 5,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 6,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 7,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 8,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 9,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 10,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 11,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
    {
      id: 12,
      image: shoe1,
      name: "Skechers Men's Go Max-Athleti Air Mesh Slip on Walking Shoe Sneaker",
      reviews: "4.5 out of 5 stars (5-star: 71%)",
      desc: "300+ bought in past month",
    },
  ];

  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "travel", label: "Travel", checked: true },
        { value: "organization", label: "Organization", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "2l", label: "2L", checked: false },
        { value: "6l", label: "6L", checked: false },
        { value: "12l", label: "12L", checked: false },
        { value: "18l", label: "18L", checked: false },
        { value: "20l", label: "20L", checked: false },
        { value: "40l", label: "40L", checked: true },
      ],
    },
  ];

  console.log("Filter", openfilter);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const slides = [
    {
      url: eco,
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <Section className="min-h-screen bg-white">
      <div className="flex-1 mr-2">
        <div className="flex items-center justify-between">
          {/* Full page dropdown start*/}
          <div className="inline-block group">
            <button
              className="flex items-center justify-between gap-2 text-black bg-[#E1E1E1] p-2 rounded-md "
              onClick={() => setShowFilter(true)}
            >
              <MdOutlineSegment /> All Filters
            </button>
            {showFilter && (
              <div className="absolute z-10 space-y-2 bg-gray-200 border border-gray-300 w-[200px] min-h-screen top-0 left-0">
                <button onClick={() => setShowFilter(false)}>X</button>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-gray-300 transition"
                >
                  Link 1{" "}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-gray-300 transition"
                >
                  Link 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-gray-300 transition"
                >
                  Link 3
                </a>
              </div>
            )}
          </div>

          {/* Full page dropdown end*/}

          {/* <button className="flex items-center justify-between gap-2 text-black bg-[#E1E1E1] p-2 rounded-md"><MdOutlineSegment /> All Filters</button> */}
          <div className="flex items-center justify-between">
            <SearchBar />
          </div>
          {/* <div className="relative inline-block group">
           <button className="bg-green-500 text-white px-4 py-2 text-base rounded-none border-none group-hover:bg-green-600 transition">
            Dropdown
          </button> 
          <button className="flex items-center justify-between gap-2 text-black bg-[#E1E1E1] p-2 rounded-md">Sort by <HiOutlineSwitchVertical/></button>

          <div className="hidden absolute z-10 mt-2 space-y-2 bg-gray-200 border border-gray-300 rounded-lg min-w-min group-hover:block">
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-300 transition">Link 1</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-300 transition">Link 2</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-300 transition">Link 3</a>
          </div>
        </div> */}

          <button className="flex items-center justify-between gap-2 text-black bg-[#E1E1E1] p-2 rounded-md">
            Sort by <HiOutlineSwitchVertical />
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="flex flex-wrap ">
          {data.map((item, index) => (
            <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2 " key={index}>
              <div className="bg-white rounded-lg drop-shadow-md p-3">
                <img
                  className="rounded-lg w-full h-auto"
                  src={item.image}
                  alt={item.name}
                />
                <div className="mt-4">
                  <h5 className="text-black font-semibold text-base font-semibold">
                    {item.name}
                  </h5>
                  <h4 className="text-black font-semibold">
                    {" "}
                    <b>CHC 65.00</b>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Ecommerce;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  background-color: #d0d0d0;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
