
const SCROOL_Y = 1000;
const INTERVAL = 3000;
const MAX_COUNT = 50;
let count = 1;

const ID = setInterval( () => {
    const articles =document.querySelectorAll("article");
    articles.forEach( article => {

        //プロモーションにはいいねしない
        if (article.outerHTML.match(/>プロモーション<\/span>/)){
            return;
        }

        //いいね済はdiv[data-testid="unlike"]
        const like = article.querySelector('div[data-testid="like"]');

        if(like){
            like.click();
            count++;
        }
        
        const retweet = article.querySelector('div[data-testid="retweet"]');
        if(retweet){
            retweet.click();
            
            const confirm = document.querySelector('div[data-testid="retweetConfirm"]');
            confirm.click();
        }
        
        if (count > MAX_COUNT){
            clearInterval(ID);
            return;
        }
    });
    //いいねの対象は表示されている範囲のみなのでスクロールしていく
    scrollBy(0,SCROOL_Y);
},INTERVAL);
