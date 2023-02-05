import {
  List,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { useState } from "react";

const useListHook = (titles: string[]) => {
  const [chosenItem, setChosenItem] = useState("");
  const handleClickItem = (value: string) => {
    setChosenItem(value);
  };
  return [
    <List component="div" disablePadding>
      {titles.map((item, index) => {
        const isCurrent = item === chosenItem;
        return (
          <ListItemButton
            key={index}
            sx={{
              pl: 0,
              color: isCurrent ? "#1985a1" : "none ",
              fontWeight: isCurrent ? 800 : 500,
              "&:hover": {
                color: "#1985a1",
              },
            }}
            onClick={() => handleClickItem(item)}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        );
      })}
    </List>,
    chosenItem,
    setChosenItem
  ];
};

export default useListHook;
