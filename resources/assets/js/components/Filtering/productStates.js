/**
 * Created by Edward Lance Lorilla on 5/19/2017.
 */
export default{
    data: {
        brands: []

    },
    fetch(urlFetch, loading){
        var that = this;
        axios.get(urlFetch).then(function(response){
            that.data.brands = _.map(response.data.data, function(num){
                var pick = _.pick(num, 'id', 'quantity','serial','manufacture','description','location','category','brand', 'status', 'updated_at','assetSerial');
                var objectProduct = {
                    id:pick.id,
                    quantity:pick.quantity,
                    serial: pick.serial,
                    assetSerial: pick.assetSerial,
                    manufacture:pick.manufacture ? pick.manufacture.name : '',
                    description:pick.description ? pick.description.name : '',
                    location:pick.location ? pick.location.name : '',
                    category:pick.category? pick.category.name : '',
                    model:pick.brand ? pick.brand.name : '',
                    status: pick.status ? pick.status.name : '',
                    updated:pick.updated_at};
                return objectProduct})
            loading = false
        })
    }
}
