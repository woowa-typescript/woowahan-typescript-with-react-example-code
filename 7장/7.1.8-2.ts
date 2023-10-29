import { assert } from "superstruct";

function isListItem(listItems: ListItem[]) {
  listItems.forEach((listItem) => assert(listItem, ListItem));
}
