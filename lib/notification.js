/**
 * Created by oscar on 16/06/16.
 */
var Redis = require('ioredis')
var redis = new Redis(6379,'localhost')

exports.Notificacion = function (args) {
    this.createNoti = function (key,values,set) {
        console.log("[DEBUG][createNoti values] %s", JSON.stringify(values))

        redis.set(key, JSON.stringify(values))
        redis.sadd(set,key)

    }

    this.getNoti = function (key, callback) {

        console.log("[DEBUG][getNoti key] %s", key)

        redis.get(key,function (err, result) {
            return callback(err, result)
        })
    }

    this.showNoti = function (set, callback){

        console.log("[DEBUG][showNoti set] %s", set)
        redis.smembers(set, function(err, result){

            return callback(err,result)
        })

    }

    this.changeNotiStatus = function(s1, s2, key){
        console.log("[DEBUG][changeNotiStatus values] %s %s %s", s1, s2, key)
        redis.smove(s1,s2,key)
    }


}