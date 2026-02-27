import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Homepage from './components/homepage/Homepage';
import ReportAnIssue from './components/homepage/ReportAnIssue';
import Gallery from './components/gallery/Gallery';

import Donate from './components/donate/Donate';
import Receipt from './components/donate/Receipt';

import Login from './components/admin/auth/Login';
import Contact from './components/contact/Contact';

import Work from './components/work-with-us/Work';
import ScottishHinduAddendum from './components/work-with-us/Pages/ScottishHinduAddendum';
import ViewPdf from './components/work-with-us/Pages/ViewPdf';
import Hinduphobia from './components/work-with-us/Pages/Hinduphobia';
import DharmocracyWorks from './components/work-with-us/Pages/DharmocracyWorks';
import HinduParentCouncil from './components/work-with-us/Pages/HinduParentCouncil';
import YogaClubs from './components/work-with-us/Pages/YogaClubs';
import HinduismEducation from './components/work-with-us/Pages/HinduismEducation';

import Logout1 from './components/admin/auth/Logout1';
import Forget from './components/admin/auth/ForgetRequest'
import JournerySoFar from './components/journey-so-far/JourneySoFar';

import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import AdminReport from "./components/admin/report/AdminReport";
import AdminMantraOfTheMonth from "./components/admin/mantra-of-the-month/AdminMantraOfTheMonth";
import AdminGallery from "./components/admin/pages/gallery/AdminGallery";
import AdminEvents from "./components/admin/pages/events/AdminEvents";
import AdminContactus from "./components/admin/pages/contact-us/AdminContactus";
import AdminHome from "./components/admin/pages/home/AdminHome";
import AdminWorkWithUs from "./components/admin/pages/work-with-us/AdminWorkWithUs";
import AdminWorkWithUs1 from "./components/admin/pages/work-with-us-1/AdminWorkWithUs1";
import Shop from './components/shop/Shop';

import Events from './components/events/Events';
import EventPage from './components/events/EventPage';  
import EventBookingPage from './components/events/EventBookingPage';
import PDFFlipBook from './components/events/PDFFlipBook';

import AdminDonation from './components/admin/pages/donation/AdminDonation';
import AdminLogout from "./components/admin/logout/AdminLogout";

import ShfyPage from "./components/shyf/ShfyPage";
import FutureLeadersForum from './components/shyf/university/FutureLeadersForum';
import NAICpage from './components/shyf/university/NAICpage';
import Internship from './components/shyf/university/Internship';
import SUHS from './components/shyf/university/SUHS';
import Pressrelease from './components/shyf/media/Pressrelease'
import Publication from './components/shyf/media/Publication';
import Media from './components/shyf/media/Media';
import Newsletter from './components/shyf/media/Newsletter';
import Visitlocalmandir from './components/shyf/media/Visitlocalmandir';

