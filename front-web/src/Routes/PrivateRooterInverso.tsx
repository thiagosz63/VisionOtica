
import { Redirect, Route, RouteProps } from 'react-router'

function PrivateRooterInverso(props: RouteProps) {
    const isLogged = (!! !localStorage.getItem('client-logado')) ||
        (!! !localStorage.getItem('admin-logado'));
    return isLogged ? <Route {...props} /> : <Redirect to='/page-user' />
}

export default PrivateRooterInverso;

