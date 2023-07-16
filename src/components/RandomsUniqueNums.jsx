import React from "react";

const RandomsUniqueNums = () => {
  const randomNums = () => {
    const result = [];
    while (result.length < 10) {
      const posibleCase = Math.floor(Math.random() * 10);
      if (!result.includes(posibleCase)) result.push(posibleCase);
    }
    return result;
  };

  const nums = randomNums();

  return (
    <section>
      <h3>Generate Randoms and Unique Array Nums </h3>
      <h5>Result</h5>
      <p>{nums.join(",")}</p>
    </section>
  );
};

export default RandomsUniqueNums;
