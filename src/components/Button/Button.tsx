import { Link } from "react-router-dom";

interface Props {
  label: string;
  path: string;
  borderR: string;
}

const Button = ({ borderR, label, path }: Props) => {
  return (
    <Link to={`/${path}`}>
      <p
        className={`bg-primary text-center text-white w-full ${borderR} p-4 shadow`}
      >
        {label}
      </p>
    </Link>
  );
};

export default Button;
