1- component btn === you have to write a 
=> include ../components/single-course/btn.pug
and write mixin name (className , btnName)
ex => +btn-link('list-item--upload-course', 'Create New Course')

-If you want to use a href write mixin name (className , btnName , href)
ex => +btn-link('list-item--upload-course', 'Create New Course' ,'#index.html')

= = = = = = = = = = = = = == =  = = = = = = = = = = = = = = = 

2- component interaction === you have to write a 
=> include ../components/single-course/interaction.pug
and write mixin name and  (class => seenicon, number => seenNumber )
ex =>
    include ../components/single-course/interaction.pug
        +interactions(
        seenicon => "uil uil-eye box--fa",  seenNumber   =>  '1452', 
        )

= = = = = = = = = = = =  = = = == =  = = = = = == = = =  == = =  =

3- component user Acount === ou have to write a 
=> include ../components/single-course/user-acount.pug
and write mixin name (userText , className)
userText = Johnson Smith
className = Subscribe
ex =>
     include ../components/single-course/user-acount.pug
    +user-acount("Johnson Smith", "Subscribe")
