import { Mail, Phone } from 'lucide-react';

const Contact = () => 
    { return ( 
    <section className="w-full bg-gradient-to-b from-white to-[#e8f1fe] py-24 overflow-x-clip" id="contact">
         <div className="max-w-7xl mx-auto my-20"> 
            <h2 className="my-Heading">Contact Us ༘˚</h2>
             <p className="para font-jetBrains p-10">We’d Love to Hear from You!🍨 Got a craving, suggestion, or just want to share your love for ice-cream? We’re all ears! Whether you’re curious about our flavors, need help with an order, or simply want to tell us your favorite scoop, we’re here for you. Drop us a message, and we’ll get back to you faster than ice-cream melts on a sunny day! Your love keeps Frozio cool, and we can’t wait to serve you more sweet scoops of happiness.</p> 
             <div className="flex flex-col lg:flex-row justify-around m-4 px-4"> 
                <div className="flex mb-8 lg:mb-0"> <Phone className="text-3xl mr-4"/> 
            <div>
            <p className="text-lg font-semibold">Phone</p> 
            <p className="text-neutral-600">(123)456789</p>
         </div>
      </div> 
      <div className="flex mb-8 lg:mb-0">
      <Mail className="text-3xl mr-4"/> 
   <div> 
   <p className="text-lg font-semibold font-jetBrains">Email</p>
   <p className="text-neutral-600 font-jetBrains ">info@frozioicecreams.com</p> 
</div> 
</div> 
</div> 
</div>
</section> 
    ) 
} 
                        
export default Contact;