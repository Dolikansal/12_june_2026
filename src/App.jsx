import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/homepage"
import Wish from './pages/wish';
import Description from './pages/description';
import MemoriesPage from './pages/memories';
import FirstMeet from './pages/firstmeet';
import PartyPage from './pages/parties';
import BirthdayVibes from './pages/birthday';
import AmritsarVisit from './pages/amritsar';
import GeetaJayanti from './pages/sarovar';
import MovieNight from './pages/movie';
import GroupGatherings from './pages/gather';
import HoliSpecial from './pages/holi';
import BeautyWithBrain from "./pages/beauty"
import VideoCallPage from "./pages/video"
import SankalpPage from "./pages/sankalp"
import SelfieJoyPage from "./pages/selfie"
import LateNightOuting from "./pages/outing"
import CollegeFests from "./pages/excel"
import LittleAchievements from "./pages/achive"
import GeetaJayanti2 from "./pages/geeta";
import WeekendMemories from "./pages/weekend"
import CollegeDays from './pages/uiet';
import HostelMasti from "./pages/hostel";
import Capture from "./pages/capture"
import FinalGift from './pages/finalgift';
import WishPage from './pages/pleasure';
function App(){
  return (
    <Router basename="/12_june_2026">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/description" element={<Description></Description>}></Route>
        <Route path='/memories' element={<MemoriesPage />}></Route>
        <Route path="/first-meet" element={<FirstMeet />} />
        <Route path="/party" element={<PartyPage></PartyPage>}></Route>
        <Route path="/birthday-vibes" element={<BirthdayVibes />} />
        <Route path="/amritsar-trip" element={<AmritsarVisit></AmritsarVisit>}></Route>
        <Route path="/sarovar" element={<GeetaJayanti></GeetaJayanti>}></Route>
        <Route path="/movies" element={<MovieNight></MovieNight>}></Route>
        <Route path='/gather' element={<GroupGatherings></GroupGatherings>}></Route>
        <Route path="/holi" element={<HoliSpecial></HoliSpecial>}></Route>
        <Route path='/beauty' element={<BeautyWithBrain></BeautyWithBrain>}></Route>
        <Route path="/video" element={<VideoCallPage></VideoCallPage>}></Route>
        <Route path="/sankalp" element={<SankalpPage />} />
        <Route path="/selfie" element={<SelfieJoyPage />} />
        <Route path="/outing" element={<LateNightOuting />} />
        <Route path='/excel' element={<CollegeFests></CollegeFests>}></Route>
        <Route path="/achive" element={<LittleAchievements></LittleAchievements>}></Route>
        <Route path="/geeta" element={<GeetaJayanti2></GeetaJayanti2>}></Route>
        <Route path='/week' element={<WeekendMemories></WeekendMemories>}></Route>
        <Route path='/uiet' element={<CollegeDays></CollegeDays>}></Route>
        <Route path='/hostel' element={<HostelMasti></HostelMasti>}></Route>
        <Route path='/capture' element={<Capture></Capture>}></Route>
        <Route path='/pleasure' element={<WishPage></WishPage>}></Route>
        <Route path='/next-page' element={<FinalGift></FinalGift>}></Route>
      </Routes>
    </Router>
  );
}

export default App;