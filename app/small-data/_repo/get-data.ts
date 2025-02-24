import { generateDummyData } from "@/libs/helper";

export async function getData() {
  const data = generateDummyData(20);

  return data;
}
