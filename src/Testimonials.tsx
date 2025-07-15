import { Carousel } from "./components/Carousel";
import { ReviewCard } from "./ReviewCard";
import type { Review } from "./ReviewCard";

import sereneLivingImg from "../src/assets/img/serene-living.png";
import ethanMorganAvatar from "../src/assets/img/ethan-morgan.webp";
import starlightCreationsImg from "../src/assets/img/starlight-creations.png";
import oliviaHayesAvatar from "../src/assets/img/olivia-hayes.webp";
import opulentLivingGroupImg from "../src/assets/img/opulent-living-group.png";
import alexanderReedAvatar from "../src/assets/img/alexander-reed.webp";

interface TestimonialsData {
  imgSrc: string;
  text: string;
  author: string;
  position: React.ReactNode;
  avatarSrc: string;
}

const testimonialsData: TestimonialsData[] = [
  {
    imgSrc: sereneLivingImg,
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: "Ethan Morgan",
    position: (
      <>
        Founder and CEO, <br /> Serene Living Products
      </>
    ),
    avatarSrc: ethanMorganAvatar,
  },
  {
    imgSrc: starlightCreationsImg,
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    author: "Olivia Hayes",
    position: "Owner, Starlight Creations",
    avatarSrc: oliviaHayesAvatar,
  },
  {
    imgSrc: opulentLivingGroupImg,
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    author: "Alexander Reed",
    position: "Co-Founder, Opulent Living Group",
    avatarSrc: alexanderReedAvatar,
  },
];

export const Testimonials: React.FC = () => (
  <section className="testimonial-section">
    <div className="testimonial-container section">
      <h1 className="main-title">Voices of Success with Sales Fortuna</h1>
      <Carousel items={testimonialsData}>
        {(review: Review) => <ReviewCard review={review} />}
      </Carousel>
    </div>
  </section>
);

export default Testimonials;
