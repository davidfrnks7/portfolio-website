import { Icons, IconTuple } from "./Icons";

export type FilteredIcons = { icon: IconTuple; show: boolean }[];

const filterIconsArr = (iconsArr: Icons, filteredIconsArr?: Icons) => {
  const newIconsArr: FilteredIcons = [] as FilteredIcons;

  if (filteredIconsArr) {
    iconsArr.forEach((iconTuple: IconTuple) => {
      const showIconFlag = filteredIconsArr.includes(iconTuple);
      newIconsArr.push({ icon: iconTuple, show: showIconFlag });
    });
  }

  if (!filteredIconsArr) {
    iconsArr.forEach((iconTuple: IconTuple) => {
      const showIconFlag = true;
      newIconsArr.push({ icon: iconTuple, show: showIconFlag });
    });
  }

  return newIconsArr;
};

export default filterIconsArr;
