type GType<T> = T;
type RequirementType = "USE" | "UN_USE" | "NON_SELECT";
interface Order {
  getRequirement(): GType<RequirementType>;
}
