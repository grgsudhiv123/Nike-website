import {footerLogo} from "../assets/images"
import {facebook,twitter,instagram,copyrightSign} from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto">
      <div className="flex flex-col">
            <div className="flex flex-1 justify-between items-start gap-20 flex-wrap max-lg:flex-col max-lg:items-center mb-10">
              <div className="flex-1 flex flex-col items-start text-slate-300">
                <img src={footerLogo} alt="footer-logo" width={100} height={100} className="object-contain"/>
                <p className=" mt-5 text-balanced font-montserrat text-sm">
                  Step into comfort, step into style, Shop now and get your perfect fit.
                </p>
                <div className="mt-5 flex flex-1 justify-start items-start gap-5">
                  <div className="bg-white rounded-lg">
                    <img src={facebook} alt="facebook-logo" width={25} height={25} className="object-contain"/>
                  </div>
                  <div className="bg-white rounded-lg">
                    <img src={twitter} alt="twitter-logo" width={25} height={25} className="object-contain"/>
                  </div>
                  <div className="bg-white rounded-lg">
                    <img src={instagram} alt="instagram-logo" width={25} height={25} className="object-contain"/>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-start text-slate-300">
                <h1 className="text-2xl font-palanquin text-white">Products</h1>
                <p className="mt-5 font-montserrat text-sm leading-4">Air Force 1</p>
                <p className="mt-5 font-montserrat text-sm leading-4">Air Max 1</p>
                <p className="mt-5 font-montserrat text-sm leading-4">Air Jordan 1</p>
                <p className="mt-5 font-montserrat text-sm leading-4">Air Force 2</p>
                <p className="mt-5 font-montserrat text-sm leading-4">Nike Waffle Racer</p>
                <p className="mt-5 font-montserrat text-sm leading-4">Nike Cortez</p>
              </div>

              <div className="flex-1 flex flex-col items-start text-slate-300">
                <h1 className="text-2xl font-palanquin text-white">Help</h1>
                <p className="mt-5 font-montserrat text-sm leading-4">About Us</p>
                <p className="mt-5 font-montserrat text-sm leading-4">FAQs</p>
                <p className="mt-5 font-montserrat text-sm leading-4">How it works</p>
                <p className="mt-5 font-montserrat text-sm leading-4">Privacy Policy</p>
                <p className="mt-5 font-montserrat text-sm leading-4">Payment Policy</p>
              </div>

              <div className="flex-1 flex flex-col items-start text-slate-300">
                <h1 className="text-2xl font-palanquin text-white">Get in touch</h1>
                <p className="mt-5 font-montserrat text-sm leading-4">customer@nike.com</p>
                <p className="mt-5 font-montserrat text-sm leading-4">+92554862354</p>
              </div>
            </div>

            <div className="absolute flex text-slate-300 bottom-3 justify-center items-center gap-1">
              <img src={copyrightSign} alt="copyright" className="w-4 h-4 object-contain"/>
              <p className="text-sm">Copyright.All rights reserved.</p>
            </div>
      </div>
    </footer>
  )
}

export default Footer





