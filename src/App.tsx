import './RecetCss.tsx'
import Container from './components/Container.tsx';
import CustomFont from './components/CustomFont.tsx';

function App() {

  return (
    <Container>
      <CustomFont $color='blue' $font='1rem'>홈화면!</CustomFont>
    </Container>
  )
}

export default App
