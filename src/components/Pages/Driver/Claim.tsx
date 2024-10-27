import { useState } from "react";
import NewClaim from "./NewClaim";

interface Request {
  id: number;
  type: string;
  status: string;
  submitted: string;
}

const request: Request[] = [
  { id: 23, type: "Crash", status: "Submitted", submitted: "Sep 15 2024" },
  { id: 42, type: "Explode", status: "Submitted", submitted: "Jun 5 2024" },
  {
    id: 12,
    type: "Fallen from Cliff",
    status: "Submitted",
    submitted: "Jul 1 2024",
  },
];

const Claim = () => {
  const [active, setActive] = useState<string>("request");

  return (
    <div className="mt-6">
      <div className="flex justify-between my-7">
        <p
          onClick={() => setActive("request")}
          className={`text-sm ${active !== "request" && "text-blue-500"}`}
        >
          Requested Claims
        </p>
        <p
          onClick={() => setActive("claim")}
          className={`text-sm ${active !== "claim" && "text-blue-500"}`}
        >
          Submit New Claims
        </p>
      </div>

      {/*  */}
      <div className="mt-5">
        {active === "request" &&
          request.map((r) => (
            <div key={r.id} className="rounded-lg bg-secondary shadow mb-5 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-700">Claim Id</p>
                  <p className="font-bold mt-1">{r.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Incident Type</p>
                  <p className="font-bold mt-1">{r.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Status</p>
                  <p className="font-bold mt-1">{r.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Submitted Date</p>
                  <p className="font-bold mt-1">{r.submitted}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Action</p>
                  <p className="font-bold text-blue-600">View Details</p>
                </div>
              </div>
            </div>
          ))}

        {active === "claim" && <NewClaim />}
      </div>
    </div>
  );
};

export default Claim;
