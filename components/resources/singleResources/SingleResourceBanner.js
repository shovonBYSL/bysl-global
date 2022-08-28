import Image from "next/image";

import { TextGradient } from "../../shared/SharedTextgroups";

const SingleResourceBanner = ({ data }) => {
  return (
    <div className="h-max xl:max-h-[760px] w-full bg-[url('/images/resources/single/single_resource_banner_small.svg')] md:bg-[url('/images/resources/single/single_resource_banner.svg')] bg-cover bg-center bg-no-repeat">
      <div className="box md:flex gap-6 py-10 xl:py-16">
        <div className="md:w-1/2 md:order-2 w-full mx-auto">
          <Image
            src="/images/resources/single/resource_banner_img.svg"
            height={741}
            width={724}
            alt=""
          />
        </div>
        <div className="md:w-1/2 md:order-1">
          <p className="break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-semibold text-gray-800 md:text-start text-center sm:mt-10 mb-4 md:mb-6 xl:mb-8 3xl:mb-10">
            Meeting Room&nbsp;
            <br className="hidden sm:block" />
            Booking Software
          </p>
          <p className="text-gray-500 text-sm 2xl:text-base mb-10 xl:mb-16 text-center sm:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque
            pellentesque adipiscing pulvinar eu vitae eget eu. Vitae risus eget
            malesuada massa mauris. Porttitor platea hendrerit nibh urna
            ultricies non vel. Sagittis ac id morbi luctus pulvinar volutpat
            egestas viverra et. Viverra adipiscing sit viverra id sagittis
            neque. Orci volutpat sed tincidunt faucibus.
            <br />
            <br />
            Egestas nulla ullamcorper cras congue neque, sagittis ac nulla.
            Mattis consectetur velit diam proin massa congue viverra gravida
            adipiscing. Erat quam justo, convallis urna tellus arcu, orci.
            Faucibus fermentum, donec commodo ultricies ut dolor. Pellentesque
            libero nullam duis tellus faucibus porttitor. Amet id ac fusce
            pharetra, massa.
          </p>
          <div className="flex gap-16">
            {data.map(({ id, title, subTitle }) => {
              return (
                <div key={id}>
                  <p className="text-gray-800 font-bold mb-1 text-sm 2xl:text-base">
                    {title}
                  </p>
                  <p className="text-sm 2xl:text-base">
                    <TextGradient text={subTitle} bold={true} />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResourceBanner;
