import React from "react";

import "./dateTile.styles.scss";

interface DateTileProps {
  dateText: string;
}

const DateTile = ({ dateText }: DateTileProps) => {
  return <div className="dateTile">{dateText}</div>;
};

export default DateTile;
