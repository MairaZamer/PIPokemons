const validation = (data) => {
    const errors = {};

    if(data.name.length <= 3){
        errors.name = "El nombre tiene que ser mayor o igual a 3 dijitos"
    }
    if(!/^[A-Za-z]{1,25}$/i.test(data.name)){
        errors.name = "Debe contener solo letras y no exceder a los 25 caracteres"
    }

    if(parseInt(data.life) > 150 ){
        errors.life = "La vida no puede ser mayor a 150"
    }
    if(!/^\d{1,4}$/.test(data.life)){
        errors.life = "La vida deben ser un número de hasta 4 dígitos"
    }

    if(parseInt(data.attaque) > 150){
        errors.attaque = "El ataque no puede ser mayor a 150"
    }
    if(!/^\d{1,4}$/.test(data.attaque)){
        errors.attaque = "El ataque debe ser un numero de hasta 4 digitos"
    }

    if(parseInt(data.defense) > 90){
        errors.defense = 'la defensa no puede ser mayor a 90'
    }
    if(!/^\d{1,4}$/.test(data.defense)){
        errors.defense = 'La defensa debe ser un número de hasta 4 dígitos' 
    }

    if(parseInt(data.speed) > 150){
        errors.speed = "La velocidad no puede ser mayor a 150"
    }
    if(!/^\d{1,4}$/.test(data.speed)){
        errors.speed = "La velocidad debe ser un numero de hasta 4 digitos"
    }

    if(!/^\d{1,4}$/.test(data.height)){
        errors.height = 'La altura debe ser un número de hasta 4 dígitos'
    }

    if (!/^\d{1,4}$/.test(data.weight)) {
        errors.weight = 'El peso debe ser un número de hasta 4 dígitos';
    }

    // if(!/^(ftp|http|https):\/\/[^ "]+$/.test(data.image.url)){
    //     errors.image = "Tiene que ser una URL"
    // }

    if(data.types.length > 0){
        errors.types = "Debes seleccionar al menos un tipo"
    }
    return errors;
}

export default validation;