import './header.scss';
export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="logo">
                    <img src="" alt="logo" className="img" />
                </div>
                <ul className="header__nav--list">
                    <li className="links">home</li>
                    <li className="links">about</li>
                    <li className="links">support</li>
                </ul>
                {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
            </nav>
        </header>
    )
}