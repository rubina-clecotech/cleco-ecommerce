import stress from "../assets/graphics/SHOP STRESS.png"
import sleep from "../assets/graphics/SHOP SLEEP.png";
import recovery from "../assets/graphics/SHOP RECOVERY.png";
import mood from "../assets/graphics/SHOP MOOD.png";
import health from "../assets/graphics/SKIN HEALTH.png";
import acneCleanser from "../assets/graphics/Acne Cleanser.png";
import makeupRemover from "../assets/graphics/Makeup Remover.png"
import lipBalm from "../assets/graphics/The LIP Balm.png"
import moisturizer from "../assets/graphics/Rich Moisturizer.png"

export const shop = [
    {
      image:stress,
      title:"SHOP STRESS",
      desciption:" Make everyday a healthy skin day with uncomplicated"
    },
    {
      image:sleep,
      title:"SHOP SLEEP",
      desciption:" Make everyday a healthy skin day with uncomplicated"
    },
    {
      image:recovery,
      title:"SHOP RECOVERY",
      desciption:" Make everyday a healthy skin day with uncomplicated"
    },
    {
      image:mood,
      title:"SHOP MOOD",
      desciption:" Make everyday a healthy skin day with uncomplicated"
    },
    {
      image:health,
      title:"SHOP HEALTH",
      desciption:" Make everyday a healthy skin day with uncomplicated"
    },
  ]

  export const Testimonials = [
    {
        id:1,
        userName:"Maureen Herben",
        userDetail:"Product Designer",
        city:"Zalando",
        review:"After attempting to manage my adult acne for over 6 months on my own, I decided to take a chance on Apostrophe. I can now say 8 months into my treatment plan that i have never had more flawless skin in my entire life."

    },
    {
        id:2,
        userName:"Maureen Herben",
        userDetail:"Product Designer",
        city:"Zalando",
        review:"After attempting to manage my adult acne for over 6 months on my own, I decided to take a chance on Apostrophe. I can now say 8 months into my treatment plan that i have never had more flawless skin in my entire life."

    },
    {
        id:3,
        userName:"Maureen Herben",
        userDetail:"Product Designer",
        city:"Zalando",
        review:"After attempting to manage my adult acne for over 6 months on my own, I decided to take a chance on Apostrophe. I can now say 8 months into my treatment plan that i have never had more flawless skin in my entire life."

    },
]

