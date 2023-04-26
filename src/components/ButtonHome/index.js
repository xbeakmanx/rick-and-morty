import { ButtonOutline } from "components";
import { useNavigate } from "react-router-dom";

export default function ButtonHome() {
  const navigate = useNavigate();
  return (
    <ButtonOutline
      className="absolute left-5 top-20"
      onClick={() => navigate("/")}
    >
      Home
    </ButtonOutline>
  );
}
