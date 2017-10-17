const iplocation = require('iplocation')
module.exports = {

  
    visit(req, res) {
        //console.log(req.connection.remoteAddress);
        const db = req.app.get('db')
        const { api_key } =req.body
        //var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
        //var ip = '184.190.2.80'
        var ip =  '184.190.9.88'  
        //var ip = '184.171.2.1'
        // var ip = '184.190.72.1'
        iplocation(ip).then(ipinfo => {
            console.log('response',ipinfo);
            // console.log(api_key);
            db.get_client_key([api_key]).then((userid) => {
                //console.log(userid);
                db.visit([userid[0].id, ipinfo.country_name, ipinfo.region_name, ipinfo.city, ipinfo.zip_code, ipinfo.latitude, ipinfo.longitude, ipinfo.ip])
                .then((response) => {
                    
                    //console.log('cool', response[0].id);
                    res.status(200).json(response[0].id)
                    
                })
            }).catch((err) => { console.log(err)})
        }).catch(err => {console.log(err);})
    },
    buttonClick(req, res) {
        const db = req.app.get('db')
        const { api_key } =req.body

        db.get_client_key([api_key]).then((userid) => {
            db.buttonclick(userid[0].id).then((response) => {
                console.log(response);
            })
        }).catch((err) => { console.log(err)})
    },

    endVisit(req, res) {
        const db = req.app.get('db')
        console.log('number', req.params.id);
        db.endvisit([parseInt(req.params.id)]).then(() => {
            console.log('end response');
            
        }).catch((err) => { console.log(err)})
    },

    getVisits(req, res) {
        const db = req.app.get('db')
        db.get_visits().then(response => {
            res.status(200).json(response)
        })
    },

    getDashboardVisits(req, res) {
        const db = req.app.get('db')
        db.get_dashboard_visits().then(response => {

            res.status(200).json(response)
    })
    },

    getClientVisits(req, res) {
      
        const db = req.app.get('db')
        if (req.session.passport.user) {

            Promise.all([db.get_client_visits(req.session.passport.user),
                 db.get_week_visits(req.session.passport.user),
                  db.get_day_visits(req.session.passport.user),
                  db.current_user(req.session.passport.user),
                    db.get_avg_visit_time(req.session.passport.user),
                    db.get_client_max_visits(req.session.passport.user),
                    db.get_client_onetime_visits(req.session.passport.user),
                    db.get_distinct_visiters(req.session.passport.user),
                    db.get_client_online_users(req.session.passport.user)])
                  .then(values => {
                     console.log("YOOOOOOO", values[7][0].count);
                     const arr = values[5]
                      const newValues = [values[0][0].count, values[1][0].count,
                       values[2][0].count, values[3][0].user_name, values[3][0].img,
                        values[3][0].api_key, values[4][0].visits_age,
                         arr.length === 0 ? 0 : values[5][0].amount, values[6].length, values[7][0].count,
                        values[8][0].count ]
                      res.status(200).json(newValues)
                  })

        } else {
            res.status(400)
        }
    },
    getClientMapData(req, res) {
        const db = req.app.get('db')
        if (req.session.passport.user) {
            db.get_client_map_data(req.session.passport.user).then(visits => {

                const newVisits = visits.map(function(obj){
                    var result = {
                        state: obj.state,
                        city: obj.city,
                        coordinates: [obj.longitude, obj.latitude]
                    }
                    return result
                })
                //console.log("YOOO", newVisits)
                res.status(200).json(newVisits)
            })
        }
    },
    getAllMapData(req, res) {
        const db = req.app.get('db')

            db.get_all_map_data().then(visits => {
                const mapVisits = visits.map(function(obj){
                    var result = {
                        user: obj.trackerusers_id,
                        state: obj.state,
                        city: obj.city,
                        coordinates: [obj.longitude, obj.latitude]
                    }
                    return result
                })
                console.log("YOOO", mapVisits)
                res.status(200).json(mapVisits)
            })
    },
    getOnlineMapData(req, res) {
        const db = req.app.get('db')
        if (req.session.passport.user) {
            db.get_online_map_data(req.session.passport.user).then(onlineUsers => {

                const online = onlineUsers.map(function(obj){
                    var result = {
                        state: obj.state,
                        city: obj.city,
                        coordinates: [obj.longitude, obj.latitude]
                    }
                    return result
                })
                //console.log("YOOO", newVisits)
                res.status(200).json(online)
            })
        }
    },
}
