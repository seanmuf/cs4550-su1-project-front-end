DROP DATABASE IF EXISTS cs4550;
CREATE DATABASE cs4550;
USE cs4550;

CREATE TABLE sellers (
s_id int NOT NULL AUTO_INCREMENT,
s_fname varchar(255),
s_lname varchar(255),
s_phone varchar(10),
CONSTRAINT sellers_pk PRIMARY KEY (s_id));

CREATE TABLE buyers (
b_id int NOT NULL AUTO_INCREMENT,
b_fname varchar(255),
b_lname varchar(255),
b_phone varchar(10),
CONSTRAINT buyers_pk PRIMARY KEY (b_id));

CREATE TABLE listings (
l_id int NOT NULL AUTO_INCREMENT,
l_sid int NOT NULL,
l_category varchar(255),
l_name varchar(255),
l_price int NOT NULL,
l_description varchar(1000),
CONSTRAINT listings_pk PRIMARY KEY (l_id),
CONSTRAINT listings_fk1 FOREIGN KEY (l_sid) REFERENCES sellers (s_id));

CREATE TABLE buyer_cart (
bc_id int NOT NULL AUTO_INCREMENT,
bc_bid int NOT NUll,
bc_lid int NOT NULL,
CONSTRAINT buyer_cart_pk PRIMARY KEY (bc_id, bc_bid),
CONSTRAINT buyer_cart_fk1 FOREIGN KEY (bc_bid) REFERENCES buyers (b_id),
CONSTRAINT buyer_cart_fk2 FOREIGN KEY (bc_lid) REFERENCES listings (l_id));

CREATE TABLE sellers_listings (
sl_sid int NOT NULL,
sl_lid int NOT NULL,
CONSTRAINT sellers_listings PRIMARY KEY (sl_sid, sl_lid),
CONSTRAINT sellers_listings_fk1 FOREIGN KEY (sl_sid) REFERENCES sellers (s_id),
CONSTRAINT sellers_listings_fk2 FOREIGN KEY (sl_lid) REFERENCES listings (l_id));

DELIMITER $$

CREATE PROCEDURE register_seller (s_fname_param VARCHAR(255), s_lname_param VARCHAR(255), s_phone_param VARCHAR(10))
BEGIN
	DECLARE seller_exists TINYINT DEFAULT FALSE;
    
    SET seller_exists = EXISTS (SELECT * FROM sellers 
    WHERE s_fname = s_fname_param AND s_lname = s_lname_param AND s_phone = s_phone_param);
    
    IF seller_exists = FALSE THEN
		INSERT INTO sellers (s_fname, s_lname, s_phone) VALUES (s_fname_param, s_lname_param, s_phone_param);
	END IF;
END$$
DELIMITER ;

DELIMITER $$

CREATE PROCEDURE register_buyer (b_fname_param VARCHAR(255), b_lname_param VARCHAR(255), b_phone_param VARCHAR(10))
BEGIN
	DECLARE buyer_exists TINYINT DEFAULT FALSE;
    
    SET buyer_exists = EXISTS (SELECT * FROM buyers 
    WHERE b_fname = b_fname_param AND b_lname = b_lname_param AND b_phone = b_phone_param);
    
    IF buyer_exists = FALSE THEN
		INSERT INTO buyers (b_fname, b_lname, b_phone) VALUES (b_fname_param, b_lname_param, b_phone_param);
	END IF;
END$$
DELIMITER ;

DELIMITER $$

CREATE PROCEDURE create_listing (b_id_param INT, l_id_param INT)
BEGIN
	INSERT INTO buyer_cart (bc_bid, bc_lid) VALUES (c_id_param, meal_date);
END$$
DELIMITER ;

DELIMITER $$

CREATE PROCEDURE add_to_cart (b_id_param INT, l_id_param INT)
BEGIN
	INSERT INTO buyer_cart (bc_bid, bc_lid) VALUES (c_id_param, meal_date);
END$$
DELIMITER ;




CALL register_seller("john", "smith", "2039999999");
CALL register_buyer("jimmy", "john", "1234567891");

SELECT * FROM sellers;
SELECT * FROM buyers;
SELECT * FROM buyer_cart;


