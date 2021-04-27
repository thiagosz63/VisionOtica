import { Redirect, Route, RouteProps } from 'react-router'

const PrivateRooterAdmin = (props: RouteProps) => {
    const isLogged = (!!localStorage.getItem('admin-logado'))       
    return isLogged ? <Route {...props} /> : <Redirect to='/loguin' />
}

export default PrivateRooterAdmin;

