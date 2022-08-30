import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Landing, Error, Register} from './pages';
import {AllJobs, AddJob, Profile, SharedLayout, Stats} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element ={<SharedLayout/>}>
        <Route path="stats" element = {<Stats/>}/>
        <Route path="alljobs" element = {<AllJobs/>}/>
        <Route path="addjob" element = {<AddJob/>}/>
        <Route path="profile" element = {<Profile/>}/> */}
        <Route path="/" element = {<SharedLayout/>}>
        {/* <Route path="stats" element = {<p> test </p>}/> */}
        {/* <Route path="alljobs" element = {<p> alljobs </p>}/> */}
        </Route>
        <Route path="/getStarted" element = {<Landing />}/>
        <Route path="/login" element = {<Register />}/>
        <Route path="*" element = {<Error />}/>
      </Routes>
    </BrowserRouter>
   

  );
}

export default App;
