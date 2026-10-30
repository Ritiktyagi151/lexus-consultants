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
import { InsightsPage, InsightDetailPage } from "./pages/InsightsPage";
import { ContactPage } from "./pages/ContactPage";
import { CareersPage } from "./pages/CareersPage";
import { LocationsPage } from "./pages/LocationsPage";
import { CalendarPage } from "./pages/CalendarPage";
import { LegalPage } from "./pages/LegalPage";
import { LabourLawConsultantsPage } from "./pages/LabourLawConsultantsPage";
import { CalculatorsPage } from "./pages/CalculatorsPage";
import { PageLoader } from "./components/PageLoader";
import { UpdatesAnnouncement } from "./components/UpdatesAnnouncement";

export default function App() {
  return (
    <>
      <PageLoader />
      <BrowserRouter>
        <UpdatesAnnouncement />
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
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
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
