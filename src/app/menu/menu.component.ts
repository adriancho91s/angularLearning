import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { name: 'Arroz con huevo',
    description: 'Nuestro clásico plato combina arroz de grano largo con huevos frescos, creando una deliciosa opción para cualquier hora del día. El arroz es esponjoso y sazonado, mientras que los huevos pueden ser revueltos o fritos según tu preferencia. Personalízalo con aderezos como cebolla picada, salsa de soja o cilantro fresco para un sabor aún más rico. ¡Ven y disfruta de este reconfortante plato en nuestro restaurante hoy mismo!',
    price: 15,
    imageUrl: 'https://t2.uc.ltmcdn.com/es/posts/5/6/4/como_hacer_arroz_blanco_con_huevos_465_600.jpg'},
    { name: 'Chocolate con queso',
    description: '',
    price: 15,
    imageUrl: 'https://desayunaderochicamocha.com/wp-content/uploads/2021/04/restaurante_chicamocha_chocolate_queso-e1618629778473.jpg'},
    { name: 'Sacocho de gallina',
    description: 'Descripción del plato 3',
    price: 12,
    imageUrl: 'https://misrecetascolombia.com/wp-content/uploads/2021/02/Sancocho-de-gallina-450x375.jpg'},
  ];



  constructor() { }

  ngOnInit(): void {
  }
}
