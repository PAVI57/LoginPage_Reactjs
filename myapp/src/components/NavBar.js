export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">LoginPage_React</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a className="nav-link" href="/register">Register</a></li>
                    <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                    <li className="nav-item"><a className="nav-link" href="/dashboard">Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="/logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
