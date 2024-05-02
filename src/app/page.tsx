import Image from "next/image";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/bd82aa12-8ec5-460f-8fee-c6c8c7992b9e-gcufup.jpg",
    "https://utfs.io/f/6a5cbba2-11d7-48c3-8da4-c1cd28a55733-gcufuo.jpg",
    "https://utfs.io/f/1e9a232e-62e1-4294-b4b4-832b3a854cb0-gcufun.jpg"
  ]

  const mockData = mockUrls.map((url, index) => ({
    id: index, url
  }))
  return (
    <main>
      <div className="flex flex-wrap p-6 gap-4">
        {mockData.map(({ id, url }) => (
          <div key={id} className="w-96">
            <img src={url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
