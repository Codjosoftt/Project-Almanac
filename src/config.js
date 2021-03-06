const BaseUrl = 'http://medinginapi.vag/api';
// const BaseUrl = '192.168.8.102:1000/workitapi/public/api';
// const BaseUrl = 'http://workitapi.vag:1000/api';
// const BaseUrl = 'http://workitapi_prod.vag/api';
// const BaseUrl = 'workitapi/public/api';
// const BaseUrl = 'http://workitapi.qbelimited.com/api';
// const BaseUrl = 'http://workitapi.goldcabgh.com/api'
// const BaseUrl = 'localhost:8000/api'
// const BaseUrl = 'localhost/workitapi/public/api';
// const BaseUrl = 'workitapi/public/api';

const config = {
  locale: 'en-US',
  url: BaseUrl,
    api:
        {
            syncLocal: BaseUrl + "/sync",
            register: BaseUrl + "/register",
            update_det: BaseUrl + "/update_det",
            login: BaseUrl + "/login",
            low_stock: BaseUrl + "/reorder",
            post_low_stock: BaseUrl + "/post_reorder",
            minReorder: BaseUrl + "/min_reorder",
            allCustomers: BaseUrl + "/customers",
            postCustomers: BaseUrl + "/post_customers",
            singleCustomer: BaseUrl + "/customer",
            allDictionarys: BaseUrl + "/dictionarys",
            singleDictionary: BaseUrl + "/dictionary",
            allProducts: BaseUrl + "/products",
            allPostProducts: BaseUrl + "/post_products",
            singleProduct: BaseUrl + "/product",
            allPurchases: BaseUrl + "/purchases",
            singlePurchase: BaseUrl + "/purchase",
            getCreditors: BaseUrl + "/get_creditors",
            postCreditors: BaseUrl + "/post_creditors",
            singleReorder: BaseUrl + "/reorder",
            reorderBuffer: BaseUrl + "/reorder_buffer",
            posrecBuffer: BaseUrl + "/posrec_buffer",
            postReorder: BaseUrl + "/post_reorders",
            postReorderPending: BaseUrl + "/post_reorder_pending",
            postReorderTransfered: BaseUrl + "/post_reorder_transfered",
            recReorder: BaseUrl + "/rec_reorder",
            upReorder: BaseUrl + "/up_reorder",
            allOutlets: BaseUrl + "/outlets",
            exp_count: BaseUrl + "/exp_count",
            prod_count: BaseUrl + "/prod_count",
            c_sales: BaseUrl + "/csales",
            post_csales: BaseUrl + "/post_csales",
            c_prod: BaseUrl + "/cprod",
            post_cprod: BaseUrl + "/post_cprod",
            deb_count: BaseUrl + "/deb_count",
            cred_count: BaseUrl + "/cred_count",
            singleOutlet: BaseUrl + "/outlet",
            companyOutlets: BaseUrl + "/company_outlet",
            productPurchase: BaseUrl + "/product_purchase",
            allCategories: BaseUrl + "/categories",
            singleCategory: BaseUrl + "/category",
            allSuppliers: BaseUrl + "/suppliers",
            singleSupplier: BaseUrl + "/supplier",
            expiry: BaseUrl + "/product_expiry",
            deb_out:BaseUrl + "/deb_out",
            top_items: BaseUrl + "/top_items",
            allToppers: BaseUrl + "/toppers",
            expiry_batch: BaseUrl + "/expiry_batch",
            find_expiry_batch: BaseUrl + "/find_expiry_batch",
            allBankAccounts: BaseUrl + "/bankaccounts",
            singleBankAccount: BaseUrl + "/bankaccount",
            allBankTransactions: BaseUrl + "/bank_transactions",
            singleBankTransaction: BaseUrl + "/bank_transaction",
            allSaleTransactions: BaseUrl + "/sale_transactions",
            singleSaleTransaction: BaseUrl + "/sale_transaction",
            allSalePayment: BaseUrl + "/sale_payments",
            singleSalePayment: BaseUrl + "/sale_payment",
            cSalePayment: BaseUrl + "/csale_payment",
            allSaleItems: BaseUrl + "/sale_items",
            returnSaleItems: BaseUrl + "/sale_return_items",
            singleSaleItem: BaseUrl + "/sale_item",
            saleSummary: BaseUrl + "/sale_sum",
            allDebtors: BaseUrl + "/sale_debtors",
            postDebtors: BaseUrl + "/post_sale_debtors",
            singleDebtor: BaseUrl + "/sale_debtor",
            allPurchaseBuffers: BaseUrl + "/purchase_buffers",
            singlePurchaseBuffer: BaseUrl + "/purchase_buffer",
            invPurchaseBuffer: BaseUrl + "/purchase_buffer_inv",
            pendingPurchase: BaseUrl + "/purchase_pending",
            allExpenses: BaseUrl + "/expenses",
            singleExpense: BaseUrl + "/expense",
            allCompanys: BaseUrl + "/companys",
            singleCompany: BaseUrl + "/company",
            allExCats: BaseUrl + "/ex_cats",
            singleExCat: BaseUrl + "/ex_cat",
            allPackUnits: BaseUrl + "/packunits",
            singlePackUnit: BaseUrl + "/packunit",
            allDebitItems: BaseUrl + "/debit_items",
            allSaleInvoices: BaseUrl + "/sale_invoices",
            postSaleInvoices: BaseUrl + "/post_sale_invoices",
            pendingSaleInvoices: BaseUrl + "/pending_invoices",
            allCusDebtors: BaseUrl + "/cus_debtors",
            allPostCusDebtors: BaseUrl + "/post_cus_debtors",
            setCusDebtors: BaseUrl + "/set_debt",
            saleSession: BaseUrl + "/sale_session",
            closeSession: BaseUrl + "/close_session",
            singleSession: BaseUrl + "/single_session",
            sessionExpense: BaseUrl + "/ses_expense",
            completeSession: BaseUrl + "/complete_session",
            mySession: BaseUrl + "/my_session",
            allSession: BaseUrl + "/all_session",
            allUsers: BaseUrl + "/users",
            postUsers: BaseUrl + "/post_users",
            credHistory: BaseUrl + "/cred_history",
            debHistory: BaseUrl + "/deb_history",
            singleUser: BaseUrl + "/user",
            singleSuspended: BaseUrl + "/suspended",
            postSuspended: BaseUrl + "/post_suspended",
            singleSusProduct: BaseUrl + "/sus_product",
            passReset: BaseUrl + "/reset_pass",
            sessionSales: BaseUrl + "/session_sales",
            dosageForm: BaseUrl + "/dosage_form",
            allSupCreditors: BaseUrl + "/sup_creditors",
            zero_stock: BaseUrl + "/zero_stock",
        },
    messages:
        {
            networkError: `There was a network error while processing your request. 
                       Make sure you have network connection and try again. If the problem persists please contact IT Service Desk`,
            internalServerError: `An application error occured while processing  you request. If the problem persists please contact IT Service Desk `,
        },
};

global.config = config;

export default config;

