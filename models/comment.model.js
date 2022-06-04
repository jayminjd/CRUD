class commentModel{
    constructor(obj){
        this.id=obj.id
        this.postId=obj.postId,
        this.name=obj.name,
        this.email=obj.email,
        this.body=obj.body
    }
}

module.exports=commentModel