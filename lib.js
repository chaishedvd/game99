let ga={
    lib:{}, ctx:null, audio:null,
    ctx:null, audio:null,//ctx:畫布 audio:音效環境
    res:{//宣告一個群組變數
        total:4, loaded:0,
        sounds:{//資源切開
            bullet:"bullet.mp3" , explosion:"explosion.mp3"
        },//聲音
        imgs:{
           plane:"plane.png" , explosion:"explosion.png"

        }//圖片
    },
        game:{
            particles:null,
       }  
};
//定義需要用到的類別
ga.lib.Plane=class{
        constructor(){
            this.x=ga.ctx.canvas.width/2
            this.y=ga.ctx.canvas.width/2
            this.size=20;
        }
        update(){
            return false;

        }
        render(){
        ga.ctx.save(); //儲存Canvas設定
        ga.ctx.drawImage(
            ga.res.imgs.plane,
            this.x-this.size/2,  this.y-this.size/2,
            this.size, this.size
        );
        if(ga.game.key)
ga.ctx.restore();//取回上一次儲存的設定
        }

};