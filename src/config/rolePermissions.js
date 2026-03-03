// Role-based access control configuration
// Single source of truth for what each role can access

export const ROLE_LABELS = {
    'super-admin': 'Super Admin',
    'admin': 'Administrator',
    'normal-user': 'Normal User',
    'user': 'User',
};

// Nav items visible in the main sidebar for each role
export const ROLE_NAV_ITEMS = {
    'super-admin': ['overview', 'robot', 'map', 'scheduling', 'alerts'],
    'admin': ['overview', 'robot', 'map', 'scheduling', 'alerts'],
    'normal-user': ['overview', 'robot', 'map', 'scheduling', 'alerts'],
    'user': ['overview', 'map'],
};

// Bottom nav items (User Management only for super-admin)
export const ROLE_BOTTOM_ITEMS = {
    'super-admin': ['users', 'logout'],
    'admin': ['logout'],
    'normal-user': ['logout'],
    'user': ['logout'],
};
