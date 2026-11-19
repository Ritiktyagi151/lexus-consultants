import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, FloatingActions } from "./components/Layout";
import { ScrollProgress } from "./components/motion";
import { ScrollToTop } from "./components/Page";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { LabourLawsPage } from "./pages/LabourLawsPage";
import { FaqsPage } from "./pages/FaqsPage";
import { ContactPage } from "./pages/ContactPage";
import { CareersPage } from "./pages/CareersPage";
import { LocationsPage } from "./pages/LocationsPage";
import { CalendarPage } from "./pages/CalendarPage";
import { LegalPage } from "./pages/LegalPage";
import { LabourLawConsultantsPage } from "./pages/LabourLawConsultantsPage";
import { PageLoader } from "./components/PageLoader";

export default function App() {
  return (
    <>
      <PageLoader />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Header />
        <main className="overflow-x-clip">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/labour-law-consultants" element={<LabourLawConsultantsPage />} />
            <Route path="/labour-laws" element={<LabourLawsPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/privacy" element={<LegalPage kind="privacy" />} />
            <Route path="/terms" element={<LegalPage kind="terms" />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </BrowserRouter>
    </>
  );
}
