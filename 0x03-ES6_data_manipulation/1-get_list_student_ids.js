const getListStudentIds = (array) => {
  if (!Array.isArray(array)) return [];
  return array.map((x) => x.id);
};
export default getListStudentIds;
