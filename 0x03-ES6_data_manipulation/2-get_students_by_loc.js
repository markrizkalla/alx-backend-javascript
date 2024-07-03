const getStudentsByLocation = (studentList, city) => {
  const filteredList = studentList.filter((x) => x.location === city);
  return filteredList;
};

export default getStudentsByLocation;
