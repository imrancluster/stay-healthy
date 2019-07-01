-- INSERT INTO roles(name) VALUES('ROLE_ADMIN');
-- INSERT INTO roles(name) VALUES('ROLE_PATIENT');
-- INSERT INTO roles(name) VALUES('ROLE_DOCTOR');

/* Create Admin User Password 123456 */
-- INSERT INTO users (name, username, email, password, is_active, type, created_on) VALUES ('Admin', 'admin', 'admin@test.com', '$2a$10$AhiOZPa8bP9a1jtXBLBD9.IyrnPqTqlPMeeYhxEgiUQiyXnXZFmzW', true, 'ADMIN', '2019-06-30 17:24:35.292');

/* Set Role for Admin User*/
-- INSERT INTO user_roles (user_id, role_id) VALUES (1, 1);
