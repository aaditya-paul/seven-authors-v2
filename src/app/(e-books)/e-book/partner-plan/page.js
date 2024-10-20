import Image from "next/image";
import React from "react";
import Logo from "/public/assets/img/logo-white.svg";
import HeroImg from "/public/assets/img/become-a-partner.png";
import Terms from "/public/assets/img/terms.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "@/components/navBar";

//logo

import eyeLogo from "/public/assets/icon/eye.svg";
import videoLogo from "/public/assets/icon/video.svg";
import dollarLogo from "/public/assets/icon/currency.svg";
import security from "/public/assets/icon/secruity.svg";

function Page() {
  return (
    <div className="bg-[#222222]">
      <div class="flex justify-center rounded-b-3xl bg-[#e12f3b] text-white">
        {/* //! navBar */}
        <div class="grid md:grid-cols-2  grid-cols-1 md:w-[120ch] h-auto px-[16px] gap-[24px] py-[24px] lg:h-[60vh] justify-center items-center mt-[px]">
          <div class="flex flex-col gap-[24px] mt-[px]">
            <h1 class="font-bold tracking-wide italic md:text-[32px] text-[24px]">
              Become a Partner and Expand Your Reach
            </h1>
            <h2 class="md:text-[24px] tracking-wide ... italic ... text-[16px]">
              Maximize Your Earning Potential and Reach a Wider Audience
            </h2>
            <a
              href="#"
              class="bg-gray-800 text-white py-2 px-4 rounded-[8px] transition-all hover:bg-red-700 w-fit "
            >
              Become a Partner Now!
            </a>
          </div>

          <div class="flex justify-center  ...">
            <div className=" ">
              <Image
                // fill
                src={HeroImg}
                alt="Image"
                class=" rounded-lg shadow"
                width={"180px"}
                height={"180px"}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        {/* <!-- second part --> */}
        <section class="container text-white mx-auto max-w-screen-xl px-4 py-12 second md:w-[120ch] ">
          <h3 class="text-3xl font-bold mb-8">
            Key Benefits of becoming a partner
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div class="p-7 bg-zinc-800 rounded-[8px] shadow-lg shadow-gray-500/8">
              {/* <i class="fa-regular fa-eye mb-5 text-2xl text-red-600 flex align-left"></i> */}
              <Image src={eyeLogo} className="my-2" alt="" />
              <h4 class="text-[16px] font-semibold text-left">
                Increased Visibility
              </h4>
              <p class="mt-2 text-[12px] text-left">
                Reach a wider audience through our established platform.
              </p>
            </div>

            <div class="p-8 bg-zinc-800 rounded-[8px] shadow-lg shadow-gray-500/8">
              {/* <i class="fa-solid fa-video text-2xl mb-5 text-emerald-400 flex align-left"></i> */}
              <Image src={videoLogo} className="my-2" alt="" />
              <h4 class="text-[16px] font-semibold text-left">
                Brand Exposure
              </h4>
              <p class="mt-2 text-left text-[12px]">
                Increase brand awareness and reach new customers.
              </p>
            </div>
            <div class="p-8 bg-zinc-800 rounded-[8px] shadow-lg shadow-gray-500/8">
              {/* <i class="fa-solid fa-dollar-sign text-2xl mb-5 text-amber-600 flex align-left"></i> */}
              <Image src={dollarLogo} className="my-2" alt="" />
              <h4 class="text-[16px] font-semibold text-left">
                Revenue Generation
              </h4>
              <p class="mt-2 text-left text-[12px]">
                Earn a commission on every e-book sale.
              </p>
            </div>
            <div class="p-8 bg-zinc-800 rounded-[8px] shadow-lg shadow-gray-500/8">
              {/* <i class="fa-solid fa-unlock-keyhole text-2xl mb-5 text-purple-800 flex align-left"></i>
            <FontAwesomeIcon 
             /> */}
              <Image src={security} className="my-2" alt="" />
              <h4 class="text-[16px] font-semibold text-left">
                Trust and Credibility
              </h4>
              <p class="mt-2 text-left text-[12px]">
                Leverage our platform&apos;s trust to enhance your brand.
              </p>
            </div>
          </div>
        </section>
        <div class="flex justify-center">
          {/* <!-- third Section --> */}
          <section class="py-12 w-[120ch] text-white">
            <h3 class="text-3xl font-bold mb-10 container mx-auto max-w-screen-xl">
              Partner Requirements
            </h3>
            <div class="bg-zinc-800 container mx-auto max-w-screen-xl px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 rounded-[8px]">
              <div class="">
                <ul class="space-y-4 flex flex-col gap-[16px]">
                  <li>
                    <strong>Content Quality Standards:</strong> <br />
                    - E-books must be at least 20,000 words in length. <br />
                    - Audiobooks must have a minimum recording quality of 192
                    kbps.
                    <br />- Content must be original, free from plagiarism, and
                    comply with copyright laws.
                  </li>
                  <li>
                    <strong>Copyright Ownership:</strong> <br />
                    - Partners must provide proof of copyright ownership or a
                    licensing agreement for their content. <br />- Content must
                    be free from any third-party claims or restrictions.
                  </li>
                  <li>
                    <strong>Pricing Guidelines:</strong> <br />- Partners are
                    responsible for setting their own prices for their e-books
                    and audiobooks. - Prices should be competitive and in line
                    with industry standards.
                  </li>
                  <li>
                    <strong>Technical Specifications:</strong> <br />
                    - E-books must be submitted in EPUB or MOBI format. <br />
                    - Audiobooks must be submitted in MP3 format. <br />-
                    Metadata fields required include title, author, description,
                    keywords, and cover image.
                  </li>
                  <li>
                    <strong>Marketing and Promotion:</strong> <br />
                    - Partners are encouraged to promote their content on social
                    media and other channels. <br />- The platform will provide
                    marketing support, such as featured listings and email
                    campaigns.
                  </li>
                  <li>
                    <strong>Payment Terms:</strong> <br />
                    - Partners will receive a commission of [percentage] on each
                    sale of their e-books or audiobooks. <br />- Payments will
                    be made [frequency] using [payment method].
                  </li>
                </ul>
              </div>
              {/* <!-- Image --> */}
              <div class="flex justify-center">
                <div className=" ">
                  <Image
                    src={Terms}
                    alt="Partner Image"
                    class="rounded-lg shadow-lg h-full "
                  ></Image>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Page;
