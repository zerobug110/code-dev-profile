import './footer.scss'

export const Footer = () => {
    const footerYear = new Date().getFullYear();
    return (
        <p className='footer'>copyRight &copy; {footerYear} All Right reserved</p>
    )
}