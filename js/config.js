/**
 * API Configuration
 * 
 * Backend hosted at: https://lashbook.ccs4thyear.com/
 * 
 * For local development, change to: 'http://localhost:8000'
 * For production: 'https://lashbook.ccs4thyear.com'
 */

// ============================================
// 🔧 PRODUCTION BACKEND URL (Hostinger)
// ============================================
const API_BASE_URL = 'https://lashbook.ccs4thyear.com';

// API endpoints
const API = {
    BASE_URL: API_BASE_URL,
    
    // Auth endpoints
    LOGIN: `${API_BASE_URL}/api/login`,
    REGISTER: `${API_BASE_URL}/api/register`,
    LOGOUT: `${API_BASE_URL}/api/logout`,
    ACTIVATE: (token) => `${API_BASE_URL}/api/activate/${token}`,
    
    // Password reset
    FORGOT_SEND_OTP: `${API_BASE_URL}/api/forgot-password/send-otp`,
    FORGOT_VERIFY_OTP: `${API_BASE_URL}/api/forgot-password/verify-otp`,
    FORGOT_RESET: `${API_BASE_URL}/api/forgot-password/reset`,
    
    // Profile
    PROFILE: `${API_BASE_URL}/api/profile`,
    PROFILE_UPDATE: `${API_BASE_URL}/api/profile/update`,
    PROFILE_AVATAR: `${API_BASE_URL}/api/profile/avatar`,
    CHANGE_PASSWORD: `${API_BASE_URL}/api/change-password`,
    
    // Lash Services
    LASH_SERVICES: `${API_BASE_URL}/api/lash-services`,
    LASH_SERVICE: (id) => `${API_BASE_URL}/api/lash-services/${id}`,
    LASH_SERVICE_UPDATE: (id) => `${API_BASE_URL}/api/lash-services/${id}/update`,
    
    // Users
    USERS: `${API_BASE_URL}/api/users`,
    USER: (id) => `${API_BASE_URL}/api/users/${id}`,
    
    // Technicians
    TECHNICIANS: `${API_BASE_URL}/api/technicians`,
    TECHNICIAN: (id) => `${API_BASE_URL}/api/technicians/${id}`,
    
    // Appointments
    APPOINTMENTS: `${API_BASE_URL}/api/appointments`,
    APPOINTMENT: (id) => `${API_BASE_URL}/api/appointments/${id}`,
};

// Helper to get image URLs from backend
function getImageUrl(path) {
    if (!path) return `${API_BASE_URL}/uploads/default.png`;
    if (path.startsWith('http')) return path;
    return `${API_BASE_URL}/${path}`;
}

