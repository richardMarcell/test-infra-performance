export function generateDummyData(count: number) {
  const dummyData = [];
  const domains = ["gmail.com", "yahoo.com", "outlook.com"];
  const streets = [
    "Jl. Merdeka",
    "Jl. Sudirman",
    "Jl. Thamrin",
    "Jl. Diponegoro",
    "Jl. Gajah Mada",
  ];

  for (let i = 1; i <= count; i++) {
    const name = `User ${i}`;
    const email = `user${i}@${
      domains[Math.floor(Math.random() * domains.length)]
    }`;
    const address = `${
      streets[Math.floor(Math.random() * streets.length)]
    } No. ${Math.floor(Math.random() * 100)}`;
    const age = Math.floor(Math.random() * 60) + 18;
    const id = i;

    dummyData.push({ id, name, email, address, age });
  }

  return dummyData;
}
