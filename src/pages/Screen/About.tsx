import React from "react";
import image from "../../assets/images/eng.png";

function About() {
  return (
    <div className="lg:items-center  flex-col self-center flex justify-center ">
      <div className="container px-4 py-4 min-h-screen mx-auto border-2 gap-12 flex flex-col sm:flex-row justify-center items-center ">
        <div>
          <img className="h-auto w-100 rounded-lg lg:w-[500px]	" src={image} />
        </div>
        <div className="text-center py-9 lg:w-[600px]">
          <h1 className="text-xl ">I am a student</h1>
          <h6 className="text-4xl py-2">I Can Learn English </h6>
          <p className="m-2">
            About us. Established in 1947, our language school has continuously
            enhanced its methodology and efficiency, and has become a renowned
            partner for those who want to improve their English language skills
            in a fast and reliable way.
          </p>

          <p className="text-lx m-2">
            About us. Established in 1947, our language school has continuously
            enhanced  improve their English language skills
            in a fast and reliable way.
          </p>

          <p className="m-2">
            About us. Established in 1947, our language school has continuously
            enhanced its methodology and efficiency, and has become a renowned
            partner for those who want to improve their English language skills
            in a fast and reliable way.
          </p>
          
        </div>
      </div>
      <div className="container px-4 py-4 min-h-screen mx-auto border-2 gap-12 flex flex-col-reverse sm:flex-row justify-center items-center ">
        <div className="text-center py-9 lg:w-[600px]">
          <h1 className="text-xl ">I am a student</h1>
          <h6 className="text-4xl py-2">I Can Learn English </h6>
          <p className="m-2">
            About us. Established in 1947, our language school has continuously
            enhanced its methodology and efficiency, and has become a renowned
            partner for those who want to improve their English language skills
            in a fast and reliable way.
          </p>

          <p className="text-lx m-2">
            About us. Established in 1947, our language school has continuously
            enhanced  improve their English language skills
            in a fast and reliable way.
          </p>

          <p className="m-2">
            About us. Established in 1947, our language school has continuously
            enhanced its methodology and efficiency, and has become a renowned
            partner for those who want to improve their English language skills
            in a fast and reliable way.
          </p>
          
          
        </div>
        <div>
          <img className="h-auto w-100 rounded-lg lg:w-[500px]	" src={image} />
        </div>
      </div>
     </div>
  );
}
export default About;
