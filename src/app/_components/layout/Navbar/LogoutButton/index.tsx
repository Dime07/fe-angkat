import Button from "@/app/_components/Button";
import logout from "../action";

const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        logout();
        localStorage.removeItem("user");
      }}
      variant="secondary"
    >
      <span>Logout</span>
    </Button>
  );
};

export default LogoutButton;
