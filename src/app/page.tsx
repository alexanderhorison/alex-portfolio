import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';

// One responsive site, one URL. Phones get the mobile app-style design;
// tablets and desktops get the web layout. The switch is pure CSS
// (see .view-desktop / .view-mobile in globals.css) so there is no
// JS-driven flash or hydration mismatch.
export default function Page() {
  return (
    <>
      <div className="view-desktop">
        <DesktopView />
      </div>
      <div className="view-mobile">
        <MobileView />
      </div>
    </>
  );
}
