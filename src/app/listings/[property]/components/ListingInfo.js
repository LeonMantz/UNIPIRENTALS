"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import { useRouter } from "next/navigation";

export default function ListingsInfo({ params }) {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const imageUrls = [];

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const id = params.property;
      try {
        const response = await fetch("/api/oneListing", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        const listing = await response.json();
        setListing(listing);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative max-w-full ">
        <Swiper navigation className="h-[34rem] w-[60%] max-w-[1400px] mx-auto">
          {listing
            ? listing.pictures.map((url) => (
                <SwiperSlide key={url}>
                  <div
                    className="h-full w-full"
                    style={{
                      background: `url(${url}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </SwiperSlide>
              ))
            : imageUrls.map((url) => (
                <SwiperSlide key={url}>
                  <div
                    className="h-full w-full"
                    style={{
                      background: `url(${url}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <div className="w-full flex flex-col items-center py-12">
        <div className="flex w-[60%] max-w-[1400px]">
          {listing ? (
            <>
              <div className="w-full">
                <div className=" flex justify-between w-full">
                  <div className="text-3xl font-extralight ">
                    {listing?.propertyCategory + ", " + listing?.surface + "m²"}
                  </div>
                </div>

                <div className="text-small text-gray-600">{listing?.area}</div>

                <div className="text-4xl font-bold text-gray-900 mt-8">
                  €{listing?.price.toLocaleString()}
                </div>
            
                <div className="text-large mt-12 text-gray-500">
                  {listing?.description}
                </div>

                {listing && (
                  <div className=" w-full ">
                    <div className="text-2xl font-semibold mb-4">Features</div>
                    <div className="overflow-auto border rounded-lg shadow">
                      <table className="min-w-full text-left bg-white">
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100 w-1/3">
                              Price
                            </td>
                            <td className="py-2 px-4 border-b">
                              €{listing.price.toLocaleString()}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              Price per m²
                            </td>
                            <td className="py-2 px-4 border-b">
                              €{(listing.price / listing.surface).toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              Surface
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing.surface}m²
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              Bedrooms
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing.numberOfBedrooms}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              Bathrooms
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing.numberOfBathrooms}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              Construction Year
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing.dateOfConstruction}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              Area
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing.area}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              System code
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing._id}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              Availability
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing.availability}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b bg-gray-100">
                              First published
                            </td>
                            <td className="py-2 px-4 border-b">
                              {listing.dateOfUpload.split("T")[0]}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-3xl font-extralight mb-4">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
}

