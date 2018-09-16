export const mapToMatch(list, condition, modificator) => list.map(
  item => condition(item)
    ? modificator(item)
    : item
)