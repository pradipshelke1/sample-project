import React from "react";
import { MdVideoSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="navbar-right">
        <div className="right-sidebar">
          <Link to="/inter-play-series" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp;Inter Play Series
          </Link>
        </div>
        <div className="right-sidebar">
          <Link to="/recorded-section" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp;Recorded Section
          </Link>
        </div>
        <div className="right-sidebar">
          <Link to="/cgpi-navratna-web-series" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp;CGPI | Navratna Web Series
          </Link>
        </div>
        <div className="right-sidebar">
          <Link to="/north-zone" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp;North Zone
          </Link>
        </div>
        <div className="right-sidebar">
          <Link to="/other" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp;Other
          </Link>
        </div>
        <div className="right-sidebar">
          <Link to="/paper-presentation" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp;Paper Presentation
          </Link>
        </div>
        <div className="right-sidebar">
          <Link to="/refund-under-gst" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp; Refund under GST Series
          </Link>
        </div>
        <div className="right-sidebar">
          <Link to="/gst-audit-annual-return" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp; GST Audit and Annual Returns
          </Link>
        </div>

        <div className="right-sidebar">
          <Link to="/videos" className="link-nav">
            <MdVideoSettings color="white" />
            &nbsp;Videos
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
