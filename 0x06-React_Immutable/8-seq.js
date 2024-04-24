import { Seq } from 'immutable';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function printBestStudents(object) {
  const toBePrinted = Seq(object)
    .filter((student) => student.score > 70)
    .map((student) => ({
      ...student,
      firstName: capitalizeFirstLetter(student.firstName),
      lastName: capitalizeFirstLetter(student.lastName),
    }));

  console.log(toBePrinted.toJS());
}
