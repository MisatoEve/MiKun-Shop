# MiKun Shop - **e-commerce** React App Project
_____

Link test to live version _[MiKun Shop](https://mikun-shop-misatoeve.vercel.app/)_
>MiKun Shop es una aplicación web de e-commerce, la cual tiene la funcionalidad para navegar y agregar productos al carrito. 

## UX 
----------
El propósito del proyecto es crear una aplicación de e-commerce para el curso de reacción en CoderHouse. El diseño es simple y claro. El proyecto es accesible a través de dispositivos móviles y de escritorio. Para construir la funcionalidad de front-end, se usa React JS y para back-end, se usa Firebase.
____
_AÑO: 2022 SEPTIEMBRE - OCTUBRE_
_Proyecto Final de React - Coder House_
_COMISIÓN #34750 ~ **Profesor:** Sebastián Zuviria_
_TUTOR/A SINCRÓNICO: Armando Pérez_

## User
___________

- Los usuarios pueden encontrar varios productos en la página de inicio: después de hacer click en el producto seleccionado, el usuario es redirigido a la página con todos los detalles sobre el artículo elegido.
- Los usuarios pueden agregar productos al carrito y seleccionar la cantidad si es necesario (1 es el valor predeterminado).
- Los usuarios pueden actualizar y eliminar artículos en la página del carrito.
- Los usuarios pueden agregar productos a la lista de deseos, luego pueden agregarlos directamente al carrito o eliminarlos. Y de continuar se generará su orden.

## Layout 
_______
El diseño es simple y receptivo, esto fue logrado implementando la librería de componentes de React Bootstrap, junto a la mayor parte con estilos personalizados.

## Project consist following pages:
______
### Products(homepage)
Página donde se muestran todos los productos en forma de cart con imagen, breve información sobre especificaciones y precio de cada producto. El usuario también puede acceder a ver más detalles

### Product Details
La página incluye todos los detalles sobre el producto seleccionado: imagen, descripción, precio y botón para agregar al carrito con un campo de contador que permite seleccionar la cantidad del producto.

### Cart page / empty cart
La página permite revisar lo que hay en el carrito: se muestra el nombre del o los productos seleccionados, cantidad y valor del producto, junto al subtotal del pedido. 
El usuario puede eliminar el artículo por completo. La página incluye el precio total de todos los productos colocados en el carrito. Hay dos botones que permiten al usuario limpiar el carrito de compras o ir a realizar la orden. Cuando eliminamos todos los artículos, el ícono del carrito se muestra con información breve de que el carrito está vacío.

## Features
_________
Se puede acceder a la aplicación sin registro de usuario. Es decir que cualrquier persona puede realizar la acción de ver todos los detalles sobre el producto seleccionado, agregar productos al carrito y generar la orden. 

Características que quedan por implementar

> Barra de búsqueda: permite al usuario buscar productos por palabra clave.
Imagen en miniatura en el carrito de compra 
Agregue alguna imagen de la galería en la página de detalles del producto.
Crear registración de usuario.
Crear paginación.
Crear página de contacto.
Agregar correo electrónico de confirmación después de la compra
Reseñas de los clientes.

## Technologies used
______
**GitHub** - provee el hosting para el desarrollo de software y permite el control utilizando Git.

**Git** - Sistema de control de versiones con el seguimiento de cambios en el código de fuente durante el desarrollo de aplicación y software.

**ReactJS** - librería de Javascript.

**JavaScript** - lenguaje de programación.

**CSS3** - se utiliza para definir estilos para páginas web, incluido el diseño, y las variaciones en la visualización para diferentes dispositivos y tamaños de pantalla.

**React Bootstrap** - framework CSS gratuito y de código abierto. 

**Firebase** -proporciona documentación detallada y SDK multiplataforma para ayudarlo a crear y enviar aplicaciones.
- Firebase/Firestore
- Firebase/Auth



## Installation
_______________
MikunShop requiere [Node.js](https://nodejs.org/) v10+ para ejecutarse.
Instale las dependencias y devDependencias e inicie el servidor.

https://github.com/MisatoEve/MiKun-Shop.git

```sh 
// ▼  clonar el repositorio 
$ git clone https://github.com/MisatoEve/MiKun-Shop.git
// ▼  accede a la ubicación local
$ cd mikunshop
// ▼ instalar dependencias
$ npm install
// ▼  inicie el servidor local
$ npm start
```

► **Nota**: 
Si utilizas **Linux Bash** para windows, sigue esta [guía](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) o node desde command prompt.

_https://mikun-shop-misatoeve.vercel.app/_
- ✨by MisatoEve✨