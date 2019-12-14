import React from 'react'

const Footer = () => {
    return (
        <div>
            <hr style={hrStyle} />
            <footer style={footerStyle}>
                FilipeGundim <br />
                © - All Rights Reserveds
            </footer>
        </div>
    )
}

export default Footer;

const hrStyle = {
    marginLeft: '30%',
    marginRight: '30%'
}

const footerStyle = {
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '20px'
}