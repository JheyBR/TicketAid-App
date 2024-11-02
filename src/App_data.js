  import ImgTodo from './icons/StaticIcons/ToDoSt.PNG';
  import ImgPedidos from './icons/StaticIcons/carritoSt.PNG';
  import Todoimg from './icons/StaticIcons/logoTA2.png'


  const defaulttitlecards =[
    /*https://www.flaticon.es/iconos-animados-mas-descargados*/
    {titlecard: 'Lista de Tareas por Hacer', subtitlecard:'', iconcard:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', linkcard: '/todos', iconStcard: 'https://cdn-icons-png.flaticon.com/512/8722/8722697.png'},
    {titlecard: 'Crear un Ticket o PQRS', subtitlecard:'', iconcard:'https://cdn-icons-gif.flaticon.com/7994/7994402.gif', linkcard: '/costumer', iconStcard: 'https://cdn-icons-png.flaticon.com/512/7994/7994402.png'},
    {titlecard: 'Tickets de Soporte o PQRS', subtitlecard:'', iconcard:'https://cdn-icons-gif.flaticon.com/7211/7211799.gif', linkcard: '/todos', iconStcard: 'https://cdn-icons-png.flaticon.com/512/7211/7211799.png'},
    {titlecard: 'Control de Facturación', subtitlecard:'', iconcard:'https://cdn-icons-gif.flaticon.com/8716/8716613.gif', linkcard: '/todos', iconStcard: 'https://cdn-icons-png.flaticon.com/512/8716/8716613.png'},
    {titlecard: 'Tickets de Desarrollo', subtitlecard:'', iconcard:'https://cdn-icons-gif.flaticon.com/8722/8722684.gif', linkcard: '/todos', iconStcard:'https://cdn-icons-png.flaticon.com/512/8722/8722684.png'},
    {titlecard: 'Informes Gestión de PQRS', subtitlecard:'', iconcard:'https://cdn-icons-gif.flaticon.com/8819/8819053.gif', linkcard: '/todos', iconStcard: 'https://cdn-icons-png.flaticon.com/512/8819/8819053.png'},
    {titlecard: 'Lista General de Clientes', subtitlecard:'', iconcard:'https://cdn-icons-gif.flaticon.com/7211/7211817.gif', linkcard: '/todos', iconStcard: 'https://cdn-icons-png.flaticon.com/512/7211/7211817.png'},
  ] 

  const defaulttitleleftbarra =[
    /*https://www.flaticon.es/iconos-animados-mas-descargados*/
    {leftoption: 'Dashboard', iconleft: 'https://cdn-icons-gif.flaticon.com/8722/8722555.gif', linkleft: '/*',iconSTleft: Todoimg},
    {leftoption: 'Registrar Usuario', iconleft: 'https://cdn-icons-gif.flaticon.com/7931/7931421.gif', linkleft: '/*',iconSTleft: Todoimg},
    {leftoption: 'Lista de Usuarios', iconleft: 'https://cdn-icons-gif.flaticon.com/8819/8819071.gif', linkleft: '/*',iconSTleft: Todoimg},
    {leftoption: 'Configuración', iconleft: 'https://cdn-icons-gif.flaticon.com/8121/8121259.gif', linkleft: '/*',iconSTleft: Todoimg},
    {leftoption: 'Salir', iconleft: 'https://cdn-icons-gif.flaticon.com/7740/7740910.gif', linkleft: '/*',iconSTleft: Todoimg},
    //{leftoption: 'Logo', iconleft: '', linkleft: '/*',iconSTleft: './icons/StaticIcons/logoTA.png'}   
  ] 
  export { defaulttitlecards, defaulttitleleftbarra};

  const defaultImgUseEffect =[
    /*https://www.flaticon.es/iconos-animados-mas-descargados*/
    {imgDescUSeEffec: 'Loading', imgUseEffec: 'https://cdn-icons-gif.flaticon.com/8800/8800954.gif'},
    {imgDescUSeEffec: 'Error', imgUseEffec: 'https://cdn-icons-gif.flaticon.com/6569/6569130.gif'},
    {imgDescUSeEffec: 'Empty', imgUseEffec: 'https://cdn-icons-gif.flaticon.com/8716/8716767.gif'},
    
  ] 
  export {defaultImgUseEffect};
  
  const defaulListToDo =[ 
    {titleToDo: 'Revisar el PH en Enrtrada de Agua y Tanques', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Revisar Ph y Cloro en Llaves 1, 2, llenado de botellon y Bolsas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer retrolavado de Arena, Zeolita y Carbon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Hacer lavado de Microfiltros', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dos ciclos de ozono en cada jornada', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer los arreglos de botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Lavar estibas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Dejar seco el area de Produccion', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false },
    {titleToDo: 'Vaciar el agua de Saniger en la maquina de Botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dejar todas las pacas en Bodega', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'NO dejar Botellones Vacios', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false}
  ] 

  /* Lista original
  const defaulListToDo =[ 
    {titleToDo: 'Revisar el PH en Enrtrada de Agua y Tanques', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Revisar Ph y Cloro en Llaves 1, 2, llenado de botellon y Bolsas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer retrolavado de Arena, Zeolita y Carbon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Hacer lavado de Microfiltros', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dos ciclos de ozono en cada jornada', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer los arreglos de botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Lavar estibas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Dejar seco el area de Produccion', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false },
    {titleToDo: 'Vaciar el agua de Saniger en la maquina de Botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dejar todas las pacas en Bodega', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'NO dejar Botellones Vacios', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false}
  ] */

  export {defaulListToDo }; 

  const defaultCostumer =[
    {titleCostumer: 'No Ticket'},
    {titleCostumer: 'Tipo de Ticket'},
    {titleCostumer: 'Estado'},
    {titleCostumer: 'Fecha de Reporte'},
    {titleCostumer: 'Descripción'},
    {titleCostumer: 'Requerimientos'},
    {titleCostumer: 'Avances'},
    {titleCostumer: 'Solución'},
    {titleCostumer: 'Horas de Trabajo'},
    {titleCostumer: 'Valor Hora'},
    {titleCostumer: 'Valor Total'},
    {titleCostumer: 'Fecha de Solución'},
    {titleCostumer: 'Fecha de Cierre'} 
  ] 
  export {defaultCostumer};

