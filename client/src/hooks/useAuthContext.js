const { useContext } = require("react");
const { AuthContext } = require("../context/AuthContext.js");

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "useAuthContext must be used inside an WorkoutsContextProvider"
    );
  }
  return context;
}
