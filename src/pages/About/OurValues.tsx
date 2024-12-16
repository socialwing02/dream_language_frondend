import { ValueCardType, values } from "@/constants/data";

export default function OurValues() {
  return (
    <section className="bg-black min-h-screen py-[3rem] grid place-content-center px-8">
      <div className="text-white justify-self-center grid gap-4 text-center py-8">
        <h1 className=" text-[clamp(2.5rem,3vw,6rem)]  ">Our Values</h1>
        <h5 className=" text-[clamp(2rem,2.5vw,6rem)] ">
          Where Values Shape Tomorrows Technology!
        </h5>
      </div>

      <div className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(350px,90vw),1fr))] gap-4 ">
        {values.map((item) => (
          <ValueCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ValueCard({ item }: { item: ValueCardType }) {
  return (
    <div className="border-black border-4 p-3 flex flex-col gap-3 bg-white rounded-xl hover:border-[#853cc9] ">
      {<item.icon size={35} color="#853cc9" />}
      <h2 className="text-xl font-medium">{item.title}</h2>

      <p className="text-md">{item.content}</p>
    </div>
  );
}
