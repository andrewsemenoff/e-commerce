import React from "react";
import {
  BlogPicture,
  CardBox,
  ClockIcon,
  PublishDate,
  Title,
} from "./BlogCard.style";
import { format } from "date-fns";

interface Props {
  blogData: {
    picture?: string;
    title: string;
    timeStamp: number;
  };
}

const BlogCard: React.FC<Props> = ({ blogData }) => {
  const { picture, title, timeStamp } = blogData;
const formattedDate = format(new Date(timeStamp), 'MM.dd.yyyy');
  return (
    <CardBox>
      {picture&&<BlogPicture src={picture}></BlogPicture>}
      <Title>{title}</Title>
      <PublishDate>
        <ClockIcon />
        {formattedDate}
      </PublishDate>
    </CardBox>
  );
};

export default BlogCard;
