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
    static SearchKey(Key){
        return this.BasUrl+'ProductSearch/'+Key;
    }
    static NotificationHistory=this.BasUrl+'notification';

    static AddToCart=this.BasUrl+'AddToCart';
    static cartItem=this.BasUrl+'cartlist';
    static Signup= this.BasUrl+'signup';
    static onLogin= this.BasUrl+'onLogin';
    static AddToOrder= this.BasUrl+'AddToOrder';
    static delete= this.BasUrl+'deleteitem';
    static orderhistory= this.BasUrl+'orderhistory';
    static RemoveOrderhistory=this.BasUrl+'RemoveOrder';
}
export default AppURL;