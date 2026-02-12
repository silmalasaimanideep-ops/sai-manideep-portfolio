import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

const CertificateCard = ({ image, title, issuer, year, link }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#161717] border border-gray-800 rounded-xl overflow-hidden hover:border-primary hover:-translate-y-2 transition">
        <div
          onClick={() => setOpen(true)}
          className="bg-black flex items-center justify-center h-48 cursor-pointer"
        >
          <img
            src={image}
            alt={title}
            className="max-h-full object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="font-semibold text-lg">{title}</h3>

          <p className="text-sm text-gray-400 mt-1">
            {issuer} • {year}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setOpen(true)}
              className="text-sm text-primary hover:underline"
            >
              View Preview
            </button>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-gray-800 px-4 py-2 rounded hover:bg-primary hover:text-black transition"
            >
              Verify <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">

          <div className="bg-[#141515] border border-gray-800 rounded-xl p-6 max-w-2xl w-full relative">


            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={22} />
            </button>

            <img
              src={image}
              alt={title}
              className="rounded-md max-h-[55vh] mx-auto object-contain"
            />


            <div className="flex justify-between items-center mt-6">
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-400">
                  {issuer} • {year}
                </p>
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm bg-gray-800 px-4 py-2 rounded hover:bg-primary hover:text-black transition"
              >
                Verify Certificate
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
