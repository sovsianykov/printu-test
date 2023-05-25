import React, { FunctionComponent, memo, useMemo } from "react";
import { Item } from "@pages/Home/containers/Field/FigurItem/models";
import { Box } from "@mui/material";
import { positionCalc } from "./utils";
import {
  Dot,
  Figure,
  Rectangle,
} from "@pages/Home/containers/Field/FigurItem/FigurItem.styles";

export   interface FigureItemProps {
  item: Item;
}

const FigureItem: FunctionComponent<FigureItemProps> = ({ item }) => {
  const { w, h, b, r } = useMemo(() => positionCalc(item), [item]);

  return (
    <Rectangle item={item} width={w} height={h}>
      <Box
        sx={{
          border: "1px solid red",
          position: "absolute",
          width: w,
          height: h,
          bottom: b,
          right: r,
        }}
      />
      <Figure item={item}>
        <Dot item={item}>
          <span>{item.rotation}&deg;</span>
        </Dot>
      </Figure>
    </Rectangle>
  );
};

export default memo(FigureItem);
