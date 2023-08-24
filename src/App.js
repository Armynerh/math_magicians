import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'components/Home';
import Calcrender from 'components/Calcrender';
import QuoteRender from 'components/QouteRender';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calcrender />} />
        <Route path="quote" element={<QuoteRender />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Route>
    </Routes>
  );
}

export default App;
