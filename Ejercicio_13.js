var convertor={
    convertir:function convertir(medida, unidad, nuevaunidad, tipo){
        let resultado;
        switch(tipo){
            case 'L':
                if(unidad=='m'){
                    if(nuevaunidad=='km'){
                        resultado=medida/1000;
                        return resultado+""+nuevaunidad;
                    }else if(nuevaunidad=='ft'){
                        resultado=medida*3.28;
                        return resultado+""+nuevaunidad;
                    }
                    else {
                        resultado=medida*100;
                        return resultado+""+nuevaunidad;
                    }
                }
                else if(unidad=='km'){
                    resultado=medida*1000;
                    return resultado+""+nuevaunidad;
                }
                else if(unidad=='ft'){
                    resultado=medida*0.3048;
                    return resultado+""+nuevaunidad;
                }
                break;
            case 'T':
                if(unidad=='c'){
                    if(nuevaunidad=='f'){
                        resultado = (medida*(9/5)) + 32;
                        return resultado+""+nuevaunidad;
                    }
                    else if(nuevaunidad='k'){
                        resultado = medida + 273.15;
                        return resultado+""+nuevaunidad;
                    }
                }else if(unidad=='f'){
                    if(nuevaunidad=='c'){
                        resultado = (medida-32)*(5/9);
                        return resultado+""+nuevaunidad;
                    }
                    else if(nuevaunidad='k'){
                        resultado = (medida + 459.67)*(5/9);
                        return resultado+""+nuevaunidad;
                    }
                }
                else if(unidad=='k'){
                    if(nuevaunidad=='c'){
                        resultado =medida - 273.15;
                        return resultado+""+nuevaunidad;
                    }
                    else if(nuevaunidad='f'){
                        resultado = medida*(9/5) - 459.67;
                        return resultado+""+nuevaunidad;
                    }
                }
                break;
        }
    }
}