import shoes0 from "../images/running_shoes0.png";
import shoes1 from "../images/running_shoes1.png";
import shoes2 from "../images/running_shoes2.png";
import shoes3 from "../images/running_shoes3.png";
import shoes4 from "../images/running_shoes4.png";
import shoes5 from "../images/running_shoes5.png";
import shoes6 from "../images/running_shoes6.png";
import shoes7 from "../images/running_shoes7.png";

import blog3 from "../images/blog3.jpg";
import blog4 from "../images/blog4.jpg";

interface Product {
  id?: number;
  name: string;
  brandName?: string;
  category?: string;
  images: string;
  price: number;
}

const createBlog = (picture: string, title: string, timeStamp: number) => {
  return {
    picture,
    title,
    timeStamp,
  };
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    brandName: "Brand A",
    category: "Category 1",
    images: shoes0,
    price: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    brandName: "Brand B",
    category: "Category 2",
    images: shoes1,
    price: 9.99,
  },
  {
    id: 3,
    name: "Product 3",
    brandName: "Brand C",
    category: "Category 1",
    images: shoes2,
    price: 12.99,
  },
  {
    id: 4,
    name: "Product 4",
    brandName: "Brand D",
    category: "Category 3",
    images: shoes3,
    price: 15.99,
  },
  {
    id: 5,
    name: "Product 5",
    brandName: "Brand E",
    category: "Category 1",
    images: shoes4,
    price: 22.99,
  },
  {
    id: 6,
    name: "Product 6",
    brandName: "Brand F",
    category: "Category 2",
    images: shoes5,
    price: 19.99,
  },
  {
    id: 7,
    name: "Product 7",
    brandName: "Brand G",
    category: "Category 3",
    images: shoes6,
    price: 27.99,
  },
  {
    id: 8,
    name: "Product 8",
    brandName: "Brand H",
    category: "Category 1",
    images: shoes7,
    price: 32.99,
  },
];

export const mockBlogs =   [createBlog(blog3, 'Workout From Home Routines: Tips and Best Practices',Date.parse("07.08.2020")), createBlog(blog4, 'Train The Way You Want: Energise Your Routine with our Growing Library of Workout', Date.parse("07.08.2020"))]
