import { Redirect, Route, RouteProps } from 'react-router'

const PrivateRooter = (props: RouteProps) => {
    const isLogged = (!!localStorage.getItem('client-logado'))       
    return isLogged ? <Route {...props} /> : <Redirect to='/page-admin' />
}

export default PrivateRooter;

