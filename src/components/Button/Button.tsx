import { Link } from "react-router-dom";

interface Props {
  label: string;
  path?: string;
  borderR: string;
  type: string;
}

const Button = ({ borderR, label, path, type }: Props) => {
  return (
    <>
      {type === "link" ? (
        <Link to={`/${path}`}>
          <p
            className={`bg-primary text-center text-white w-full ${borderR} p-4 shadow`}
          >
            {label}
          </p>
        </Link>
      ) : (
        <button
          className={`bg-primary text-center text-white w-full ${borderR} p-4 shadow`}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
