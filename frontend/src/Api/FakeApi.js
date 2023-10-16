import axios from "axios";

export default async (limit) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/electronics`
    );
    return response.data;
  } catch (error) {
    console.log("FakeApiError : ", error);
    return [];
  }
};
