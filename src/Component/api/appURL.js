class AppURL {
    static BasUrl = ' http://127.0.0.1:8000/api/';
    static visitorDetails = this.BasUrl+'GetVisitorDetaisls';
    static postcontat = this.BasUrl+'postcontat';
    static siteInfo = this.BasUrl+'sitInfo';
    static categori = this.BasUrl+'categoriDetails';

    static  productListByRemark(Remark) {
        return this.BasUrl+'productlistByRemark/'+Remark;
    };
    static  ProductListByCategory(Category) {
        return this.BasUrl+'ProductListByCategori/'+Category;
    };
    static ProdutListBySubCategory(Category,SubCategory){
        return this.BasUrl+'productlistBySubCategori/'+Category+'/'+SubCategory;
    }
    static Productcode(code){
        return this.BasUrl+'productdetails/'+code;
    }

}
export default AppURL;