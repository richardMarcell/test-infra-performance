import { generateDummyData } from "@/libs/helper";

export async function getData() {
  const data = generateDummyData(500);

  return data;
}
