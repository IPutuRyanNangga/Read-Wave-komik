CREATE DATABASE komik;

USE komik;

CREATE TABLE comics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT
);

INSERT INTO comics (title, description) VALUES 
('Naruto', 'Komik tentang ninja yang sangat terkenal.'),
('One Piece', 'Petualangan bajak laut mencari harta karun.');