export const products = [
  {
    id:1,
    title:"Acne Cleanser",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:0,
    image:acneCleanser,
    category:"cleanser",
    discount : 10,
    skinType : "combination",
    popularity:90,
    dateAdded: "2020-02-18",
  },
  {
    id:2,
    title:"Makeup Remover",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:1,
    image:makeupRemover,
    category:"cleanser",
    discount : 10,
    skinType : "all",
    popularity:50,
    dateAdded: "2020-02-12",
  },
  {
    id:3,
    title:"The Lip Balm",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"180.00",
    rating:4.5,
    qty:"100gm",
    quantity:1,
    availability:2,
    review:96,
    image:lipBalm,
    category:"lip care",
    discount : 30,
    skinType : "dry",
    popularity:190,
    dateAdded: "2020-03-18",
  },
  {
    id:4,
    title:"Rich Moisturiser",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    qty:"100gm",
    quantity:1,
    availability:2,
    review:96,
    image:moisturizer,
    category:"moisturizer",
    discount : 40,
    skinType : "oily",
    popularity:100,
    dateAdded: "2020-03-12",
  },{
    id:5,
    title:"Makeup Remover",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:2,
    image:makeupRemover,
    category:"cleanser",
    discount : 40,
    skinType : "all",
    popularity:110,
    dateAdded: "2020-04-18",
  },
  {
    id:6,
    title:"The Lip Balm",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:2,
    image:lipBalm,
    category:"lip care",
    discount : 20,
    skinType : "dry",
    popularity:40,
    dateAdded: "2020-04-10",
  },
  {
    id:7,
    title:"Rich Moisturiser",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"14.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:2,
    image:moisturizer,
    category:"moisturizer",
    discount : 50,
    skinType : "oily",
    popularity:80,
    dateAdded: "2020-12-18",
  },
  {
    id:8,
    title:"Acne Cleanser",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:0,
    image:acneCleanser,
    category:"cleanser",
    discount : 35,
    skinType : "combination",
    popularity:70,
    dateAdded: "2020-02-8",
  },
  {
    id:9,
    title:"Makeup Remover",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:1,
    image:makeupRemover,
    category:"cleanser",
    discount : 50,
    skinType : "all",
    popularity:130,
    dateAdded: "2020-10-10",
  },
  {
    id:10,
    title:"The Lip Balm",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"1499.00",
    rating:4.5,
    qty:"100gm",
    quantity:1,
    availability:2,
    review:96,
    image:lipBalm,
    category:"lip care",
    discount : 60,
    skinType : "dry",
    popularity:170,
    dateAdded: "2020-11-12",
  },
  {
    id:11,
    title:"Rich Moisturiser",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"200.00",
    rating:4.5,
    qty:"100gm",
    quantity:1,
    availability:2,
    review:96,
    image:moisturizer,
    category:"moisturizer",
    discount : 60,
    skinType : "oily",
    popularity:210,
    dateAdded: "2020-01-13",
  },{
    id:12,
    title:"Makeup Remover",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:2,
    image:makeupRemover,
    category:"cleanser",
    discount : 7,
    skinType : "all",
    popularity:220,
    dateAdded: "2021-01-8",
  },
  {
    id:13,
    title:"The Lip Balm",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"159.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:2,
    image:lipBalm,
    category:"lip care",
    discount : 70,
    skinType : "dry",
    popularity:102,
    dateAdded: "2020-05-20",
  },
  {
    id:14,
    title:"Rich Moisturiser",
    description:"Shut down persistent pimples while being kind to your skin with Curology’s complete acne-fighting cleanser.",
    mrp:"699.00",
    price:"149.00",
    rating:4.5,
    review:96,
    qty:"100gm",
    quantity:1,
    availability:2,
    image:moisturizer,
    category:"moisturizer",
    discount : 80,
    skinType : "oily",
    popularity:109,
    dateAdded: "2020-05-06",
  },
]

export const filter = [
  {
    id: "sortBy",
    title: "Sort by",
    options: [
      { id: "popularity", title: "Popularity", filterType: "sortBy", filterValue: "popularity" },
      { id: "highPrice", title: "High Price", filterType: "sortBy", filterValue: "highPrice" },
      { id: "lowPrice", title: "Low Price", filterType: "sortBy", filterValue: "lowPrice" },
      { id: "newest", title: "Newest", filterType: "sortBy", filterValue: "newest" },
      { id: "oldest", title: "Oldest", filterType: "sortBy", filterValue: "oldest" },
    ],
  },
  {
    id: "discount",
    title: "Discount",
    options: [
      { id: "discount10", title: "10% or more", val: 10, filterType: "discount", filterValue: 10 },
      { id: "discount30", title: "30% or more", val: 30, filterType: "discount", filterValue: 30 },
      { id: "discount50", title: "50% or more", val: 50, filterType: "discount", filterValue: 50 },
      { id: "discount70", title: "70% or more", val: 70, filterType: "discount", filterValue: 70 },
    ],
  },
  {
    id: "skinType",
    title: "Skin Type",
    options: [
      { id: "all", title: "All skin types", filterType: "skinType", filterValue: "all" },
      { id: "combination", title: "Combination", filterType: "skinType", filterValue: "combination" },
      { id: "dry", title: "Dry", filterType: "skinType", filterValue: "dry" },
      { id: "oily", title: "Oily", filterType: "skinType", filterValue: "oily" },
    ],
  },
  {
    id: "price",
    title: "Price",
    options: [
      { id: "under100", title: "Under $100", filterType: "price", filterValue: { min: 0, max: 100 } },
      { id: "under200", title: "$100-$200",  filterType: "price", filterValue: { min: 100, max: 200 } },
      { id: "under300", title: "$200-$300", filterType: "price", filterValue: { min: 200, max: 300 } },
      { id: "under400", title: "$300-$400",  filterType: "price", filterValue: { min: 300, max: 400 } },
      { id: "above400", title: "$400 or more", filterType: "price", filterValue: { min: 400 } },
    ],
  },
];

