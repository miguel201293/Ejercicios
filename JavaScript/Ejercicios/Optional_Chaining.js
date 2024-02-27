/* Enunciado
En este ejemplo intentamos comprobar si cityhay definido un valor para la propiedad. Sin embargo, el código se puede simplificar. ¿Cómo podemos hacer eso?

const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required')};
}*/ 

const order = {};


if (!order?.customer?.address?.city) {
    console.log('City is required');
}
