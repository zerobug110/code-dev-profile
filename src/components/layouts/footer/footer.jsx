import './footer.css'

export const Footer = () => {
    const footerYear = new Date().getFullYear();
    console.log(footerYear)
    return (
        <p className='footer'>copyRight &copy; {footerYear} All Right reserved</p>
    )
}