class AppURL {
    static BasUrl = ' http://127.0.0.1:8000/api/';
    static visitorDetails = this.BasUrl+'GetVisitorDetaisls';
    static postcontat = this.BasUrl+'postcontat';
    static siteInfo = this.BasUrl+'sitInfo';
    static categori = this.BasUrl+'categoriDetails';
   // static productlist = this.BasUrl+'productlist';
    static  productListByRemark(Remark) {
        return this.BasUrl+'productlist/'+Remark;
    };
}
export default AppURL;