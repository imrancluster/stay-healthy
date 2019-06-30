INSERT INTO roles(name) VALUES('ROLE_ADMIN');
INSERT INTO roles(name) VALUES('ROLE_PATIENT');
INSERT INTO roles(name) VALUES('ROLE_USER');

/* Create Admin User */
INSERT INTO users (id, name, username, email, password, created_on) VALUES (1, 'Admin', 'admin', 'admin@test.com', '$2a$10$AhiOZPa8bP9a1jtXBLBD9.IyrnPqTqlPMeeYhxEgiUQiyXnXZFmzW', '2019-06-30 17:24:35.292');

/* Set Role for Admin User */
INSERT INTO user_roles (user_id, role_id) VALUES (1, 1);
