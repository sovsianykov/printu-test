import React, { FunctionComponent, memo, useMemo } from "react";
import { Item } from "@pages/Home/containers/Field/FigurItem/models";
import { Box } from "@mui/material";
import { convertToPercent, positionCalc } from "./utils";
import {
  Dot,
  Figure,
  Rectangle,
} from "@pages/Home/containers/Field/FigurItem/FigurItem.styles";
import { useAppSelector } from "@app/hooks";

export   interface FigureItemProps {
  item: Item;
}

const FigureItem: FunctionComponent<FigureItemProps> = ({ item }) => {
  const project = useAppSelector(state => state.project.data?.project)

  const { yPercent } = convertToPercent(project!,item)
  const { w, h, b, r } = useMemo(() => positionCalc(item), [item]);
  console.log(yPercent);
  return (
    <Rectangle item={item} width={w} height={h} bottom={yPercent}>
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
