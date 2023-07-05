// Aqui Importamos a nossa rota
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Aqui vamos importa as rotas da pastas 
import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/Header';

//Aqui Criamos o nosso componentes de Rotas
//Criamos tambem uma função chamada RoutesApp para depois chamarmos essa função no nosso App.js importando ela lá nesse arquivo
function RoutesApp() {
    return (
        //Aqui trazemos as nossas rotas importadas que temos logo acima tem que ser nessa ordem e também passamos  a "path" que é o caminho da pasta e o "element" que o nome da pasta <Home/> ele renderiza o caminho que importamos na path como explo, na path="/filme/:id" passamos esse id para ele ter acesso a detalhes com o id no casso ex se o usario digitar filme/123 ele vai acessar o id 123 
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;