export const stringToArray = (str) => {
  if (!str) return [];
  if (typeof str !== "string") return [];
  try {
    return str.split(",").map((s) => s.trim());
  } catch (error) {
    return [];
  }
};
