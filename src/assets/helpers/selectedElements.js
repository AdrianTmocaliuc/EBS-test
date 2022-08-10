export const selectedElements = (array, select) => {
  const selectedId = +select.parentNode.dataset.id;
  return array?.find((el) => el.id === selectedId);
};
