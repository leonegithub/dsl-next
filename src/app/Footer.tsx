import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      {/* Widgets - Bootstrap Brain Component */}
   {/*    <section className="py-4 py-md-5 py-xl-6 py-xxl-8">
        <div className="container ">
          <div className="row gy-3">
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Services</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={"/services/downloads"}>Downloads</Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/services/newlist`}>Newlist</Link>
                  </li>
                  { <li className="mb-1">
                    <Link href={`/services/customer-support`}>
                      Customer support
                    </Link>
                  </li>}
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Scientific publications</h4>
                <ul className="m-0 list-unstyled">
                  <Link className="mb-1" href={`/products/publications`}>
                    Orthodontics
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="link-wrapper">
                <h4 className="mb-3 fw-bold">Quality</h4>
                <ul className="m-0 list-unstyled">
                  <li className="mb-1">
                    <Link href={`/quality/safety-sheets`}>Safety sheets</Link>
                  </li>
                  <li className="mb-1">
                    <Link href={`/quality/quality-system`}>Quality system</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Social Media - Bootstrap Brain Component */}
      <div className="py-4">
        <div className="container">
          <div className="row align-items-sm-center gy-3">
            <div className="col-12 col-sm-6">
              <div className="link-wrapper" style={{ color: "white" }}>
                <strong>Leone S.p.A.</strong>
                <br />
                Via P. a Quaracchi 50, <br />
                50019 Sesto Fiorentino (FI)
                <br />
                <span style={{textDecoration: "underline"}}>info@dsleone.it
                <br />
                  +39 055 019901
                  </span>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="social-media-wrapper text-4xl">
                <ul className="m-0 socials-list list-unstyled d-flex justify-content-sm-end gap-3 gap-xl-4">
                  <li>
                    <Link
                      className="pe-3 link-opacity-75-hover "
                      href={`https://www.instagram.com/digitalserviceleone/`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 link-opacity-75-hover "
                      href={`https://www.facebook.com/DigitalServiceLeone/`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-square-facebook"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="ps-3 link-opacity-75-hover "
                      href={`https://it.linkedin.com/company/digital-service-leone`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      


      {/* Privacy Policy & Cookie Policy Section */}
      <div>
        <div className="container">
          <div className="row py-3">
            <div className="col-12 col-md-6">
              <div className="text-center text-md-start">
                <div style={{ color: "rgba(255,255,255,0.8)" }}>
                  © {new Date().getFullYear()} Leone S.p.A. Tutti i diritti riservati.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-center text-md-end">
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-3 m-0">
                  <li>
                    <Link 
                      href="/privacy-policy" 
                      className="text-decoration-none"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      <div>Privacy Policy</div>
                    </Link>
                  </li>
                  <li>
                    <div style={{ color: "rgba(255,255,255,0.5)" }}>|</div>
                  </li>
                  <li>
                    <Link 
                      href="/cookie-policy" 
                      className="text-decoration-none"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <div style={{ color: "rgba(255,255,255,0.5)" }}>|</div>
                  </li>
                  <li>
                    <Link 
                      href="/terms" 
                      className="text-decoration-none"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      Termini e Condizioni
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}