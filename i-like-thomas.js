const SCROOL_Y = 300;
const INTERVAL = 1000;
const MAX_COUNT = 50;
let count = 1;

const ID = setInterval(
    () => {
        let count = 1;
        const articles =document.querySelectorAll("article");
        articles.forEach(
            
            article => {

                //プロモーションにはいいねしない
                if (article.outerHTML.match(/プロモーション$/)){
                    return;
                }

                //いいね済はdiv[data-testid="unlike"]
                const like = article.querySelector('div[data-testid="like"]');

                if(like){
                    like.click();
                    count++;
                }

                if (count > 50){
                    clearInterval(ID);
                    return;
                }
            }
        );

        //いいねの対象は表示されている範囲のみなのでスクロールしていく
        scrollBy(0,SCROOL_Y);
    }
,INTERVAL);

