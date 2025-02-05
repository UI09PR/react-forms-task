export class APIService {
  async getWorkPlaces(): Promise<string[]> {
    const fetchData = await fetch("https://dummyjson.com/products/category-list");
    return (await fetchData.json()) as string[];
  }

  async postNewInfo(payload: { title: string }) {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await response.json();
  }
}

const apiService = new APIService();

export default apiService;
