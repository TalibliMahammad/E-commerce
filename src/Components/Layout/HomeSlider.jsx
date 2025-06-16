import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function HomeSlider() {
  const Laptops = useSelector(state => state.fetchState.data.Electronics?.Laptop) || []

  const forPromotionImages = [
    "/Promo/1dad9da122a349a14f94094712946d3c.jpg",
    "/Promo/lack-friday-sale-social-media-banner-design-template_47987-24589.jpg",
    "/Promo/2bdbe56056e0c75b6cf3938a6911141a.jpg",
    "/Promo/7274f34d6a776f5d4208ef4a145a8b08.jpg",
    "/Promo/a1fea360e3557739b3275c15e97b13ad.jpg",
    "/Promo/b945d1c21541e8493c012de14750ec50.jpg",
    "/Promo/e7f38e4bb49d0ac977970c38d92c012a.png",
    "/Promo/e476a698096dfcfecdcdd0eba4e7b7ed.jpg",
    "/Promo/1dad9da122a349a14f94094712946d3c.jpg",
    "/Promo/guided_tour__dna6wcz8ieie_xlarge.jpg",
    "/Promo/iphone__kqge21l9n26q_og.png",
    "/Promo/lenovo-smart-ai.jpg",
    "/Promo/modal_power__b0obhiao9aeq_large.jpg",
    "/Promo/ora8hzqjeukmwnnb-0_0_desktop_0_1X.webp",
    "/Promo/t9ygtye7iprqw6ei-0_0_desktop_0_1X.webp"
  ]

  
  const {categoryKey , subItem } = useParams()
 

  const categoryImages = {
    "Electronics": {
      "Earbuds": [
        "/SlidersImages/Earbuds/woman-wearing-white-wireless-earbuds.jpg",
        "/SlidersImages/Earbuds/fitness-girl-with-wireless-headphones_1385-419.jpg",
        "/SlidersImages/Earbuds/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074248.jpg",
        "/SlidersImages/Earbuds/wireless-earbuds-with-neon-cyberpunk-style-lighting.jpg",
        "/SlidersImages/Earbuds/young-attractive-slim-woman-doing-sport-exercises-morning-sunrise-beach-sports-wear-healthy-lifestyle-listening-music-wireless-earphones-holding-smartphone-smiling-happy_285396-5534.jpg",
      ],
      "Gaming": [
        "/SlidersImages/Gaming/ai-powered-device-concept_23-2151924130.jpg",
        "/SlidersImages/Gaming/black-friday-gadget-sale-social-media-post-template_47987-25484.jpg",
        "/SlidersImages/Gaming/black-friday-super-sale-web-banner-template_120329-3860.jpg",
        "/SlidersImages/Gaming/cool-gaming-setup-indoors-still-life_23-2149829153.jpg",
        "/SlidersImages/Gaming/gamer-background-with-accessories_1419-2366.jpg",
        "/SlidersImages/Gaming/gaming-blank-banner-background_23-2150390427.jpg",
        "/SlidersImages/Gaming/gaming-blank-banner-background_23-2150390427.jpg",
        "/SlidersImages/Gaming/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529379.jpg",
        "/SlidersImages/Gaming/vr-headset-headphones-gamepad-realistic-image_1284-14416.jpg",

      ],
      "Phone": [
        "/SlidersImages/Phones/05-Samsung-Galaxy-S24-Ultra-Mockup.jpg",
        "/SlidersImages/Phones/204be9221908863.Y3JvcCw4MDgsNjMyLDAsMA.webp",
        "/SlidersImages/Phones/black-friday-mega-deal-social-media-banner-design-template_47987-25420.jpg",
        "/SlidersImages/Phones/elegant-smartphone-composition_23-2149437108.jpg",
        "/SlidersImages/Phones/galaxy_z_fold_flip_6_leak_reddit_1717585044855.jpg",
        "/SlidersImages/Phones/maxresdefault (1).jpg",
        "/SlidersImages/Phones/samsung-s8-poster.png",
      ],
      "SmartWatch": [
        "/SlidersImages/Smartwatch/fitness-tracker-sport-bracelet-smartwatch-technology_53876-102355.jpg",
        "/SlidersImages/Smartwatch/mobile-watch-ui-kit-design-concept-task-application-flat-illustration_1284-44769.jpg",
        "/SlidersImages/Smartwatch/realistic-design-fitness-trackers_23-2148509775.jpg",
        "/SlidersImages/Smartwatch/special-offer-black-friday-web-banner-template_120329-1093.jpg",
        "/SlidersImages/Smartwatch/still-life-tech-device_23-2150722614.jpg",
        "/SlidersImages/Smartwatch/ui-design-concept-watch-task-applications-with-colorful-elements-flat-illustration_1284-44760.jpg",
      ],
      "Laptop": [
        "/SlidersImages/LaptopSlider/canva-blue-and-white-modern-laptop-sale-poster-qZzUibVizdk.jpg",
        "/SlidersImages/LaptopSlider/COLOURBOX29353731.jpg",
        "/SlidersImages/LaptopSlider/e9d335f25758c4eca3f59d2284d470bf.jpg",
        "/SlidersImages/LaptopSlider/laptop-on-gray-background-poster-or-banner-design-vector.jpg",
        "/SlidersImages/LaptopSlider/original-2acdae89cacff6fab04f11c0136a3472.jpg",
        "/SlidersImages/LaptopSlider/pngtree-red-office-desk-with-mobile-phone-and-tablet-pc-3d-illustration-image_3774028.jpg",
      ]
    },
    "Health": [
      "/SlidersImages/Healthy/collection_bg_1.jpg",
      "/SlidersImages/Healthy/Equine - Equitop Myoplast - EN.jpg",
      "/SlidersImages/Healthy/file-20230825-16121-jw13nf.jpg",
      "/SlidersImages/Healthy/file-20240205-19-q8vbm4.jpg",
      "/SlidersImages/Healthy/Orkla-produkter10050-mindre-marmor-aspect-ratio-16-9-1920x1080.jpg",
      "/SlidersImages/Healthy/Picture7.jpg",
      "/SlidersImages/Healthy/Vivid-Health-Packaging-Design-Range-Hero-1500.jpg",
      "/SlidersImages/Healthy/who_061197.jpg",
    ],
    "Home": [
      "/SlidersImages/HomeAndLife/_339944709_339944709_2.jpg",
      "/SlidersImages/HomeAndLife/00-story-just-married.jpg",
      "/SlidersImages/HomeAndLife/91elxDBoVuL.jpg",
      "/SlidersImages/HomeAndLife/Cork-Lifestyle-Products-Mind-the-Cork-Resized.jpg",
      "/SlidersImages/HomeAndLife/cq5dam.thumbnail.5616.5616.jpg",
      "/SlidersImages/HomeAndLife/kitchen-appliances.jpg",

    ],
    "Man": {
      "Accessories": [
        "/SlidersImages/ManAcc/abstract-gold-chain-jewellery-presentation_23-2149599098.jpg",
        "/SlidersImages/ManAcc/close-up-clock-with-time-change_23-2149241150.jpg",
        "/SlidersImages/ManAcc/close-up-male-hand-pocket-with-modern-elegant-wristwatch_1262-16910.jpg",
        "/SlidersImages/ManAcc/fashion-portrait-young-businessman-handsome-model-man-dressed-elegant-blue-suit-gray_158538-11080.jpg",
        "/SlidersImages/ManAcc/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands_158538-9456.jpg",
        "/SlidersImages/ManAcc/watch-black-box-bow-tie-lie-white-windowsill_8353-687.jpg",


      ],
      "Pants": [
        " /SlidersImages/ManPants/a99318f2b21f872a656dda6f27982621.jpg",
      ],
      "Polo": [
        " /SlidersImages/ManPolo/image8_975x.png",
        " /SlidersImages/ManPolo/men-s-business-casual-summer-styles-.jpg",
      ],
      "T-shirt": [
        "/SlidersImages/ManShirt/8oct_neck_tee.jpg",
        "/SlidersImages/ManShirt/1741369981-mhl-tshirts-gildan-434-67cb32332ba11.jpg",
        "/SlidersImages/ManShirt/How_to_Style_a_Black_T-Shirt_all_black_men_SANVT.png",
        "/SlidersImages/ManShirt/Mens-t-shirt.jpg",
        "/SlidersImages/ManShirt/SANVT_blog-How-men-should-wear-a-t-shirt-5-1200x800.jpg",
        "/SlidersImages/ManShirt/Vintage_Tees_1024x1024.jpg",
      ],
      "Shoes": [
        "/SlidersImages/ManShoes/5_Ways_to_Style_Your_Oxford_Shoes_For_Men.png",
        "/SlidersImages/ManShoes/Untitled_620_x_426_px_-84.jpg",

      ],
    },

    "Pets": [
      "/SlidersImages/Pets/PH198310.jpeg",
      "/SlidersImages/Pets/pets-products.jpg",
    ],

    "Sport": [
      "/SlidersImages/Sports/5adac5b0-2cbe-11ef-b7df-f32066aee2c0.jpg",
      "/SlidersImages/Sports/best_sports_and_fitness_equipment_1717665246929_1717665258898.jpg",
      "/SlidersImages/Sports/header-site-3-gammes-V4.png",
      "/SlidersImages/Sports/sport-917899790.jpg",
      "/SlidersImages/Sports/Sports-Hero-D9.jpg",
    ],
    "Woman": {
      "Accessories": [
        "/SlidersImages/WomanAcc/aeb9d925-69ff-444d-8bd9-30ed91730822.jpeg",
        "/SlidersImages/WomanAcc/AU2013.jpg",
        "/SlidersImages//WomanAcc/horizontal-view-fashion-beauty-model-professional-makeup-beautiful-jewelry-bare-shoulders-posing-profile-studio-over-168365175.jpg",
        "/SlidersImages/WomanAcc/original.jpg",
        "/SlidersImages/WomanAcc/Style_a_handbag_1.jpg",
        "/SlidersImages/WomanAcc/women-s-fashion-accessories-oriental-style-white-background-blue-scarf-jewelry-glasses-strap-handbag-earrings-women-s-160419111.jpg",
      ],
      "Classic-shoes": [
        "/SlidersImages/WomanClassic/7-12-24-PartII265209_a1427765-4a62-4071-8f31-8cfc9b078c45.jpg",
        "/SlidersImages/WomanClassic/ace1e5f388cedb2a606592460cdd81edd4-01-UGG-lede.2x.rhorizontal.w710.jpg",
        "/SlidersImages/WomanClassic/elegant-high-heel-womens-shoes-on-sofa-classic-footwear-brides-wedding-shoes-modern-style-horizontal-shot-fashion-concept-free-photo.jpg",
        "/SlidersImages/WomanClassic/fashion-ideas-pair-stylish-classic-formal-male-black-polished-oxford-leather-laced-shoes-placed-together-over-white-horizontal-336843970.jpg",
        "/SlidersImages/WomanClassic/high-heel-shoes-1.jpg",
        "/SlidersImages/WomanClassic/Must-Have_Women_s_Shoe_Styles_-_Vintage_Shoes.jpg",
      ],
      "Dress": [
        "/SlidersImages/WomanDress/1000_F_302281936_mEVBWasE80jMHRI4eF4a03cI3CPixaRa.jpg",
        "/SlidersImages/WomanDress/Depositphotos_113805136_l-2015-1024x682.jpg",
        "/SlidersImages/WomanDress/Do-Horizontal-Stripes-Slim-You-Style-Tips-and-Tricks-for-a-Sleek-Look-1.jpg",
        "/SlidersImages/WomanDress/DSC_1804-scaled-jpeg.webp",
        "/SlidersImages/WomanDress/elementalwines-fashion-horizontal-lede-661da0620a10c.jpg",
        "/SlidersImages/WomanDress/Portada_Horizontal_Prom.jpg",
        "/SlidersImages/WomanDress/spring-campaign-3-oxford-shop-australia._2048x2048 (1).jpg",
      ],
      "Pants": [
        "/SlidersImages/WomanPants/230512-PORTRAIT-SW-Miriam-Lookmodels13192_BIG_v2.jpg",
        "/SlidersImages/WomanPants/mega-ww.jpg",
        "/SlidersImages/WomanPants/pngtree-stylish-woman-sitting-on-floor-indoor-horizontal-pose-photo-picture-image_12535449.jpg",
        "/SlidersImages/WomanPants/Portada_Horizontal_Looks_con_gabardina.jpg",
        "/SlidersImages/WomanPants/Portada_Horizontal_romantic.jpg",
        "/SlidersImages/WomanPants/wp-2022-05-editing-tips-ootd-photos-1.jpg",
      ],
      "Shirt": [
        "/SlidersImages/WomanShirt/close-up-horizontal-shot-of-beautiful-stylish-african-woman-in-the-old-city-wearing-striped-shirt-and-red-pants-looking-at-camera-and-touching-her-2CT2FYR.jpg",
        "/SlidersImages/WomanShirt/HORIZONTAL-FEATURE-IMAGE-TEMPLATE-5-2 (1).png",
        "/SlidersImages/WomanShirt/horizontal-portrait-beautiful-girl-white-shirt-closeup-99827879.jpg",
        "/SlidersImages/WomanShirt/How-can-I-wear-horizontal-stripes-if-I-have-a-curvy-figure-1-1024x683.jpg",
        "/SlidersImages/WomanShirt/jenny_horizontal (1).jpg",
        "/SlidersImages/WomanShirt/outdoor-horizontal-shot-of-pretty-african-woman-in-striped-shirt-and-red-pants-enjoying-her-lunch-time-posing-with-a-croissant-leaning-on-the-wall-2CX2CYA.jpg",
        "/SlidersImages/WomanShirt/Portada_Horizontal_romantic.jpg",
        "/SlidersImages/WomanShirt/Wearing-Stripes-According-to-Your-Body-Type-Explained-1024x576.jpg",
        "/SlidersImages/WomanShirt/What-types-of-horizontal-stripes-work-best-for-a-formal-setting-1024x683.jpg",
      ],
      "Sport-shoes": [
        "/SlidersImages/WomanShoes/NYFW-2016-Sneakers-Street-Style.jpg",
        "/SlidersImages/WomanShoes/purple-blue-female-sportive-running-shoes-pink-background-fashion-training-footwear-workout-gym-shoes-woman-national-368675020.jpg",
        "/SlidersImages/WomanShoes/women-s-skechers-sneakers-brick-sidewalk-sports-walking-shoes-368880638.jpg",
        "/SlidersImages/WomanShoes/young-girl-wearing-jeans-tying-shoelaces-sneakers-standing-green-grass-side-view-close-up-horizontal-photo-sunny-day-132344254.jpg",
        "/SlidersImages/WomanShoes/young-woman-walking-park-sports-shoes-health-wear-92527386.jpg",
      ],
    }


  }




const mainKey = Object.keys(categoryImages).find(
  (k) => k.toLowerCase() === (categoryKey || "").toLowerCase()
);

  let images = [];

  if (mainKey) {
    const section = categoryImages[mainKey];

    if (Array.isArray(section)) {
 
      images = section;
    } else if (subItem) {
      const subKey = Object.keys(section).find(
        (k) => k.toLowerCase().replace(/\s+/g, "-") === subItem.toLowerCase()
      );
      if (subKey) images = section[subKey];
    }
  }

  if (images.length === 0) images = forPromotionImages; 
  return (
    <>
      <Swiper pagination={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] rounded-xl bg-stone-100"
      >
        {

          images.map((item, key) => (

            <SwiperSlide className='' key={key}><img className='p-2 h-full w-full object-contain  bg-center ' src={item} alt="" /></SwiperSlide>


          ))

        }


      </Swiper>
    </>
  );
}


