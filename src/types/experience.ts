export type Category = "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
 
export interface Experience {
  id: number;
  title: string;
  description: string;
  category: Category;
  destination: string; // "City, Country"
  price: number;
  rating: number;
  imageUrl: string;
}
 