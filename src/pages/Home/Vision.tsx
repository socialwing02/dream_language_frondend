import image1 from "../../assets/images/home/visionImg2.webp";
import image2 from "../../assets/images/home/visionImg1.webp";
import image3 from "../../assets/images/home/visionImg3.webp";

export default function Vision() {
  return (
    <section className="bg-gradient-to-l from-white to-violet-100 min-h-screen flex justify-around items-center gap-10n py-[3rem] ">
      <article className=" grid gap-4">
        <div className="grid gap-2">
          <h1 className="text-[clamp(2rem,2.5vw,4rem)]">Our Mission</h1>

          <p className="w-[min(60ch,90vw)]">
            At Dream Language Academy , our vision is to be the leading
            institution in the global educational landscape, providing
            accessible, flexible, and high-quality English language courses. We
            aim to empower learners of all ages and backgrounds to reach their
            full potential in English proficiency, enabling them to succeed
            personally, academically, and professionally. Our vision is to
            foster a community of confident and capable English speakers,
            promoting communication, cultural exchange, and growth across
            borders.
          </p>
        </div>

        <div className="grid gap-2">
          <h1 className="text-[clamp(2rem,2.5vw,4rem)]">Our Vision</h1>
          <p className="w-[min(60ch,90vw)]">
            Our mission is to deliver exceptional English language education
            through innovative online courses tailored for learners at every
            proficiency level. We are dedicated to offering high-quality
            learning experiences that meet the diverse needs of our students,
            whether they are beginners or business professionals. We prioritize
            flexibility in our courses, allowing students to progress at their
            own pace while seamlessly integrating learning into their everyday
            lives. Our instructors are accredited and highly qualified, ensuring
            that we uphold the highest standards of teaching and language
            proficiency.
          </p>
        </div>
      </article>
      <div className="relative">
        <img src={image1} alt="" className="w-[400px] rounded-2xl" />
        <img
          src={image2}
          alt=""
          className="w-[250px] mt-[-7rem] ml-[-4rem] rounded-xl"
        />

        <img
          src={image3}
          alt=""
          className="w-[200px] absolute  top-[-70px] right-[-100px] z-[1] rounded-lg"
        />
      </div>
    </section>
  );
}
