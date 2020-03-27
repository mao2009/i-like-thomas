
const SCROOL_Y = 1000;
const INTERVAL = 3000;
const MAX_COUNT = 50;
let count = 1;

const ID = setInterval(
    () => {
        const articles =document.querySelectorAll("article");
        articles.forEach(
            
            article => {

                //プロモーションにはいいねしない
                if (article.outerHTML.match(/>プロモーション<\/span>/)){
                    return;
                }
                const rt = article.querySelector('div[data-testid="retweet"]');

                if(rt){
                    rt.click();
                    const confirm = document.querySelector('div[data-testid="retweetConfirm"]');
                    confirm.click();
                    count++;
                }

                if (count > MAX_COUNT){
                    clearInterval(ID);
                    return;
                }
            }
        );

        //いいねの対象は表示されている範囲のみなのでスクロールしていく
        scrollBy(0,SCROOL_Y);
    }
,INTERVAL);

