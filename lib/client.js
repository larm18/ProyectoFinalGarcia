/**
 * Created by oscar on 16/06/16.
 */
var database = require('../lib/notification')
var notificacion = new database.Notificacion()

var number = "1"
var valuesBook = {'number':'0001', 'client':'Oscar Garcia', 'product':'tires', 'text':'The Tire is damage'}
var setA = "Activas"
var setP = "Proceso"
var setC = "Concluidas"

notificacion.createNoti(number,valuesBook,setA)

notificacion.getNoti(number,function (err,result) {
    console.log('getNoti ' + result)
})
notificacion.showNoti(setA,function (err, result) {
    console.log('showNoti ' + result)
})

notificacion.changeNotiStatus(setA, setP,number)