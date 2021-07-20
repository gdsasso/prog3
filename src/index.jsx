import React from 'react';
import ReactDOM from 'react-dom';
import ArticleContainer from './components/ArticleContainer';
import { Title, Paragraph, EnNegrita, DeColorRojo } from './components/TextFormat';

function App() {
  return (
    <ArticleContainer>
      <Title>
        Hola <i>Mundo</i>!
      </Title>
      <Paragraph>
        Párrafo de Mi Artículo
        <EnNegrita>
          <DeColorRojo>Importante</DeColorRojo>
        </EnNegrita>!
      </Paragraph>
    </ArticleContainer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);