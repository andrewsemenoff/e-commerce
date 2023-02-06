import React, { useState } from "react";
import { GridWrapper, ProductThumpNail } from "./ProductKindsNav.style";

interface ProductKinds {
  kind: string;
  photo: string;
}
interface Props {
  productKinds: ProductKinds[];
  handleProductKindChange: (productKind: string) => void;
}

const ProductKindsNav: React.FC<Props> = ({
  productKinds,
  handleProductKindChange,
}) => {
  const [currentProductKind, setCurrentProductKind] = useState("");
  const handleProductKindClick = (productKind: string) => {
    setCurrentProductKind(productKind);
    handleProductKindChange(productKind);
  };
  return (
    <GridWrapper>
      {productKinds.map(({kind,photo}, index) => {
        const isCurrent = kind===currentProductKind;
        return (
          <ProductThumpNail
            isCurrent={isCurrent}
            src={photo}
            onClick={() => handleProductKindClick(kind)}
            key={index}
          />
        );
      })}
    </GridWrapper>
  );
};

export default ProductKindsNav;
