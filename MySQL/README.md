# MySql-comments

show databases;


| Database           |
|:----| 
| information_schema |
| mysql              |
| performance_schema |
| sys                |
4 rows in set (0.00 sec)

<h1>Creating Database</h1>

Create database blazers;<br>
Query OK, 1 row affected (0.01 sec)


<h1>Show Database</h1>

 Show databases;

| Database           |
|:----| 
| blazers            |
| information_schema |
| mysql              |
| performance_schema |
| sys                |

5 rows in set (0.00 sec)

<h1>Changing Database</h1>

Use blazers;
  Database changed


<h1>Creating Table</h1>

Create table students(id int primary key auto_increment,name varchar(25) not null,age int(2) not null,gender char(3)not null);<br>
   Query OK, 0 rows affected, 1 warning (0.04 sec)


<h1>Show Tables</h1>

Show tables;

| Tables_in_blazers |
|:----| 
| students          |

1 row in set (0.00 sec)


<h1>Describe Tables</h1>

Desc students;<br>

| Field  | Type        | Null | Key | Default | Extra          |
|:----|:----|:------|:-----|
| id     | int         | NO   | PRI | NULL    | auto_increment |
| name   | varchar(25) | NO   |     | NULL    |                |
| age    | int         | NO   |     | NULL    |                |
| gender | char(3)     | NO   |     | NULL    |                |

4 rows in set (0.00 sec)


<h1>Inserting Values<h1>

Insert into students (name,age,gender) values('Haiden',19,'M');<br>
    Query OK, 1 row affected (0.01 sec)


<h1>Inserting Values<h1>

Insert into students (name,age,gender) values('Aswath',17,'M');<br>
    Query OK, 1 row affected (0.01 sec)


<h1>Select Statement<h1>

Select *from students;

| id | name   | age | gender |
|:----| 
|  1 | Haiden |  19 | M      |
|  2 | Aswath |  17 | M      |

2 rows in set (0.00 sec)


<h1>Select Statement<h1>

Select * from students where id=1;

| id | name   | age | gender |
|:----| 
|  1 | Haiden |  19 | M      |

1 row in set (0.00 sec)


<h1>Alter Table Statement<h1>

Alter table students add degree varchar(20);<br>
    Query OK, 0 rows affected (0.03 sec)
    Records: 0  Duplicates: 0  Warnings: 0


<h1>Select Statement<h1>

Select *from students;

| id | name   | age | gender | degree |
|:----| 
|  1 | Haiden |  19 | M      | NULL   |
|  2 | Aswath |  17 | M      | NULL   |

2 rows in set (0.00 sec)


<h1>Update Statement<h1><br>

Update students set degree='+2' where id=1;<br>
    Query OK, 1 row affected (0.01 sec)
    Rows matched: 1  Changed: 1  Warnings: 0


<h1>Select Statement<h1>

Select *from students;

| id | name   | age | gender | degree |
|:----| 
|  1 | Haiden |  19 | M      | +2     |
|  2 | Aswath |  17 | M      | NULL   |

2 rows in set (0.00 sec)


<h1>Delete Statement<h1>

Delete from students where id=1;<br>
    Query OK, 1 row affected (0.00 sec)


<h1>Select Statement<h1>

Select *from students;

| id | name   | age | gender | degree |
|:----| 
|  2 | Aswath |  17 | M      | NULL   |

1 row in set (0.00 sec)


<h1>Not Null:</h1><br>
      Create table Constraints(Firstname varchar(255) NOT NULL);


<h1>Primary Key:</h1><br>
      Create table Constraints(Id int(3) PRIMARY KEY AUTO_INCREMENT);


<h1>Unique Key:</h1><br>
      Create table Constraints(Email varchar(255) UNIQUE);


<h1>Default:</h1><br>
      Create table Constraints(Department varchar(255) DEFAULT 'Tech');


<h1>Check:</h1><br>
      Create table Constraints(Age int(2) NOT NULL, CHECK (Age>=21));


Create table marklist(studid int,marks int(3),grade varchar(5),personal_id int,foreign key(personal_id) references students(id));<br>
    Query OK, 0 rows affected, 1 warning (0.04 sec)


Insert into marklist values(1,100,'A',2);<br>
     Query OK, 1 row affected (0.01 sec)


Select *from marklist;

| studid | marks | grade | personal_id |
|:----| 
|      1 |   100 | A     |           2 |

1 row in set (0.00 sec)


Select marklist.marks,marklist.grade,students.name
    -> from students
    -> inner join marklist
    -> on students.id=marklist.studid;
+-------+-------+----------+
| marks | grade | name     |
+-------+-------+----------+
|   100 | B     | Aswath   |
|   100 | B     | Santhanu |
+-------+-------+----------+
2 rows in set (0.00 sec)

Select marklist.marks,marklist.grade,students.name
    -> from students
    -> left join marklist
    -> on students.id=marklist.studid;
+-------+-------+----------+
| marks | grade | name     |
+-------+-------+----------+
|   100 | B     | Aswath   |
|   100 | B     | Santhanu |
+-------+-------+----------+
2 rows in set (0.00 sec)

Select marklist.marks,marklist.grade,students.name 
  from students 
  right join marklist
  on students.id=marklist.studid;
+-------+-------+----------+
| marks | grade | name     |
+-------+-------+----------+
|   100 | A     | NULL     |
|   100 | B     | Aswath   |
|   100 | B     | Santhanu |
+-------+-------+----------+
3 rows in set (0.00 sec)

Select marklist.marks,marklist.grade,students.name
  from students 
  cross join marklist 
  on students.id=marklist.studid;
+-------+-------+----------+
| marks | grade | name     |
+-------+-------+----------+
|   100 | B     | Aswath   |
|   100 | B     | Santhanu |
+-------+-------+----------+
2 rows in set (0.00 sec)


 select *from dots;
+------+------------+------+--------+
| id   | name       | age  | gender |
+------+------------+------+--------+
|    1 | prasanna   |   20 | M      |
|    2 | kaushik    |   19 | M      |
|    2 | vimal      |   19 | M      |
|    2 | Chithraj   |   18 | M      |
|    2 | hasan      |   18 | M      |
|    6 | annapoorni |   17 | F      |
+------+------------+------+--------+
6 rows in set (0.00 sec)


   Select *from dots
    -> order by name;
+------+------------+------+--------+
| id   | name       | age  | gender |
+------+------------+------+--------+
|    6 | annapoorni |   17 | F      |
|    2 | Chithraj   |   18 | M      |
|    2 | hasan      |   18 | M      |
|    2 | kaushik    |   19 | M      |
|    1 | prasanna   |   20 | M      |
|    2 | vimal      |   19 | M      |
+------+------------+------+--------+
6 rows in set (0.00 sec)



















  
