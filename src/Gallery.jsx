import logo from './assets/logo.png';
import Button1 from './components/buttons/Button1';
import CopyButton1 from './components/buttons/CopyButton1';
import Button2 from './components/buttons/Button2';
import BackToTop from "./components/BackToTop";
import Button3 from "./components/buttons/Button3";
import Button4 from "./components/buttons/Button4";
import Button5 from "./components/buttons/Button5";
import Button6 from './components/buttons/Button6';
import Button7 from './components/buttons/Button7';
import Button8 from './components/buttons/Button8';
import Button9 from './components/buttons/Button9';
import Button10 from './components/buttons/Button10';
import Button11 from './components/buttons/Button11';
import Button12 from './components/buttons/Button12';
import Button13 from './components/buttons/Button13';
import SocialIconsHoverEffect from './components/buttons/last';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white px-6 py-4 relative">
      
      {/* Logo fixed top-left */}
      <img
        src={logo}
        alt="Logo"
        className="fixed top-2 left-3 w-[100px] h-[100px] object-contain cursor-pointer z-50"
        onClick={() => window.location.href = '/'}
      />

      {/* Main Content */}
      <div className="text-center pt-24">
        <h1 className="text-5xl font-bold mb-2">Welcome to the Button Gallery</h1>
        <p
          style={{ fontFamily: '"Courier New", monospace' }}
          className="text-lg font-bold text-gray-500 mb-8"
        >
          {"< Explore, Tap, and Copy Buttons />"}
        </p>
      </div>

      {/* Buttons */}
      <Button1/>
      <Button2/>
      <Button3/>
      <Button4/>
      <Button5/>
      <Button6/>
      <Button7/>
      <Button8/>
      <Button9/>
      <Button10/>
      
      {/* Social Icons positioned at bottom right */}
      <div style={{
          position: 'relative',
          bottom: '-530px',
          left: '780px',
          zIndex: 999,
          width: 'fit-content'  // Add this to prevent full-width stretching
        }}>
          <SocialIconsHoverEffect />
        </div>


      <div
        className="button11-wrapper"
        style={{
          position:'absolute',
          top: '-24px',
          right: '-90px',
          zIndex: 999,
        }}
      >
        <Button11/>
      </div>
      
      <div
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '30px',
          zIndex: 999,
        }}
      >
        <Button12 />
      </div>

      <Button13/>
      <CopyButton1 />
      <BackToTop />
    </div>
  );
}