function packArrayIntoGroups(arr, handleGroup) {
  const result = [];
  let group = [];

  arr.forEach((item, index) => {
    group.push(item);

    if ((result.length === 0 || result[result.length - 1].length === 3) && group.length === 2) {
      result.push([...group]);
      group = [];
    } else if (result.length > 0 && result[result.length - 1].length === 2 && group.length === 3) {
      result.push([...group]);
      group = [];
    } else if (group.length === 1 && index === arr.length - 1) {
      result.push([...group]);
      group = [];
    }

  });


  return result.map(group => handleGroup(group));
}

export default packArrayIntoGroups;

