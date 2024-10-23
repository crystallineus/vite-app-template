export type Product = {
  id: string;
  type: ProductType;
  description: string;
};

export enum ProductType {
  All = "ALL",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Kitchenware = "Kitchenware",
  Fitness = "Fitness",
  SportsEquipment = "Sports Equipment",
  Books = "Books",
  Beauty = "Beauty",
  Toys = "Toys",
  OfficeSupplies = "Office Supplies",
  Gardening = "Gardening",
}
