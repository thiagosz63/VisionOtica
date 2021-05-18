import { Redirect, Route, RouteProps } from 'react-router'

export const PrivateRooterclient = (props: RouteProps) => {
    const isLogged = (!!localStorage.getItem('client-logado')) 
    return isLogged ? <Route {...props} /> : <Redirect to='/page-admin' />
}

export const PrivateRooterAdmin  = (props: RouteProps) => {
    const isLogged = (!!localStorage.getItem('admin-logado')) 
    return isLogged ? <Route {...props} /> : <Redirect to='/loguin' />
}

export const PrivateRooterLoguin  = (props: RouteProps) => {
    const isLogged = (!!!localStorage.getItem('client-logado')) && (!!!localStorage.getItem('admin-logado')) 
    return isLogged ? <Route {...props} /> : <Redirect to='/page-user'/>
}





