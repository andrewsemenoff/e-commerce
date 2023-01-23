import React from "react";
import { BlogImage, BlogTitle, Column, DateInfo, Wrapper } from "./BlogDivision.style";
import { format } from 'date-fns';

const blogs = [
  {
    title: "Reach Your Fitness Goals with the our Training Club App (NTC)",
    photo: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    timeStamp: 1674304800000,
  },
  {
    title: "Workout From Home Routines: Tips and Best Practices",
    photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    timeStamp: 1674030720000,
  },
  {
    title: "Train The Way You Want: Energise Your Routine with our Growing Library of Workout",
    photo: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    timeStamp: 1673554200000,
  },
];

const BlogDivision = () => {
  return (
    <Wrapper>
      {blogs.map((b, index) => {
        const isFirst = index===0;
        return (
          <Column key={index}>
            {!isFirst&&<BlogImage src={b.photo} />}
            <BlogTitle isFirst={isFirst}>{b.title}</BlogTitle>
            <DateInfo>{format(new Date(b.timeStamp), 'MMMM do, yyyy')}</DateInfo>
          </Column>
        );
      })}
    </Wrapper>
  );
};

export default BlogDivision;
