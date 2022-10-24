//llamar usuarios Pantalla de visualización de todos los Contactos del Teléfono utilizando la FlatList.
//Se debe mostrar el Nombre y Apellido / Número telefónico y un 
//indicador si es el Numero de Contacto predeterminado de emergencia (con algún icono o similar)

import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

export default function getNumeros(){
PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  {
    'title': 'Grant permission to acces your contacts',
    'message': 'This app would like to view your contacts.',
    'buttonPositive': 'Access'
  }
)
  .then(Contacts.getAll()
    .then((contacts) => {
        // work with contacts
          console.log(contacts)
        })
          .catch((e) => {
              console.log(e)
          }))}