
import Slider from "react-slick";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import slidetwoimg from '../../assets/slidetwoimg.png'
import slidetwoimg2 from '../../assets/slidetwoimg2.png'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-[35%] translate-x-[-50%] bottom-[80px]  z-10  p-[20px] bg-[#95939a] hover:bg-[#8454F5] hover:text-[#fff] rounded-lg transition duration-300 ease-in-out "
    >
      <FaChevronLeft className="text-[25px]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-[22%] translate-x-[-50%] bottom-[80px] p-[20px] bg-[#9b96a4]   z-10 rounded-lg hover:bg-[#8454F5] hover:text-[#fff] transition duration-300 ease-in-out"
    >
      <FaChevronRight className="text-[25px]" />
    </div>
  );
}

const Slidetwo = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="py-[140px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-openSans font-bold text-[56px]/[140%] text-[#29313D] w-[689px] pb-[90px]">
          Build the right plan for your team.
        </h2>
        <div className=" flex  gap-x-[120px]">
          <div className="w-[67%]">
            <div className="">
              <Slider {...settings}>
                <div className="">
                  <div className="flex gap-[50px]">
                    <div className="">
                      <img
                        src={slidetwoimg}
                        alt="buildImage"
                        className="w-[450px] h-[520px] rounded-[40px] object-cover "
                      />
                    </div>
                    <div className=" w-[446px] pt-[30px]">
                      <p className="font-nunito font-normal text-[20px]/[180%] text-[#29313D] ">
                        As a leading digital platform in Paris, we look to
                        engage with our clients beyond the conventional design
                        and development agency relationship, becoming a partner
                        to the people and companies we work with.
                      </p>
                      <h4 className="font-nunito font-semibold text-[36px]/[180%] text-[#29313D   py-[20px]">
                        Nafij Islam
                      </h4>
                      <div className="flex gap-x-[40px]">
                        <FaFacebookSquare className="text-[40px] hover:text-[#8454F5] transition duration-300 ease-in-out " />
                        <IoLogoYoutube className="text-[40px] hover:text-[#8454F5] transition duration-300 ease-in-out " />
                        <IoLogoTwitter className="text-[40px] hover:text-[#8454F5] transition duration-300 ease-in-out " />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex  gap-x-[60px]">
                    <div className="">
                      <img
                        src={slidetwoimg}
                        alt="buildImage"
                        className="w-[450px] h-[520px] rounded-[40px] object-cover "
                      />
                    </div>
                    <div className=" w-[446px] pt-[30px]">
                      <p className="font-nunito font-normal text-[20px]/[180%] text-[#29313D] ">
                        As a leading digital platform in Paris, we look to
                        engage with our clients beyond the conventional design
                        and development agency relationship, becoming a partner
                        to the people and companies we work with.
                      </p>
                      <h4 className="font-nunito font-semibold text-[36px]/[180%] text-[#29313D   py-[20px]">
                        Nafij Islam
                      </h4>
                      <div className="flex gap-x-[40px]">
                        <FaFacebookSquare className="text-[40px] hover:text-[#8454F5] transition duration-300 ease-in-out  cursor-pointer " />
                        <IoLogoYoutube className="text-[40px] hover:text-[#8454F5] transition duration-300 ease-in-out cursor-pointer " />
                        <IoLogoTwitter className="text-[40px] hover:text-[#8454F5] transition duration-300 ease-in-out cursor-pointer " />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className=" w-[30%]">
            <img src={slidetwoimg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slidetwo;