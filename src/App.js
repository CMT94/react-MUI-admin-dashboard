import { Routes, Route } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { ProSidebarProvider } from "react-pro-sidebar";

import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import ProfileForm from "./scenes/profile-form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<ProfileForm />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
