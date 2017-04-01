class Tools{
    constructor() {
      this.pagination = []
    }

    ngSelPage(res) {
          if(0 === res.data.code) {
            this.arrayList = res.data.data
            this.pageInfo = res.data.page
            this.pageInfo.totalPage = 11
            this.pageInfo.pageNo = 7
            let i = 1;
            if(this.pageInfo.totalPage<10) {
              for(i = 1 ;i<=this.pageInfo.totalPage;i++) {
                this.pagination[i-1] = i;
              }
            }else{
              let cur = this.pageInfo.pageNo
              if(cur<=4){
                for( i = 1 ;i<=10;i++) {
                  this.pagination[i-1] = i;
                }
              }else{
                let lengthToEnd = this.pageInfo.totalPage - this.pageInfo.pageNo
                if(lengthToEnd>6){
                  let j = 0
                  for(i = this.pageInfo.pageNo -4, j = 0;i<(this.pageInfo.pageNo+6);i++,j++){
                    this.pagination[j] = i
                  }
                }else{
                  let k = 0
                  for(i = this.pageInfo.totalPage - 9, k = 0;i<=this.pageInfo.totalPage;i++,k++) {
                      this.pagination[k] = i
                  }
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
