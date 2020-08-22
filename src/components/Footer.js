import React from 'react'

 const Footer = () => {
     const year = new Date().getFullYear()
    return (
       
<footer className="page-footer font-small bg-dark mt-5">

  
  <div className="footer-copyright text-center py-3 text-white">© {year == '2020' ? year : '2020 - ' + year} Sergey Motaylenko
  </div>
  

</footer>
    )
}

export default Footer
