import React from "react";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  return (
    <div className="medichoice-layout">
      {/* SIDEBAR */}
      <aside className="medichoice-sidebar">
        <div className="sidebar-brand">
          <div className="logo-icon">M</div>
          <h2>MediChoice</h2>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <p className="nav-label">Main Menu</p>
            <div className="nav-link active">
              <span>🏠</span> Dashboard
            </div>
            <div className="nav-link">
              <span>📅</span> Appointments
            </div>
            <div className="nav-link">
              <span>📄</span> Health Reports
            </div>
            <div className="nav-link">
              <span>💬</span> Messages
            </div>
            <div className="nav-link">
              <span>💊</span> Prescriptions
            </div>
          </div>
          <div className="nav-group">
            <p className="nav-label">Settings</p>
            <div className="nav-link">
              <span>👤</span> Profile
            </div>
            <div className="nav-link logout">
              <span>🚪</span> Logout
            </div>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="medichoice-main">
        <header className="main-header">
          <div className="greeting">
            <h1>Good Morning, Alex 👋</h1>
            <p>Here’s what’s happening with your health today.</p>
          </div>
          <div className="header-actions">
            <div className="search-bar-box">🔍 Search records...</div>
            <div className="user-avatar">AJ</div>
          </div>
        </header>

        {/* TOP STATS - Matching the cards in your image */}
        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <span className="label">Next Visit</span>
              <span className="value">Dr. Jenkins</span>
              <span className="subtext">Oct 24 • 2:30 PM</span>
            </div>
          </div>
          <div className="stat-card green">
            <div className="stat-icon">💊</div>
            <div className="stat-info">
              <span className="label">Active Meds</span>
              <span className="value">04 Medicines</span>
              <span className="subtext">2 refills available</span>
            </div>
          </div>
          <div className="stat-card purple">
            <div className="stat-icon">📄</div>
            <div className="stat-info">
              <span className="label">Reports</span>
              <span className="value">12 Files</span>
              <span className="subtext">1 new lab result</span>
            </div>
          </div>
          <div className="stat-card orange">
            <div className="stat-icon">💬</div>
            <div className="stat-info">
              <span className="label">Unread</span>
              <span className="value">02 Messages</span>
              <span className="subtext">From Dr. Sharma</span>
            </div>
          </div>
        </div>

        {/* MAIN BODY GRID */}
        <div className="content-grid">
          <div className="content-card appointments-list">
            <div className="card-header">
              <h3>Recent & Upcoming Visits</h3>
              <button className="view-all">View All</button>
            </div>
            <div className="list-item">
              <div className="doc-avatar">SJ</div>
              <div className="list-info">
                <h4>Dr. Sarah Jenkins</h4>
                <p>Neurology • Tomorrow, 2:30 PM</p>
              </div>
              <span className="tag-upcoming">Confirmed</span>
            </div>
            <div className="list-item">
              <div className="doc-avatar color-2">RM</div>
              <div className="list-info">
                <h4>Dr. Robert Miller</h4>
                <p>General Checkup • Sept 12, 2026</p>
              </div>
              <span className="tag-past">Completed</span>
            </div>
          </div>

          <div className="content-card prescriptions-summary">
            <h3>Medical Reports</h3>
            <div className="report-item">
              <span className="file-type pdf">PDF</span>
              <div className="report-info">
                <h4>Annual Blood Work</h4>
                <p>Uploaded 2 days ago</p>
              </div>
              <button className="download-icon">⬇️</button>
            </div>
            <div className="report-item">
              <span className="file-type img">IMG</span>
              <div className="report-info">
                <h4>Chest X-Ray</h4>
                <p>Uploaded 1 month ago</p>
              </div>
              <button className="download-icon">⬇️</button>
            </div>
            <button className="upload-btn">+ Upload New Report</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
