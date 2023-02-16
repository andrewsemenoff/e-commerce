import { format } from "date-fns";
import BlogCard from "../../components/BlogCard/BlogCard.component";
import CustomButton, {
  ButtonTypes,
} from "../../components/CustomButton/CustomButton.component";
import { mockBlogs } from "../../mocks/data";
import {
  BigTitle,
  BlogsGrid,
  ClockIcon,
  FirstBlog,
  PublishDate,
  TopDiv,
  Wrapper,
} from "./BlogsListPage.style";
import { useState } from "react";
import { Pagination } from "@mui/material";

const BlogsListPage = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const blogs = mockBlogs.slice(1, mockBlogs.length);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const displayBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <BlogsGrid>
        <TopDiv>
          <FirstBlog>
            <BigTitle>{mockBlogs[0].title.toUpperCase()}</BigTitle>
            <CustomButton buttonType={ButtonTypes.BLACK}>
              Read more
            </CustomButton>
            <PublishDate>
              <ClockIcon />
              {format(new Date(mockBlogs[0].timeStamp), "MM.dd.yyyy")}
            </PublishDate>
          </FirstBlog>
          {mockBlogs.slice(0, 4).map(({ title, timeStamp }, index) => (
            <BlogCard blogData={{ title, timeStamp }} key={index} />
          ))}
        </TopDiv>
        {displayBlogs.map((blogData, index) => (
          <BlogCard blogData={blogData} key={index} />
        ))}
      </BlogsGrid>
      <Pagination
        count={totalPages}
        page={currentPage}
        color="secondary"
        shape="rounded"
        onChange={handleChangePage}
      />
    </Wrapper>
  );
};

export default BlogsListPage;
