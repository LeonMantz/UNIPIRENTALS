"use client";

import { Suspense } from "react";
import ListingsGallery from "../components/ListingsGallery";
import { Spinner } from "@nextui-org/react";


export default function PropertyDisplay({
  listings,
  filteredListings,
  name,
  markersList,
  lat,
  lng,
  loading,
}) {
  return (
    <div
      className="flex w-full"
      style={{
        maxHeight: "calc(100vh - 204px)",
        minHeight: "calc(100vh - 204px)",
      }}
    >
      <Suspense fallback={<Spinner size="lg" />}>
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <Spinner size="lg" />
          </div>
        ) : (
          <>
            <div className="w-full min-w-[35%]">
              <ListingsGallery
                data={filteredListings}
                name={name}
              />
            </div>

            {/*
            <div className="w-full h-full">
              <Map lat={lat} lng={lng} markers={markersList} />
            </div>
            */}
          </>
        )}
      </Suspense>
    </div>
  );
}

