<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="900px">
            <v-card>
                <v-toolbar >
                    <v-toolbar-title class="primary--text">Add Product <v-btn flat color="secondary">{{select}} #{{full_dict.id}}</v-btn></v-toolbar-title>

                    <v-spacer></v-spacer>


                    <v-btn icon @click.native="dialog = false">
                        <v-icon color="secondary">mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    Product Info
                    <v-container grid-list-md elevation-6 class="mb-4">
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field
                                        box
                                        label="Product name"
                                        v-model="full_dict.product_name"
                                        required
                                        data-vv-name="name"
                                        v-validate="'required'"
                                        :error-messages="errors.collect('name')"

                                >

                                </v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6 md4>
                                <v-text-field

                                        box
                                        v-model="full_dict.category"
                                        label="Category"
                                        disabled
                                        hint="Category is pre-defined"
                                        persistent-hint
                                        required
                                        offset-y
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6 md4>
                                <v-text-field
                                        box
                                        label="Manufacturer"
                                        v-model="full_dict.manufacturer"
                                        required
                                        data-vv-name="manufacturer"
                                        :error-messages="errors.collect('manufacturer')"
                                        v-validate="'required'"
                                >

                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field
                                        box
                                        label="Expiry(dd/mm/yyyy)"
                                        v-model="full_dict.expiry"
                                        required
                                        data-vv-name="expiry"
                                :error-messages="errors.collect('expiry')"
                                v-validate="'required|date_format:DD/MM/YYYY'"
                                >

                                </v-text-field>
                            </v-flex>
                            <!--nii here atfter-->
                           <v-flex xs12 sm6 md4>
                                <v-text-field
                                        box
                                        label="BarCode"
                                        v-model="full_dict.barcode"
                                        required
                                        data-vv-name="barcode"
                                        hint="If present on product"
                                >

                                </v-text-field>
                            </v-flex> <v-flex xs12 sm6 md4>
                                        <v-btn color="secondary"><v-icon left>mdi-barcode</v-icon> Generate Barcode</v-btn>
                            </v-flex>

                            <v-flex xs12 sm6 md3>
                                <v-text-field
                                        box
                                        label="Batch No."
                                        v-model="new_product.batch_no"
                                        required
                                        type="number"
                                >

                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md3>
                                <v-text-field
                                        box
                                        label="Min No."
                                        v-model="new_product.min_no"
                                        required
                                        type="number"
                                        data-vv-name="min_no"
                                        :error-messages="errors.collect('min_no')"
                                        v-validate="'numeric|required'"
                                >

                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md3>
                                <v-text-field
                                        box
                                        label="Re-order No."
                                        v-model="new_product.reorder_no"
                                        required
                                        type="number"
                                        data-vv-name="reorder"
                                        :error-messages="errors.collect('reorder')"
                                        v-validate="'numeric|required'"
                                >

                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md3>
                                <v-text-field
                                        box
                                        label="Max No."
                                        v-model="new_product.max_no"
                                        required
                                        type="number"
                                        data-vv-name="max_no"
                                        :error-messages="errors.collect('max_no')"
                                        v-validate="'numeric|required'"
                                >

                                </v-text-field>
                            </v-flex>

                        </v-layout>
                    </v-container>



                          Wholesale Pricing
                        <v-container  grid-list-md class="mb-4" elevation-6>
                            <v-layout wrap>
                                <v-flex xs12 sm3 md3>
                                    <v-select
                                            :items="packList"
                                            box
                                            v-model="new_product.ws_unit"
                                            label="Wholesale Unit"
                                            hint="Eg. Pack"
                                            persistent-hint
                                            required
                                            offset-y
                                            data-vv-name="ws_unit"
                                            :error-messages="errors.collect('ws_unit')"
                                            v-validate="'required'"
                                    ></v-select>
                                </v-flex>
                                <v-flex xs4 sm2 md2>
                                    <v-text-field
                                            label="Quantity"
                                            box
                                            type="number"
                                            v-model="new_product.ws_quantity"
                                            data-vv-name="ws_quantity"
                                            :error-messages="errors.collect('ws_quantity')"
                                            v-validate="'numeric|required'"
                                    >

                                    </v-text-field>
                                </v-flex>
                                <v-flex xs4 sm3 md3>
                                    <v-text-field
                                            :label="unit_cost"
                                            box
                                            type="number"
                                            v-model="new_product.ws_unit_cost"
                                            data-vv-name="ws_cost"
                                            :error-messages="errors.collect('ws_cost')"
                                            v-validate="'decimal|required'"
                                    >

                                    </v-text-field>
                                </v-flex>
                                <v-flex xs4 sm2 md2>
                                    <v-text-field
                                            label="Discount"
                                            box
                                            suffix="%"
                                            v-model="new_product.ws_discount"
                                            data-vv-name="ws_discount"
                                            :error-messages="errors.collect('ws_discount')"
                                            v-validate="'numeric|required'"
                                    >

                                    </v-text-field>
                                </v-flex>


                              <v-flex xs4 sm2 md2>
                                    <v-text-field
                                            label="SubTotal(GH¢)"
                                            box
                                            readonly
                                            v-model="new_product.ws_subtotal"
                                            type="number"
                                            data-vv-name="ws_subtotal"
                                            :error-messages="errors.collect('ws_subtotal')"
                                            v-validate="'decimal|required'"
                                    >

                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    Retail Pricing
                        <v-container  grid-list-md elevation-6>
                            <v-layout wrap>
                                <v-flex xs12 sm3 md3>
                                    <v-select
                                            :items="packList"
                                            box
                                            v-model="new_product.rt_unit"
                                            label="Retail Unit"
                                            hint="Eg. Pack"
                                            persistent-hint
                                            required
                                            offset-y
                                            data-vv-name="rt_unit"
                                            :error-messages="errors.collect('rt_unit')"
                                            v-validate="'required'"
                                    ></v-select>
                                </v-flex>
                                <v-flex xs4 sm3 md3>
                                    <v-text-field
                                            label="Pack Size"
                                            box
                                            v-model="new_product.rt_pack_size"
                                            type="number"
                                            data-vv-name="rt_pack_size"
                                            :error-messages="errors.collect('rt_pack_size')"
                                            v-validate="'numeric|required'"
                                    >

                                    </v-text-field>
                                </v-flex>
                                <v-flex xs4 sm3 md3>
                                    <v-text-field
                                            label="Retail QTY"
                                            box
                                            type="number"
                                            readonly
                                            v-model="new_product.rt_quantity"
                                            data-vv-name="rt_quantity"
                                            :error-messages="errors.collect('rt_quantity')"
                                            v-validate="'numeric|required'"
                                    >

                                    </v-text-field>
                                </v-flex>
                                <v-flex xs4 sm3 md3>
                                    <v-text-field
                                            :label="runit_cost"
                                            box
                                            type="number"
                                            v-model="new_product.rt_unit_cost"
                                            data-vv-name="rt_cost"
                                            readonly
                                            :error-messages="errors.collect('rt_cost')"
                                            v-validate="'decimal:2|required'"
                                    >

                                    </v-text-field>
                                </v-flex>


                                <v-flex xs4 sm3 md3>
                                    <v-text-field
                                            label="Markup"
                                            box
                                            v-model="new_product.markup"
                                            type="number"
                                            data-vv-name="markup"
                                            :error-messages="errors.collect('markup')"
                                            v-validate="'decimal:2|required'"
                                    >

                                    </v-text-field>
                                </v-flex>



                                <v-flex xs4 sm3 md3>
                                    <v-text-field
                                            label="Selling Price"
                                            box
                                            v-model="new_product.selling_price"
                                            type="number"
                                            data-vv-name="selling_price"
                                            :error-messages="errors.collect('selling_price')"
                                            v-validate="'decimal|required'"
                                    >

                                    </v-text-field>
                                </v-flex>

                                <v-flex xs4 sm3 md3>
                                    <v-text-field
                                            label="Subtotal"
                                            box
                                            v-model="new_product.subtotal"
                                            type="number"
                                            data-vv-name="subtotal"
                                            :error-messages="errors.collect('subtotal')"
                                            v-validate="'decimal|required'"
                                            readonly
                                    >

                                    </v-text-field>
                                </v-flex>



                            </v-layout>
                        </v-container>


                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="grey darken-1" @click="closeup">Close</v-btn>
                    <v-btn
                            color="secondary darken-1"
                            @click="onSaveProduct"
                            :loading="loader"
                            :disabled="loader"


                    >
                        <v-icon left>mdi-library-plus
                        </v-icon>Save Product</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-layout>
        <v-flex sm11 md11>
            <v-autocomplete
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    v-model="select"
                    cache-items
                    class="mx-3"
                    flat
                    clearable
                    hide-no-data
                    hide-details
                    label="Search from product dictionary..."
                    solo
            ></v-autocomplete>

        </v-flex>
        <v-flex sm1 md1>
            <v-btn dark icon @click="setProduct"><v-icon>mdi-refresh</v-icon></v-btn>

        </v-flex>
        </v-layout>





        <simplert :useRadius="true"
                  :useIcon="true"
                  ref="simplert">
        </simplert>

    </div>

