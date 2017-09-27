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
    }
}
