import { Carousel } from "./components/Carousel";
import { ReviewCard } from "./ReviewCard";
import type { Review } from "./ReviewCard";

interface TestimonialsData {
  imgSrc: string;
  text: string;
  author: string;
  position: React.ReactNode;
  avatarSrc: string;
}

const testimonialsData: TestimonialsData[] = [
  {
    imgSrc: "../src/assets/img/serene-living.png",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: "Ethan Morgan",
    position: (
      <>
        Founder and CEO, <br /> Serene Living Products
      </>
    ),
    avatarSrc: "../src/assets/img/ethan-morgan.webp",
  },
  {
    imgSrc: "../src/assets/img/starlight-creations.png",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    author: "Olivia Hayes",
    position: "Owner, Starlight Creations",
    avatarSrc: "../src/assets/img/olivia-hayes.webp",
  },
  {
    imgSrc: "../src/assets/img/opulent-living-group.png",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    author: "Alexander Reed",
    position: "Co-Founder,  Opulent Living Group",
    avatarSrc: "../src/assets/img/alexander-reed.webp",
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
