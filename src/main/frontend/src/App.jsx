import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/approuter.jsx";
import { AuthProvider } from "./providers/authProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
