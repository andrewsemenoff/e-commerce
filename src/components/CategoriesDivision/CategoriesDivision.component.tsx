import CustomButton, {
  ButtonTypes,
} from "../CustomButton/CustomButton.component";
import { CategoriesWrapper, Category, CategoryTitle } from "./CategoriesDivision.style";

const categoriesArr = [
  {
    name: "Men",
    photo:
      "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Women",
    photo:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Sale",
    photo:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Kids",
    photo:
      "https://plus.unsplash.com/premium_photo-1661758301591-2e95773c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmclMjBraWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Collections",
    photo:
      "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nJTIwY29sbGVjdGlvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];
const titles = categoriesArr.map((item) => item.name);

const CategoriesDivision = () => {
  return (
    <CategoriesWrapper titles={titles}>
      {categoriesArr.map(({ name, photo }, index) => {
        const isBig = index===0;
        return (
          <Category title={name} src={photo} key={index}>
            <CategoryTitle isBigTitle={isBig}>{name}</CategoryTitle>
            <CustomButton buttonType={ButtonTypes.BLUE}>Explore</CustomButton>
          </Category>
        );
      })}
    </CategoriesWrapper>
  );
};

export default CategoriesDivision;
