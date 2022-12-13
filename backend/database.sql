DROP TABLE IF EXISTS item;
CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads'), ("pwet");


DROP TABLE IF EXISTS article;
CREATE TABLE article (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content varchar(255) NOT NULL,
  author varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO article (title, content, author) VALUES ('Article 1', "Mon super contenu !!", "Moi même"),
('Article 2', "Mon autre super contenu", "Morgot");