</template>

<script>
    import { eventBus } from '../../../main.js';
    let axios = require("axios");
    export default {
        $_veeValidate: {
            validator: 'new'
        },
        name: "set-customer",
        data () {
            return {
                new_product:{
                    ws_discount:0,
                    rt_discount:0,
                    ws_unit:'',
                    rt_unit:'',
                    ws_quantity:'',
                    rt_quantity:'',
                    ws_unit_cost:'',
                    rt_unit_cost:'',
                    selling_price:'',
                    rt_pack_size:'',
                    ws_subtotal:'',
                    markup:'',
                    batch_no:'',
                    min_no:'',
                    max_no:'',
                    reorder_no:'',
                },

                stock_expiry:'',
                dialog:false,
                loading: false,
                items: [

                ],
                loader:false,
                search: null,
                select: null,
                states: [],
                dict_load:false,
                full_dict: {
                    manufacturer:'',
                    bar_code:'',
                    category:'',
                    product_name:'',
                    product_type:'',
                    expiry:'',
                    id:0,
                    num:0
                }
            }
        },
        mounted(){
            this.setProduct();
        },
        watch: {
            search (val) {
                val && val !== this.select && this.querySelections(val);

            },
            select(val){
                this.dialog = true;
                let res = this.dictData.filter(function(e) {
                    return e.product_name === val;
                });

                this.full_dict = res[0];
                this.$store.dispatch('loadPackUnits');


                // setTimeout(() => {
                //     this.select = null;
                // }, 500);
            },
            ws_sub(){
                this.costComp();
            },
            ws_dis(){
                this.costComp();
            },
            ws_cost(){
                this.costComp();
                this.rtCostComp();
                this.markupComp();
                this.sellComp();
            },
            ws_quan(){
                this.rtCostComp();
                this.costComp();
                this.markupComp();
                this.sellComp();
            },
            rt_pack(){
                this.rtCostComp();
            },
            rt_quan(){
                this.rtCostComp();
                this.markupComp();
                this.sellComp();
            },
            mark_up(){
                this.markupComp();
            },
            rt_selling(){
                this.sellComp();
            }
        },
        computed:{
            packList(){
                let catSet =  this.$store.getters.getPackUnits;
                let exSet = [];

                for (let key = 0, len = catSet.length; key < len; key++) {
                    exSet.push(catSet[key].pack_name);

                }

                return exSet;
            },
           unit_cost(){
               return this.new_product.ws_unit+" Cost(Ghc)";
           },
           runit_cost(){
               return this.new_product.rt_unit+" Cost(Ghc)";
           },
            ws_sub(){
               return this.new_product.ws_subtotal;
           },
            ws_dis(){
               return this.new_product.ws_discount;
            },
            ws_cost(){
               return this.new_product.ws_unit_cost;
            },
            ws_quan(){
               return this.new_product.ws_quantity;
            },
            rt_pack(){
               return this.new_product.rt_pack_size;
            },
            rt_quan(){
               return this.new_product.rt_quantity;
            },

            mark_up(){
               return this.new_product.markup;
            },
            rt_selling(){
               return this.new_product.selling_price;
            },

            dictData(){
               return this.$store.getters.getDictionaries;
           },
            apiSet(){
                return this.$store.getters.getApi;
            },
        },
        methods: {
            markupComp(){
                 let mark = 0;
                 mark = this.new_product.rt_unit_cost * this.new_product.markup;
                  this.new_product.selling_price = mark.toFixed(2);
                  let k = mark * this.new_product.rt_quantity;
                this.new_product.subtotal = k.toFixed(2);
            },
            costComp(){

                let ws_sub = 0;
                let sub = this.new_product.ws_quantity * this.new_product.ws_unit_cost;
                if(this.new_product.ws_discount){

                   ws_sub = sub * (1-(this.new_product.ws_discount * 0.01));

                }
                else{

                    ws_sub = sub.toFixed(2);
                }

                this.new_product.ws_subtotal = ws_sub;

            },
            rtCostComp(){

                let rt_cost = 0;
                let rt_quan = this.new_product.rt_pack_size * this.new_product.ws_quantity;
                this.new_product.rt_quantity = rt_quan;

                if(rt_quan){
                      rt_cost = this.new_product.ws_subtotal/rt_quan;
                }
                else{

                }

                this.new_product.rt_unit_cost = rt_cost.toFixed(2);
            },
            sellComp(){
                let mark = 0;
                mark = this.new_product.selling_price / this.new_product.rt_unit_cost;
                this.new_product.markup = mark;
                this.new_product.subtotal = this.new_product.selling_price * this.new_product.rt_quantity;
            },
            setProduct(){
                let self = this;
                const dict=[];
                const obj = this.dictData;
                // for(let key in obj){
                for (let key = 0, len = obj.length; key < len; key++) {
                    dict.push(
                        obj[key].product_name
                    )
                }

                this.states = dict;
                eventBus.$emit('dict_load',true);

            },
            querySelections (v) {
                this.loading = true;
                // Simulated ajax query
                setTimeout(() => {
                    this.items = this.states;
                    this.loading = false
                }, 500);
            },
            loadDictionaries(){
                let self = this;
                axios.get(this.apiSet.allDictionarys)
                    .then(response=>{
                        const dict=[];
                        const obj = response.data.data;
                        // for(let key in obj){
                        for (let key = 0, len = obj.length; key < len; key++) {
                            dict.push({
                                id:obj[key].id,
                                num:key,
                                product_name:obj[key].product_name,
                                category:obj[key].category,
                                manufacturer:obj[key].manufacturer,
                                expiry:obj[key].expiry,
                                barcode:obj[key].barcode,
                                product_type:obj[key].product_type,
                            })
                        }
                        console.log(dict);
                        self.$store.commit('setDic',dict);

                    }).catch(
                    e => {
                        console.log(e);
                    }
                )
            },
            onSaveProduct(){
                let self = this;
                let new_prod = this.new_product;
                let dict_prod = this.full_dict;
                this.$validator.validateAll().then((result)=>{
                    if(result){
                        this.loader = true;
                        const ProductData={
                            ...new_prod,
                            ...dict_prod,
                            company_id:this.userData.company_id,
                            outlet_id:this.userData.outlet_id,
                        };

                        // console.log(ProductData);

                        axios.post(this.apiSet.singleProduct, ProductData)
                            .then(function (response) {
                                console.log(response);
                                // self.closeup();
                                eventBus.$emit('su_snack',true);
                                eventBus.$emit('product_add',true);
                                self.loader = false;
                                self.closeup();
                                // this.$store.commit('setProduct',ProductData);

                            })
                            .catch(function (error) {
;                                eventBus.$emit('er_snack',true);
                                console.log(error);
                                self.loader=false;

                            });
                    }
                    else{
                        eventBus.$emit('form_snack',true);
                        return false;
                    }
                });


            },
            deleteItem (item) {
                let self = this;
                // let confirmFn = this.del(item);

                let confirmFn = function() {
                    self.del(item);
                }

                let obj = {
                    title: 'Delete Product',
                    message: 'Are you sure you want to Delete Product?',
                    type: 'warning',
                    useConfirmBtn: true,
                    onConfirm: confirmFn
                }
                this.$refs.simplert.openSimplert(obj);

            },

            // deleteItem (item) {
            //     confirm('Are you sure you want to delete this item?') && this.del(item);
            // },
            del(item){
                let self = this;
                let apiUrl = this.$store.state.config.url;
                const index = this.dictionaries.indexOf(item);
                this.dictionaries.splice(index, 1);

                axios.delete(apiUrl+'/dictionary/'+item.id)
                    .then(function(response){
                        console.log(response);
                        self.del_snackbar = true;
                        self.loadDictionaries();
                        self.$store.commit('setNetError',false);

                    }).catch(function(error){
                    self.$store.commit('setNetError',true);
                    console.log(error);
                })
            },
            closeup(){
                this.dialog = false;

                    this.new_product.ws_discount=0;
                        this.new_product.rt_discount=0;
                        this.new_product.ws_unit='';
                        this.new_product.rt_unit='';
                        this.new_product.ws_quantity='';
                        this.new_product.rt_quantity='';
                        this.new_product.ws_unit_cost='';
                        this.new_product.rt_unit_cost='';
                        this.new_product.selling_price='';
                        this.new_product.rt_pack_size='';
                        this.new_product.ws_subtotal='';
                       this.new_product.markup='';
                        this.new_product.batch_no='';
                        this.new_product.min_no='';
                        this.new_product.max_no='';
                        this.new_product.reorder_no='';

            }

        }
    }
</script>

<style scoped>

</style>