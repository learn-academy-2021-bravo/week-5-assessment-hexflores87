# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL? SQL -- stands for Structured Query Language. Its a programming language designed to retreive specific infomration from the databases. SQL is the language of databases



2. What the PostgreSQL query that would return all the content in a particular table?
rails comes with a default SQL database called SQLite, passing the flags -d postgresql -T will replace the default database with postgres. rails db:create: sets up an empty data base. 


3. What is the command to create a new Rails application with a PostgreSQL database?
rails server or rails s: starts the rails application by starting the server


4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner? 
*** rails generate model meals: breakfast:string lunch:string dinner:string



5. What is a migration? Why would you use one?
A migration in Active Record is used to change the shape of an existing database. The change can include changes like changing the date type, changing the name,, and adding or deleting columns. 


6. What is the command to generate a migration file?
$ rails generate model Dog name:string breed:string
$ rails db:migrate


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
rails generation migration 




8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not? Scheme files in a rail application are a quick tool at what attributes as active database. The scheme files document the final current state of the database. when you have more than a couple of migrations it makes it hard to deduce the schema just from the migrations alone. 



9. What is the Rails console? In my own definition of doing the challenges rails console is whenver you do a migration you arent going to be in rails s or rails c. rails c is whenever you want to add changes to the data base. 



10. What is the Rails console command to see all the content in a particular table?
the name of the model followed by .all
ex Dogs.all