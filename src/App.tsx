import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { NancyEffectPage } from './pages/NancyEffectPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { ResultsPage } from './pages/ResultsPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { FinancingPage } from './pages/FinancingPage';
import { BookingPage } from './pages/BookingPage';
import { SiteLayout } from './layouts/SiteLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/the-nancy-effect" element={<NancyEffectPage />} />

          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route
          path="/treatments/:slug"
          element={<TreatmentDetailPage />}
          />

          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/book" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;