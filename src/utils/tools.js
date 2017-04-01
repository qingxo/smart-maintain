class Tools{
    constructor() {
      this.pagination = []
    }

    ngSelPage(res) {
        console.log(res);
            this.arrayList = res.data.data.result
            this.lastPageNumber = res.data.data.lastPageNumber
            this.currentPage = res.data.data.pageNumber
            console.log(this.lastPageNumber);
            let i = 1;
            if(this.lastPageNumber<10) {
              for(i = 1 ;i<=this.lastPageNumber;i++) {
                this.pagination[i-1] = i;
              }
            }else{
              let cur = this.currentPage
              if(cur<=4){
                for( i = 1 ;i<=10;i++) {
                  this.pagination[i-1] = i;
                }
              }else{
                let lengthToEnd = this.lastPageNumber - this.currentPage
                if(lengthToEnd>6){
                  let j = 0
                  for(i = this.currentPage -4, j = 0;i<(this.currentPage+6);i++,j++){
                    this.pagination[j] = i
                  }
                }else{
                  let k = 0
                  for(i = this.lastPageNumber - 9, k = 0;i<=this.lastPageNumber;i++,k++) {
                      this.pagination[k] = i
                  }
                }
              }
          }
          return this.pagination
    }

    ngPageGo(e) {
      const el = e.target
      let txt = $(el).text()
      if(parseInt(txt) === this.pageInfo.pageNo) {
        return
      }
      this.pageInfo.pageNo = txt
      console.log(this.pageInfo);
    }

    ngPageUp() {
        console.log('pageup');
    }

    ngPageDown() {
      console.log("pagedown");
    }
}

export default new Tools()
