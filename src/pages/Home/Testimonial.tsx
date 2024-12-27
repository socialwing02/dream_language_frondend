import { testimonialCard, TypeTestimonialCard } from "@/constants/data";
import avator from "../../assets/images/Avatar/5a7dbedaf01bdb0eabb9838e78146ed3.webp";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonial() {
  return (
    <div className="min-h-screen">
      <div className="testimonials">
        {testimonialCard.map((item) => (
          <TestimonialCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  item: TypeTestimonialCard;
};

function TestimonialCard({ item }: Props) {
  return (
    <div
      className={
        " testimonial relative bg-white shadow-xl border-2 p-6 rounded-xl flex flex-col"
      }
    >
      <div className="flex  gap-4">
        <img
          src={avator}
          alt=""
          className="w-12 h-12 rounded-full object-cover ml-[-2.7rem]"
        />
        <div>
          <h2 className="font-bold uppercase">{item.title}</h2>
          <span>Date</span>
        </div>
      </div>

      <span className="absolute p-1  rounded-full top-[-15px] right-[30px] bg-violet-500 text-white">
        <FormatQuoteIcon />
      </span>

      <p>{item.content}</p>
    </div>
  );
}
