module.exports = {
    
  
    visit(req, res) {
        console.log(req.body);
        const db = req.app.get('db')
        const { api_key } =req.body
        // console.log(auth_id, api_key);
            db.get_client_key([api_key]).then((userid) => {
                console.log(userid);
                db.visit(userid[0].id).then((response) => {

                    console.log(response);
            })
            }).catch((err) => { console.log(err)})
    },
    endVisit(req, res) {
        const db = req.app.get('db')
        db.endvisit([req.params.id]).then(() => {
            console.log('end response');
            
        }).catch((err) => { console.log(err)})
    },
    getVisits(req, res) {
        const db = req.app.get('db')
        db.get_visits().then(response => {
            // console.log("response");
            res.status(200).json(response)
        })
    },
    getClientVisits(req, res) {
        console.log('session:', req.session);
        const db = req.app.get('db')
        if (req.session.passport.user) {
            Promise.all([db.get_client_visits(req.session.passport.user),
                 db.get_week_visits(req.session.passport.user),
                  db.get_day_visits(req.session.passport.user)])
                  .then(values => {
                      console.log(values[0][0].count);
                      const newValues = [values[0][0].count, values[1][0].count, values[2][0].count]
                      res.status(200).json(newValues)
                  })
            // db.get_client_visits(req.session.passport.user).then(response => {
            //     console.log(response);
            //     res.status(200).json(response)
            // })
        } else {
            res.status(400)
        }
    }
}