import CommingSoon from './components/shop/CommingSoon';
import ScrollToTop from './ScrollToTop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (<> <ScrollToTop /> <Homepage /> </>),
    },
    {
      path: '/report-an-issue',
      element: (<> <ScrollToTop /> <ReportAnIssue /> </>),
    },
    {
      path: '/about-us',
      element: (<> <ScrollToTop /> <Aboutus /> </>),
    },
    {
      path: '/about/media',
      element: (<> <ScrollToTop /> <Media /> </>),
    },
    {
      path: '/about/media/pressrelease',
      element: (<> <ScrollToTop /> <Pressrelease /> </>),
    },
    {
      path: '/about/media/Publication',
      element: (<> <ScrollToTop /> <Publication /> </>),
    },
    {
      path: '/about/media/Visitlocalmandir',
      element: (<> <ScrollToTop /> <Visitlocalmandir /> </>),
    },
    {
      path: '/about/journey-so-far',
      element: (<> <ScrollToTop /> <JournerySoFar /> </>),
    },
    {
      path: '/events',
      element: (<> <ScrollToTop /> <Events /> </>),
    },
    {
      path: '/event/:eventId',
      element: (<> <ScrollToTop /> <EventPage /> </>),
    },
    {
      path: '/event/:eventId/booking',
      element: (<> <ScrollToTop /> <EventBookingPage /> </>),
    },
    {
      path: '/pdf-flip-book/:id',
      element: (<> <ScrollToTop /> <PDFFlipBook /> </>),
    },
    {
      path: '/events/awards',
      element: (<> <ScrollToTop /> <CommingSoon /> </>),
    },
    {
      path: '/gallery',
      element: (<> <ScrollToTop /> <Gallery /> </>),
    },
    {
      path: '/shop',
      element: (<> <ScrollToTop /> <CommingSoon /> </>),
    },
    {
      path: '/comming-soon',
      element: (<> <ScrollToTop /> <CommingSoon /> </>),
    },
    {
      path: '/contactus',
      element: (<> <ScrollToTop /> <Contact /> </>),
    },
    {
      path: '/workwithus',
      element: (<> <ScrollToTop /> <Work /> </>),
    },
    {
      path: '/workwithus/scottish-hindu-addendum',
      element: (<> <ScrollToTop /> <ScottishHinduAddendum /> </>),
    },
    {
      path: '/workwithus/scottish-hindu-addendum/view-pdf',
      element: (<> <ScrollToTop /> <ViewPdf /> </>),
    },
    {
      path: '/workwithus/hinduphobia-legislation',
      element: (<> <ScrollToTop /> <Hinduphobia /> </>),
    },
    {
      path: '/workwithus/dharmocracy-works',
      element: (<> <ScrollToTop /> <DharmocracyWorks /> </>),
    },
    {
      path: '/parent-council',
      element: (<> <ScrollToTop /> <HinduParentCouncil /> </>),
    },
    {
      path: '/workwithus/yoga-clubs',
      element: (<> <ScrollToTop /> <YogaClubs /> </>),
    },
    {
      path: '/workwithus/hinduism-education',
      element: (<> <ScrollToTop /> <HinduismEducation /> </>),
    },
    {
      path: '/shyf',
      element: (<> <ScrollToTop /> <ShfyPage /> </>),
    },
    {
      path: '/shyf/university/FutureLeadersForum',
      element: (<> <ScrollToTop /> <FutureLeadersForum /> </>),
    },
    {
      path: '/shyf/university/NAICpage',
      element: (<> <ScrollToTop /> <NAICpage /> </>),
    },
    {
      path: '/shyf/university/internship',
      element: (<> <ScrollToTop /> <Internship /> </>),
    },
    {
      path: '/shyf/university/SUHS',
      element: (<> <ScrollToTop /> <SUHS /> </>),
    },
    {
      path: '/shyf/media/Newsletter',
      element: (<> <ScrollToTop /> <Newsletter /> </>),
    },
    {
      path: '/donate',
      element: (<> <ScrollToTop /> <Donate /> </>),
    },
    {
      path: '/receipt',
      element: (<> <ScrollToTop /> <Receipt /> </>),
    },
    {
      path: '/login',
      element: (<> <ScrollToTop /> <Login /> </>),
    },
    {
      path: '/forget',
      element: (<> <ScrollToTop /> <Forget /> </>),
    },
    {
      path: '/logout/*',
      element: (<> <ScrollToTop /> <AdminLogout /> </>),
    },
    {
      path: "/admin",
      element: (<> <ScrollToTop /> <AdminDashboard /> </>),
    },
    {
      path: "/dashboard",
      element: (<> <ScrollToTop /> <AdminDashboard /> </>),
    },
    {
      path: "/mantra-of-the-month",
      element: (<> <ScrollToTop /> <AdminMantraOfTheMonth /> </>),
    },
    {
      path: "/report",
      element: (<> <ScrollToTop /> <AdminReport /> </>),
    },
    {
      path: "/admin-pages-home",
      element: (<> <ScrollToTop /> <AdminHome /> </>),
    },
    {
      path: "/admin-gallery",
      element: (<> <ScrollToTop /> <AdminGallery /> </>),
    },
    {
      path: "/admin-events/*",
      element: (<> <ScrollToTop /> <AdminEvents /> </>),
    },
    {
      path: "/admin-contact-us",
      element: (<> <ScrollToTop /> <AdminContactus /> </>),
    },
    {
      path: "/admin-donation/*",
      element: (<> <ScrollToTop /> <AdminDonation /> </>),
    },
    {
      path: "/admin-work-with-us",
      element: (<> <ScrollToTop /> <AdminWorkWithUs /> </>),
    },
    {
      path: "/admin-our-governance",
      element: (<> <ScrollToTop /> <AdminWorkWithUs1 /> </>),
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;