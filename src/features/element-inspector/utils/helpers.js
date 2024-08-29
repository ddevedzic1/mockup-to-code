export const isNotAllowedCategory = (category, id) =>
  category?.notAllowedElements?.includes(id);
