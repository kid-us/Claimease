import Button from "../../Button/Button";

const NewClaim = () => {
  return (
    <>
      <div className="relative lg:grid md:grid grid-cols-11">
        {/* Upload */}
        <div className="flex my-5 justify-between">
          <p className="text-black font-poppins text-xl font-bold">
            Submit new Claim
          </p>
        </div>
        <form className="mt-5">
          <div className="lg:grid grid-cols-2 gap-x-10">
            {/* Name */}
            <div className="">
              <label htmlFor="name" className="text-gray-800 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className={`focus:outline-none px-4 h-12 rounded-lg shadow border border-gray-500 text-md w-full my-2`}
              />
            </div>

            {/* Incident */}
            <div className="">
              <label htmlFor="Incident" className="text-gray-800 text-sm">
                Incident Type
              </label>
              <input
                type="text"
                name="Incident"
                className={`focus:outline-none px-4 h-12 rounded-lg shadow border border-gray-500 text-md w-full my-2`}
              />
            </div>

            {/* Description */}
            <div className="">
              <label htmlFor="price" className="text-gray-800 text-sm">
                Description
              </label>
              <textarea
                name="description"
                className={`focus:outline-none p-2 h-24 rounded-lg shadow border border-gray-500 text-md w-full my-2`}
              />
            </div>

            {/* Insurance Certificate */}
            <div className="">
              <label htmlFor="party-info" className="text-gray-800 text-sm">
                Insurance Certificate
              </label>

              <input
                type="file"
                className={`pt-2 ps-2 w-full bg-white
                   rounded h-12 shadow mb-3 border border-gray-500 mt-2`}
                accept="image/*"
                name="upload-file"
              />
            </div>

            {/* Driver License */}
            <div className="">
              <label htmlFor="party-info" className="text-gray-800 text-sm">
                Driver License
              </label>

              <input
                type="file"
                className={`pt-2 ps-2 w-full bg-white
                   rounded h-12 shadow mb-3 border border-gray-500 mt-2`}
                accept="image/*"
                name="upload-file"
              />
            </div>

            {/* Log Book */}
            <div className="">
              <label htmlFor="party-info" className="text-gray-800 text-sm">
                Log Book
              </label>

              <input
                type="file"
                className={`pt-2 ps-2 w-full bg-white
                   rounded h-12 shadow mb-3 border border-gray-500 mt-2`}
                accept="image/*"
                name="upload-file"
              />
            </div>

            {/* Police Report */}
            <div className="">
              <label htmlFor="party-info" className="text-gray-800 text-sm">
                Police Report
              </label>

              <input
                type="file"
                className={`pt-2 ps-2 w-full bg-white
                   rounded h-12 shadow mb-3 border border-gray-500 mt-2`}
                accept="image/*"
                name="upload-file"
              />
            </div>

            {/* Damage Estimate (optional) */}
            <div className="">
              <label htmlFor="party-info" className="text-gray-800 text-sm">
                Damage Estimate (optional)
              </label>

              <input
                type="file"
                className={`pt-2 ps-2 w-full bg-white
                   rounded h-12 shadow mb-3 border border-gray-500 mt-2`}
                accept="image/*"
                name="upload-file"
              />
            </div>

            {/* Third Party Name */}
            <div className="">
              <label htmlFor="party" className="text-gray-800 text-sm">
                Third Party Name (If Applicable)
              </label>
              <input
                type="number"
                name="party"
                className={`focus:outline-none px-4 h-12 rounded-lg shadow border border-gray-500 text-md w-full my-2`}
              />
            </div>

            {/* Third Party Info */}
            <div className="">
              <label htmlFor="party-info" className="text-gray-800 text-sm">
                Third Party Info
              </label>
              <textarea
                name="party-info"
                className={`focus:outline-none p-2 h-24 rounded-lg shadow border border-gray-500 text-md w-full my-2`}
              />
            </div>

            {/* Upload Supporting Files */}
            <div className="">
              <label htmlFor="party-info" className="text-gray-800 text-sm">
                Upload Supporting Files
              </label>

              <input
                type="file"
                className={`pt-2 ps-2 w-full bg-white
                   rounded h-12 shadow mb-3 border border-gray-500 mt-2`}
                accept="image/*"
                name="upload-file"
              />
            </div>

            {/* Button */}
            <div className="lg:hidden block mt-3 text-center">
              <Button borderR="rounded-lg" type="button" label="Upload" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewClaim;
