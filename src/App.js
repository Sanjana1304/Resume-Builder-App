import EducationDeets from './formComponents/EducationDeets';
import PersonalDeets from './formComponents/PersonalDeets';
import ProjectDeets from './formComponents/ProjectDeets';
import ResultPage from './formComponents/ResultPage';
import TemplateChoice from './formComponents/TemplateChoice';
import WorkDeets from './formComponents/WorkDeets';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
   
    <div className="App">
      <DataProvider>
      <header className="bg-green p-3 text-white sticky-top">
        <h1>Resume Builder</h1>
        <p>Craft Your Resume Effortlessly !</p>
      </header>

      <Routes>
          <Route path='/' element={<PersonalDeets/>} />
          <Route path='/edu' element={<EducationDeets/>}/>
          <Route path='/work' element={<WorkDeets/>}/>
          <Route path='/proj' element={<ProjectDeets/>}/>
          <Route path='/template' element={<TemplateChoice/>}/>
          <Route path='/result' element={<ResultPage/>}/>
      </Routes>

      </DataProvider>
    </div>
   
  );
}

export default App;
