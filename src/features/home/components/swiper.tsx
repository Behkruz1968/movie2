import { memo, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';// @ts-ignore
import 'swiper/css';// @ts-ignore
import 'swiper/css/navigation';// @ts-ignore
import 'swiper/css/thumbs';
import { useMovie } from '../../movies/service/useMovie';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';
import logo from '../../../shared/assets/logo.svg'
interface Slide {
  id: number;
  title: string;
  release_date: string; 
  original_language: string;
  vote_average: number;
  backdrop_path: string;
}

const Swayper = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { getMovies } = useMovie({ page: 15 });
  const { data, isLoading } = getMovies();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      console.log("Fetched movie data:", data);
    }
  }, [data]);

if (isLoading) {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Loading..."
          className="w-32 h-32 animate-bounce"
        />
  
        <div className="w-12 h-12 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-white text-xl font-semibold animate-pulse">
          Грузим данные....
        </p>
      </div>
    </div>
  );
}


  const slides = (data?.results || []).slice(0, 7);

  return (
    <div className="w-full max-w-[1200px] mx-auto mb-[50px]">
      <Swiper
      
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        loop={slides.length > 4}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setThumbsSwiper}
        slidesPerView={1}
        spaceBetween={8}
        watchSlidesProgress
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide: Slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${slide.backdrop_path || ''})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-10 left-[50%] -translate-x-1/2 text-white">
                <h2 className="font-semibold text-[32px] text-center mb-[16px]">
                  {slide.title}
                </h2>
                <p className="text-[14px] font-semibold text-center mb-[16px]">
                  {slide.release_date?.split("-")[0]} • {slide.original_language} • ⭐ {slide.vote_average.toFixed(1)}
                </p>
                <button
                  onClick={() => navigate(`/movie/${slide.id}`)}
                  className="mt-4 mx-auto flex justify-center items-center gap-[7px] py-[14px] px-[127px] bg-white text-[#C61F1F] hover:bg-[#ccc] rounded-[12px] font-semibold"
                >
                 <CaretRightOutlined className="text-2xl" /> Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        slidesPerView={7}
        spaceBetween={8}
        watchSlidesProgress
        className="mt-4"
      >
        {slides.map((slide: Slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[55px] bg-cover bg-center rounded-md border border-transparent hover:border-red-500 cursor-pointer transition-all duration-300"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${slide.backdrop_path || ''})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Swayper);
