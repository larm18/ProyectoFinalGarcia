/**
 * Created by oscar on 16/06/16.
 */
var express = require('express');
var router = express.Router();
var database = require('../lib/notification');
var notificacion = new database.Notificacion();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home' });
});

router.get('/create', function(req, res, next) {
    res.render('create', { title: 'create' });
});

router.post('/create', function(req, res, next) {
    var id = req.body.noti_id;
    var num = req.body.number;
    var cli = req.body.client;
    var prod = req.body.product;
    var txt = req.body.text;

    var ValueNoti = {'number':num, 'client':cli, 'product':prod, 'text':txt}

    notificacion.createNoti(id,ValueNoti,'Activas');
    res.render('create', { title: 'create' });
});

router.get('/display/:op', function(req, res, next) {
    var op = req.params.op;

    res.send(op);
});

router.get('/show/:notification', function(req, res, next) {
    var status = req.params.notification;
    console.log(status);
    res.render('show', { title: 'show' , status: status});
});


router.get('/getNoti/:op', function(req, res, next) {
    var noti = req.params.op;
    notificacion.getNoti( noti ,function(err, result)
    {
        console.log(result)
        result = JSON.parse(result);
        //res.send(result);
        res.render('getNoti', { title: 'Notification Details', info:result});

    });

});

router.get('/shownoti/:noti', function(req, res, next) {
    //res.send(req.params.task );
    var status = req.params.noti;
    notificacion.showNoti( status ,function(err, result)
    {
        res.send(result);
    });
});

router.get('/change/:status1/:status2/:key', function(req, res, next) {
    //res.send(req.params.task );
    var status1 = req.params.status1;
    var status2 = req.params.status2;
    var key = req.params.key;

    //res.send(status1+ status2 +key)
    notificacion.changeNotiStatus(status1,status2,key)
    res.render('show', { title: 'Show' , status: status1});
});

module.exports = router;
