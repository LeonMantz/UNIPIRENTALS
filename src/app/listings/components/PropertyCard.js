import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

export default function PropertyCard({ property }) {
  const detailsUrl = `/listings/${property._id}`;

  return (
    <a
      href={detailsUrl}
      className="relative flex w-full bg-white shadow-lg rounded-xl mt-4 mb-4 border-1 hover:shadow-2xl transition-shadow duration-300 h-56"
    >
      <img
        className="w-1/3 object-cover rounded-l-xl"
        src={property.pictures[0]}
        alt="Property Photo"
      />
      <div className="w-2/3 p-4">
        <div className="text-lg font-bold">
          {property.propertyCategory}, {property.surface}m²
        </div>
        <p className="text-sm">{property.area}</p>
        <p className="text-gray-400 mt-2 truncate h-1/4 w-[90%]">
          {property.description}
        </p>

        <div className="flex items-center text-gray-400 mt-3 space-x-4">
          <BedOutlinedIcon className="mb-1 text-md" />
          {property.numberOfBedrooms}
          <BathtubOutlinedIcon className="mb-1 text-md" />
          {property.numberOfBathrooms}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-xl font-bold text-gray-900">
            €{property.price.toLocaleString()}
          </div>
          <div className="text-xs text-gray-600 mt-2">
            Updated: {new Date(property.dateOfUpload).toLocaleDateString()}
          </div>
        </div>
      </div>
    </a>
  );
}
