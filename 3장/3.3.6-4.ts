type RequirementType = "USE" | "UN_USE" | "NON_SELECT";
interface Order {
  getRequirement(): RequirementType;
}
