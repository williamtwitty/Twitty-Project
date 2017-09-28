module.exports = {
    
  
    visit(req, res) {
        console.log(req.body);
        const db = req.app.get('db')
        const { auth_id, api_key } =req.body
        // console.log(auth_id, api_key);
            db.visit([auth_id, api_key]).then(() => {
                console.log('response');
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
        console.log(req.session,'session');
        const db = req.app.get('db')
        db.get_client_visits(req.params.api_key).then(response => {
            res.status(200).json(response)
        })
    }
}
