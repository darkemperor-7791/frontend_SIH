import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldPlus, Activity, Fingerprint, Lock, Mail } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'researcher'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication
    navigate('/profile');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Side: Visual/Branding */}
        <div className="login-visual">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          
          <div className="brand-header">
            <ShieldPlus size={32} />
            <span>AIIA CTMS</span>
          </div>
          
          <div className="visual-content">
            <h2>Advancing<br/>Ayurveda Research</h2>
            <p>Cloud-based, GCP-compliant Clinical Trial Management System for secure and interoperable data.</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="login-form-container">
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="role-selector">
              <label htmlFor="role">Select Role</label>
              <select 
                id="role" 
                name="role" 
                className="role-select"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="pi">👨‍⚕️ Principal Investigator</option>
                <option value="researcher">🔬 Researcher / Staff</option>
                <option value="coordinator">🏥 Site Coordinator</option>
                <option value="data_manager">📊 Data Manager</option>
                <option value="ethics">🛡️ Ethics Committee</option>
                <option value="pv">💊 Pharmacovigilance</option>
                <option value="admin">👨‍💼 Admin</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email / Employee ID</label>
              <input 
                type="text" 
                id="email" 
                name="email"
                className="input-field" 
                placeholder="Enter your email or ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                className="input-field" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className="forgot-pwd">Forgot Password?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-login">
              Sign In <Activity size={20} />
            </button>
          </form>

          <div className="divider">or authenticate with</div>

          <div className="social-login">
            <button className="btn-social" title="Biometric Login">
              <Fingerprint size={24} color="var(--primary-blue)" />
            </button>
            <button className="btn-social" title="Gov SSO">
              <Lock size={24} color="var(--primary-green)" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
