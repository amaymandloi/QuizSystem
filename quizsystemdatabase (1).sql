

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
);
INSERT INTO `hibernate_sequence` VALUES (69);



CREATE TABLE `questions` (
  `questions_id` int NOT NULL AUTO_INCREMENT,
  `questions` char(200) DEFAULT NULL,
  `option1` varchar(45) NOT NULL,
  `option2` varchar(45) NOT NULL,
  `option3` varchar(45) DEFAULT NULL,
  `option4` varchar(45) DEFAULT NULL,
  `correct_answer` varchar(45) NOT NULL,
  `question_file` blob,
  `create_date_time` datetime NOT NULL,
  `update_date_time` datetime DEFAULT NULL,
  `is_delete` blob,
  `quiz_id` int NOT NULL,
  PRIMARY KEY (`questions_id`),
  UNIQUE KEY `questions_id_UNIQUE` (`questions_id`),
  KEY `quiz_id_idx` (`quiz_id`),
  CONSTRAINT `quiz_id` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`)
);
INSERT INTO `questions` VALUES (1,'Which keyword is used to monitor statement for exception?','try','catch','throw','throws','try',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(2,'If a statement tries to divide by zero which exception is thrown?','NumberFormatException','NumberFormatException','ArithemeticException','None of these','ArithemeticException',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(3,'Which method is used to print the description of the exception?','printStackTrace()','printExceptionMessage()','printStackMessage()','printExceptionTrace()','printStackTrace()',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(4,'Which of the following must be true of the object thrown by a throw statement?','It must be assignable to the Throwable type','It must be assignable to the Error type','It must be assignable to the Exception type','It must be assignable to the String type','It must be assignable to the Throwable type',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(5,'what is checked exception?','Error','Runtime Error','SQL Exception','None Of the Above','SQL Exception',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(6,'String s=&quot;abc&quot;; Integer i=Integer.parseInt(s); what is output?','Runtime Exception','NumberFormatedException','compile time error','None of the above','compile time error',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(7,'When does Exceptions in Java arises in code sequence?','Run Time','Compilation Time','Can Occur Any Time','None of the mentioned','Run Time',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(8,'Which of these keywords is not a part of exception handling?','try','Finally','catch','thrown','thrown',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(9,'Which of these keywords must be used to monitor for exceptions?','try','Finally','thrown','catch','try',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(10,'Which of these keywords is used to manually throw an exception?','try','Finally','catch','throw','throw',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(11,'Which of these standard collection classes implements a dynamic array?','ArrayList','LinkedList','AbstractList','AbstractSet','ArrayList',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(12,'Which of these class can generate an array which can increase and decrease in size automatically?','DynamicList()','LinkedList()','ArrayList()','ArraySet()','LinkedList()',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(13,'Which of these method can be used to increase the capacity of ArrayList object manually?','IncreaseCapacity','DecreaseCapacity','capacity','ensureCapacity','ensureCapacity',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(14,'Which of these method of ArrayList class is used to obtain present size of an object?','Index()','Size()','Capacity()','Length()','Index()',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(15,'Which of these methods can be used to obtain a static array from an ArrayList object?','Array()','toArray()','convertArray()','convertToArray()','convertArray()',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(16,'Which of these method is used to reduce the capacity of an ArrayList object?','Trim()','TrimCapacity()','TrimToSize()','TrimSize()','TrimToSIze()',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(17,'Map implements collection interface?','False','True','Cannot be determined','None of the above','False',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(18,'Is hashMap an ordered collection?','True','False','None of the above','Cannot be determined','False',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(19,'Which of the below does not implement Map interface?','Enum','Vector','HashTable','HashMap','Vector',NULL,'2021-11-02 16:47:20',NULL,NULL,1),(20,'How can we remove an object from ArrayList?','remove() method and using Iterator','using iterator','remove() method','delete() method','remove() method and using Iterator',NULL,'2021-11-02 16:47:20',NULL,NULL,1);



CREATE TABLE `quiz` (
  `quiz_id` int NOT NULL AUTO_INCREMENT,
  `quiz_name` varchar(30) NOT NULL,
  `quiz_level` int NOT NULL,
  `create_date_time` datetime NOT NULL,
  `update_date_time` datetime DEFAULT NULL,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`quiz_id`),
  UNIQUE KEY `quiz_id_UNIQUE` (`quiz_id`),
  UNIQUE KEY `quiz_name_UNIQUE` (`quiz_name`),
  UNIQUE KEY `quiz_level_UNIQUE` (`quiz_level`)
) ;

INSERT INTO `quiz` VALUES (1,'ExceptionOfJAva',2,'2021-11-02 16:44:31',NULL,0),(2,'CollectionOfJava',1,'2021-11-02 16:46:43',NULL,0);




CREATE TABLE `result` (
  `result_id` int NOT NULL,
  `create_date_time` datetime DEFAULT NULL,
  `is_delete` int DEFAULT NULL,
  `marks` int DEFAULT NULL,
  `percentage` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `update_date_time` datetime DEFAULT NULL,
  `quiz_id` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`result_id`)
);
INSERT INTO `result` VALUES (34,'2022-01-18 15:22:47',0,3,15,0,NULL,0,''),(35,'2022-01-18 15:25:56',0,0,0,0,NULL,1,'aman@gmail.com'),(36,'2022-01-18 15:32:59',0,3,15,0,NULL,0,''),(37,'2022-01-18 15:35:37',0,1,5,0,NULL,0,''),(38,'2022-01-18 16:54:33',0,3,15,0,NULL,0,''),(39,'2022-01-18 16:54:33',0,3,15,0,NULL,0,''),(40,'2022-01-18 16:55:28',0,4,20,0,NULL,1,''),(41,'2022-01-18 16:57:55',0,12,60,0,NULL,1,''),(42,'2022-01-18 17:01:20',0,4,20,0,NULL,1,'aman@gmail.com'),(43,'2022-01-18 17:03:52',0,12,60,0,NULL,1,'aman@gmail.com'),(44,'2022-01-18 17:04:39',0,3,15,0,NULL,1,'aman@gmail.com'),(45,'2022-01-18 17:05:27',0,5,25,0,NULL,1,'aman@gmail.com'),(46,'2022-01-18 17:06:17',0,4,20,0,NULL,1,'aman@gmail.com'),(47,'2022-01-18 17:06:19',0,4,20,0,NULL,1,'aman@gmail.com'),(48,'2022-01-18 17:06:20',0,4,20,1,NULL,1,'aman@gmail.com'),(49,'2022-01-18 17:09:19',0,14,70,0,NULL,1,'aman@gmail.com'),(50,'2022-01-18 17:09:24',0,14,70,1,NULL,1,'aman@gmail.com'),(51,'2022-01-18 17:12:44',0,0,0,0,NULL,1,'aman@gmail.com'),(52,'2022-01-18 17:12:49',0,0,0,0,NULL,1,'aman@gmail.com'),(53,'2022-01-18 17:12:50',0,0,0,0,NULL,1,'aman@gmail.com'),(54,'2022-01-18 17:12:51',0,0,0,0,NULL,1,'aman@gmail.com'),(55,'2022-01-18 17:12:52',0,0,0,0,NULL,1,'aman@gmail.com'),(56,'2022-01-18 17:13:15',0,5,25,0,NULL,1,'aman@gmail.com'),(57,'2022-01-18 17:13:18',0,5,25,0,NULL,1,'aman@gmail.com'),(58,'2022-01-18 17:13:20',0,5,25,0,NULL,1,'aman@gmail.com'),(59,'2022-01-18 17:13:21',0,5,25,0,NULL,1,'aman@gmail.com'),(60,'2022-01-18 17:15:21',0,5,25,0,NULL,1,'aman@gmail.com'),(61,'2022-01-18 17:15:23',0,5,25,0,NULL,1,'aman@gmail.com'),(62,'2022-01-18 17:15:24',0,5,25,0,NULL,1,'aman@gmail.com'),(63,'2022-01-18 17:16:23',0,5,25,1,NULL,1,'aman@gmail.com'),(64,'2022-01-18 17:18:53',0,14,70,1,NULL,1,'avinash@gmail.com'),(65,'2022-01-18 17:23:42',0,13,65,1,NULL,1,'avinash@gmail.com'),(66,'2022-01-18 17:24:06',0,2,10,0,NULL,1,'avinash@gmail.com'),(67,'2022-01-18 17:27:46',0,12,60,1,NULL,1,'sabbir@gmail.com'),(68,'2022-01-19 09:57:06',0,12,60,1,NULL,1,'aman@gmail.com');




CREATE TABLE `userrecords` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `mobile_number` varchar(10) DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);
INSERT INTO `userrecords` VALUES (1,'amit@gmail.com','Amit@123456','Amit','Verma','0'),(2,'avinash@gmail.com','123456','Avinash','Vishwakarma','0'),(3,'amay@gmail.com','123456','Amay','Mandloi','0'),(4,'aman@gmail.com','','Aman','Lashkari','0'),(5,'himanshu@gmail.com','123456','Himanshu','Kulshrestha','0'),(7,'r.g@gmail.com','ABc321','Ross','Geller','0'),(8,'sabbir@gmail.com','Sabbir@123','Sabbir','Poonawala','0'),(9,'abc@gmail.com','q@Awew3234','aasdds','abdf','0');


