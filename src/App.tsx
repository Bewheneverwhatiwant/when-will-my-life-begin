import './RecetCss.tsx'
import Container from './components/Container.tsx';
import CustomColumn from './components/CustomColumn.tsx';

import Header from './maincomponents/header.tsx';
import Profile from './maincomponents/profile.tsx';
import JobAndTool from './maincomponents/jobAndTool.tsx';
import Awards from './maincomponents/awards.tsx';
import Clubs from './maincomponents/clubs.tsx';

function App() {

  return (
    <Container>
      <CustomColumn $width='100%' $alignitems='center' $justifycontent='flex-start'>
        <Header />
        <Profile />
        <JobAndTool />
        <Awards />
        <Clubs />
      </CustomColumn>
    </Container>
  )
}

export default App
