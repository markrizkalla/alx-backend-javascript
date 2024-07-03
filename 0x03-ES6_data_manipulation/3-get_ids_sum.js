const getStudentsIdsSum = (studentList) => {
  const sum = studentList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sum;
};

export default getStudentsIdsSum;
