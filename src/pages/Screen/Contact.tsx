import Form from "@/components/Form";
import imageBg from "../../assets/images/bgimage.jpg";

export default function Contact() {
  return (

    <div>
 <div
      style={{
        backgroundImage: `url(${imageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        minHeight: "100vh",
      }}
      // className="flex-col items-center justify-center"
    >
      <div 
      className="p-8 right-[100px] max-w-screen-md	"
      >
        <Form  />
      </div>
    
    </div>
      <div className="mt-8">
        <iframe className="w-[80%] mx-auto rounded-sm	" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8993346550064!2d79.45153097528564!3d10.664921289477107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a554dcc98763c9f%3A0xdd7421d2f90bd3e0!2sNational%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1734429982086!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          
        ></iframe>
      </div>
    </div>
   
  );
}

