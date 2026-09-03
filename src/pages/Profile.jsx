import React from 'react';
import { 
  User, LayoutDashboard, Settings, FileText, Bell, LogOut, 
  Edit3, Printer, ShieldCheck, Activity, MapPin, AlertCircle, 
  CheckCircle, FileSearch, Lock, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="profile-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <ShieldCheck size={28} />
          <span>AIIA CTMS</span>
        </div>
        
        <nav className="nav-menu">
          <div className="nav-item">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </div>
          <div className="nav-item active">
            <User size={20} />
            <span>My Profile</span>
          </div>
          <div className="nav-item">
            <FileText size={20} />
            <span>Trials & Protocols</span>
          </div>
          <div className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </nav>

        <div className="sidebar-upgrade">
          <h3>Need Help?</h3>
          <p>Contact support for access issues or protocol queries.</p>
          <button className="btn btn-upgrade">Support Portal</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="topbar">
          <h1>Profile Overview</h1>
          <div className="topbar-actions">
            <button className="btn btn-outline" style={{padding: '0.5rem', borderRadius: '50%'}}>
              <Bell size={20} />
            </button>
            <button className="btn btn-outline" onClick={handleLogout}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* User Header */}
        <section className="user-profile-header">
          <div className="user-info-basic">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" 
              alt="Profile" 
              className="avatar" 
            />
            <div className="user-details">
              <h2>Dr. Ananya Sharma</h2>
              <p><span className="badge badge-green">Principal Investigator</span></p>
              <p style={{fontSize: '0.875rem', marginTop: '0.25rem'}}>
                <MapPin size={14} /> AIIA Center, New Delhi
              </p>
            </div>
          </div>
          <div className="topbar-actions">
            <button className="btn btn-outline"><Printer size={16} /> Print</button>
            <button className="btn btn-primary"><Edit3 size={16} /> Edit Profile</button>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          
          {/* Personal & Professional Info */}
          <div className="card">
            <div className="card-header">
              <h3><User size={18} /> General Information</h3>
            </div>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-label">Employee ID</span>
                <span className="info-value">AIIA-RES-2041</span>
              </li>
              <li className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">a.sharma@aiia.gov.in</span>
              </li>
              <li className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">+91 98765 43210</span>
              </li>
              <li className="info-item">
                <span className="info-label">Department</span>
                <span className="info-value">Kayachikitsa (Internal Medicine)</span>
              </li>
              <li className="info-item">
                <span className="info-label">Qualification</span>
                <span className="info-value">MD (Ayurveda), PhD</span>
              </li>
              <li className="info-item">
                <span className="info-label">License Number</span>
                <span className="info-value">AYUSH-DL-7845</span>
              </li>
            </ul>
          </div>

          {/* My Work / KPIs (SIH26046 Specific) */}
          <div className="card">
            <div className="card-header">
              <h3><Activity size={18} /> My Work & KPIs</h3>
              <span className="badge badge-blue">Active</span>
            </div>
            <div className="work-grid">
              <div className="work-stat-card">
                <div className="stat-icon icon-blue"><Activity size={20} /></div>
                <div className="stat-details">
                  <h4>4</h4>
                  <p>Active Trials</p>
                </div>
              </div>
              <div className="work-stat-card">
                <div className="stat-icon icon-green"><CheckCircle size={20} /></div>
                <div className="stat-details">
                  <h4>5</h4>
                  <p>Ethics Approvals</p>
                </div>
              </div>
              <div className="work-stat-card">
                <div className="stat-icon icon-orange"><FileSearch size={20} /></div>
                <div className="stat-details">
                  <h4>7</h4>
                  <p>Pending Tasks</p>
                </div>
              </div>
              <div className="work-stat-card">
                <div className="stat-icon icon-red"><AlertCircle size={20} /></div>
                <div className="stat-details">
                  <h4>2</h4>
                  <p>Adverse Events</p>
                </div>
              </div>
            </div>
          </div>

          {/* Role & Permissions */}
          <div className="card">
            <div className="card-header">
              <h3><Shield size={18} /> Role & Permissions</h3>
            </div>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-label">Current Role</span>
                <span className="info-value">Principal Investigator</span>
              </li>
              <li className="info-item">
                <span className="info-label">Access Level</span>
                <span className="info-value"><span className="badge badge-blue">Level 3 (High)</span></span>
              </li>
              <li className="info-item">
                <span className="info-label">Assigned Modules</span>
                <span className="info-value">eCRF, Ethics, eTMF</span>
              </li>
              <li className="info-item">
                <span className="info-label">Last Login</span>
                <span className="info-value">Today, 10:42 AM</span>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="card">
            <div className="card-header">
              <h3><Lock size={18} /> Security Settings</h3>
            </div>
            <div className="security-actions">
              <button className="btn btn-outline" style={{width: '100%', justifyContent: 'flex-start'}}>
                Change Password
              </button>
              <button className="btn btn-outline" style={{width: '100%', justifyContent: 'flex-start'}}>
                Enable Two-Factor Authentication (2FA)
              </button>
              <button className="btn btn-outline" style={{width: '100%', justifyContent: 'flex-start', color: '#dc2626', borderColor: '#fca5a5'}}>
                Logout from all devices
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Profile;
