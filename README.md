# randomUser_vue
Esta es una practica sencilla de Vue3 con un boton que pide usuarios al azar a una api.
Utilizo Fetch + Async-await para consumir una api de usuarios random.
<br>
<img src="./randomUser.jpg">
<br>
<a href="https://randomuser.me/">Api Random User</a>

Para que la api te envie un usuario ingresa a https://randomuser.me/api/
Para ver lo que me devuelve la api de forma linda tengo una extension de chrome que se llama JSON Formatter.

¿Te animas a hacer el inicio de una red social para este usuario?
En la pagina debe haber un componente con todos los usuario que sigues 
y otro principal con los posteos de ellos. Ademas el usuario que esta en sesion debe poder realizar una publicacion.
Se podria agregar otro componente con otros usuarios para poder seguir 
y que cuando le des click en seguir se pasen automaticamente a "usuarios seguidos".

Con la api de random user se pueden tener los nombres y fotos de los usuarios
para los posteos podemos usar la api de jsonplaceholder
¿Porque usar dos apis diferentes? 
En jsonplaceholder se puede encontrar todo usuario, posteos, comentarios, fotos...
pero las fotos no tienen personas, asi que es por una razon estetica.
