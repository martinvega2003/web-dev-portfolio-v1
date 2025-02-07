import { FaClock, FaChartLine, FaMobileAlt } from "react-icons/fa";
import image from "../../images/hero-image-v2.webp"

const MyServiceSection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center gap-8 px-4 sm:px-6 py-12 sm:py-24 bg-primary text-white">
      {/* Left Side - Text */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Why You Need This</h2>
        <p className="text-lg mb-6 text-gray-400">
          A slow, outdated, or poorly optimized website is costing you traffic, conversions, and revenue. Here’s why upgrading your site is essential:
        </p>
        <div className="space-y-6 flex flex-col">
          <div className="flex items-start gap-4">
            <FaChartLine className="text-accent w-10 h-10 shrink-0" />
            <p>
              <strong>75% of users judge a business’s credibility based on its website design and performance.</strong> 
              If your site loads slowly, looks outdated, or has errors, potential clients will leave before even considering your offer.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaClock className="text-accent w-10 h-10 shrink-0" />
            <p>
              <strong>53% of mobile users abandon a website if it takes more than 3 seconds to load.</strong> 
              A well-maintained website ensures fast loading speeds, seamless browsing, and a great user experience across all devices.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaMobileAlt className="text-accent w-10 h-10 shrink-0" />
            <p>
              <strong>92% of search traffic goes to the first page of Google.</strong> 
              Without proper SEO, your site remains hidden while your competitors attract all the traffic.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2">
        <img src={image} alt="Website Performance" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default MyServiceSection;
