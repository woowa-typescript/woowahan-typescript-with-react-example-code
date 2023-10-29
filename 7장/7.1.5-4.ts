type ForPass = {
  type: "A" | "B" | "C";
};

const isTargetValue = () => (data.forPass as ForPass).type === "A";
