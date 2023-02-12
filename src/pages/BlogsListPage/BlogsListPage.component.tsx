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
} from "./BlogsListPage.style";

const BlogsListPage = () => {
  return (
    <BlogsGrid>
      <TopDiv>
        <FirstBlog>
          <BigTitle>{mockBlogs[0].title.toUpperCase()}</BigTitle>
          <CustomButton buttonType={ButtonTypes.BLACK}>Read more</CustomButton>
          <PublishDate>
            <ClockIcon />
            {format(new Date(mockBlogs[0].timeStamp), "MM.dd.yyyy")}
          </PublishDate>
        </FirstBlog>
        {mockBlogs.slice(0, 4).map(({ title, timeStamp }, index) => (
          <BlogCard blogData={{ title, timeStamp }} key={index} />
        ))}
      </TopDiv>
      {mockBlogs.map((blogData, index) => (
        <BlogCard blogData={blogData} key={index} />
      ))}
    </BlogsGrid>
  );
};

export default BlogsListPage;
