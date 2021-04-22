import { History } from '../history';
import './style.css'

function PageUser(){
function logout(){
    localStorage.removeItem('client-logado')
    History.push('/');
}

    return(
        <div>
            <h1>page user</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default PageUser;