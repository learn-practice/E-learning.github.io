import React from 'react';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div>
        <div className="max-w-4xl mx-auto px-6 py-12 font-libreBaskerville">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">Privacy Policy</h1>
      
      <div className="text-gray-700 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Introduction</h2>
          <p>
            At E-Learning, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your personal data when you use our services. By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Information We Collect</h2>
          <p>
            We collect the following types of information:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Personal Information:</strong> Name, email address, and other contact details when you register or interact with the platform.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website, including the pages you visit and actions you take.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience and track usage patterns on our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc ml-6">
            <li>To provide and improve our services.</li>
            <li>To personalize your learning experience.</li>
            <li>To communicate with you about course updates, promotions, or important notifications.</li>
            <li>To detect, prevent, and address technical issues.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">How We Protect Your Information</h2>
          <p>
            We take the security of your personal information seriously. We implement a variety of security measures to safeguard your data, including encryption, access control, and regular security audits.
          </p>
          <p>
            However, no method of internet transmission or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Your Rights and Choices</h2>
          <p>
            As a user, you have the following rights regarding your personal data:
          </p>
          <ul className="list-disc ml-6">
            <li>Access to your personal information.</li>
            <li>Correction of any inaccurate or incomplete data.</li>
            <li>Deletion of your personal information (under certain conditions).</li>
            <li>Opting out of marketing communications.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Cookies and Tracking</h2>
          <p>
            Our website uses cookies to improve your experience. Cookies are small files stored on your device that allow us to recognize you and remember your preferences.
          </p>
          <p>
            You can control the use of cookies through your browser settings. However, disabling cookies may limit your experience on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Third-Party Services</h2>
          <p>
            We may use third-party services (such as Google Analytics) to monitor and analyze the use of our website. These third parties may have access to your personal data, but they are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will post the new policy on this page and update the effective date. Please review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>Email: <a href="mailto:support@elearning.com" className="text-primary">support@elearning.com</a></p>
          <p>Phone: +1 (234) 567-890</p>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Privacy;
