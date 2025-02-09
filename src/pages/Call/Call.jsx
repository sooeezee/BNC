import { useEffect, useState } from 'react';
import companyImage from '../../assets/LOGOS.jpg';

export default function Calls() {
  const [companyInfo, setCompanyInfo] = useState({
    name: 'BnC Computech Trading',
    mission: 'Cheap, Reliable and Quick',
    paragraph: 'Discover top quality computers at unbeatable prices where affordability meets reliability. Get the latest tech with fast shipping and excellent customer support, ensuring a seamless shopping experience every time.',
    address: 'V.Albano, Mandaue City, Cebu',
    phone: '12345567',
    email: 'contact@techsolutions.com',
    facebook: 'https://facebook.com/BnCComputech',
    instagram: 'https://instagram.com/BnCComputech',
  });

  useEffect(() => {
    document.title = 'BNC';
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Company Image */}
        <div className="w-full md:w-1/3">
          <img src={companyImage} alt="Company" className="rounded-lg shadow-lg" />
        </div>

        {/* Company Details */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white md:text-left">{companyInfo.name}</h2>
          <p className="mt-12 text-lg text-gray-700 font-bold dark:text-gray-300">{companyInfo.mission}</p>
          <p className="mt-5 text-gray-500 dark:text-gray-400">{companyInfo.paragraph}</p>
          <p className="mt-7 text-gray-900 font-bold dark:text-gray-700">{companyInfo.address}</p>

          <div className="mt-9 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Us</h3>
        <div className="flex justify-center gap-6 mt-6">
          <a href={`tel:${companyInfo.phone}`} className="text-green-600 text-2xl hover:text-green-700">
            <i className="fas fa-phone"></i>
          </a>
          <a href={`mailto:${companyInfo.email}`} className="text-blue-600 text-2xl hover:text-blue-700">
            <i className="fas fa-envelope"></i>
          </a>
          <a href={companyInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-800">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-pink-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>


        </div>
      </div>

      {/* Contact Information */}
      
    </div>
  );
}
