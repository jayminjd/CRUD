class userModel{
    constructor(obj){
        let a = obj.address;
        let g = a.geo;
        let c= obj.company
        this.id=obj.id,
        this.name=obj.name,
        this.userName=obj.username,
        this.email=obj.email,
        this.phone=obj.phone,
        this.website=obj.website,
        this.street=a.street,
        this.suite=a.suite,
        this.city=a.city,
        this.zipCode=a.zipcode,
        this.lat=g.lat,
        this.lng=g.lng,
        this.companyName=c.name,
        this.catchPhrase=c.catchPhrase,
        this.bs=c.bs
    }
}

module.exports=userModel