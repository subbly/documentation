var search_data = {
    'index': {
        'searchIndex': ["subbly","subbly\\api","subbly\\api\\service","subbly\\cms","subbly\\cms\\controllers","subbly\\cms\\controllers\\api","subbly\\core","subbly\\core\\installer","subbly\\model","subbly\\model\\concerns","subbly\\model\\exception","subbly\\api\\api","subbly\\api\\exception","subbly\\api\\service\\cartservice","subbly\\api\\service\\exception","subbly\\api\\service\\orderservice","subbly\\api\\service\\productservice","subbly\\api\\service\\service","subbly\\api\\service\\settingservice","subbly\\api\\service\\userservice","subbly\\cms\\controllers\\api\\authcontroller","subbly\\cms\\controllers\\api\\basecontroller","subbly\\cms\\controllers\\api\\orderscontroller","subbly\\cms\\controllers\\api\\productscontroller","subbly\\cms\\controllers\\api\\settingscontroller","subbly\\cms\\controllers\\api\\userscontroller","subbly\\cms\\controllers\\api\\welcomecontroller","subbly\\core\\container","subbly\\core\\eventdispatcher","subbly\\core\\installer\\installer","subbly\\model\\collection","subbly\\model\\concerns\\addresstrait","subbly\\model\\concerns\\defaultvalues","subbly\\model\\concerns\\subblymodel","subbly\\model\\concerns\\validable","subbly\\model\\exception\\unvalidmodelexception","subbly\\model\\modelinterface","subbly\\model\\order","subbly\\model\\orderaddress","subbly\\model\\orderproduct","subbly\\model\\product","subbly\\model\\productcategory","subbly\\model\\productimage","subbly\\model\\productoption","subbly\\model\\setting","subbly\\model\\user","subbly\\model\\useraddress","subbly\\subbly","subbly\\api\\api::__construct","subbly\\api\\api::service","subbly\\api\\api::registerservices","subbly\\api\\api::registerservice","subbly\\api\\service\\cartservice::access","subbly\\api\\service\\cartservice::name","subbly\\api\\service\\orderservice::neworder","subbly\\api\\service\\orderservice::all","subbly\\api\\service\\orderservice::find","subbly\\api\\service\\orderservice::searchby","subbly\\api\\service\\orderservice::create","subbly\\api\\service\\orderservice::update","subbly\\api\\service\\orderservice::name","subbly\\api\\service\\productservice::newproduct","subbly\\api\\service\\productservice::all","subbly\\api\\service\\productservice::find","subbly\\api\\service\\productservice::searchby","subbly\\api\\service\\productservice::create","subbly\\api\\service\\productservice::update","subbly\\api\\service\\productservice::name","subbly\\api\\service\\service::__construct","subbly\\api\\service\\service::name","subbly\\api\\service\\settingservice::registerdefaultsettings","subbly\\api\\service\\settingservice::all","subbly\\api\\service\\settingservice::get","subbly\\api\\service\\settingservice::has","subbly\\api\\service\\settingservice::update","subbly\\api\\service\\settingservice::defaults","subbly\\api\\service\\settingservice::refresh","subbly\\api\\service\\settingservice::name","subbly\\api\\service\\userservice::newuser","subbly\\api\\service\\userservice::authenticate","subbly\\api\\service\\userservice::check","subbly\\api\\service\\userservice::currentuser","subbly\\api\\service\\userservice::all","subbly\\api\\service\\userservice::find","subbly\\api\\service\\userservice::searchby","subbly\\api\\service\\userservice::create","subbly\\api\\service\\userservice::update","subbly\\api\\service\\userservice::delete","subbly\\api\\service\\userservice::name","subbly\\cms\\controllers\\api\\authcontroller::__construct","subbly\\cms\\controllers\\api\\authcontroller::testcredentials","subbly\\cms\\controllers\\api\\basecontroller::__construct","subbly\\cms\\controllers\\api\\basecontroller::processauthentication","subbly\\cms\\controllers\\api\\basecontroller::callaction","subbly\\cms\\controllers\\api\\basecontroller::jsoncollectionresponse","subbly\\cms\\controllers\\api\\orderscontroller::__construct","subbly\\cms\\controllers\\api\\orderscontroller::index","subbly\\cms\\controllers\\api\\orderscontroller::search","subbly\\cms\\controllers\\api\\orderscontroller::show","subbly\\cms\\controllers\\api\\orderscontroller::store","subbly\\cms\\controllers\\api\\orderscontroller::update","subbly\\cms\\controllers\\api\\productscontroller::__construct","subbly\\cms\\controllers\\api\\productscontroller::index","subbly\\cms\\controllers\\api\\productscontroller::search","subbly\\cms\\controllers\\api\\productscontroller::show","subbly\\cms\\controllers\\api\\productscontroller::store","subbly\\cms\\controllers\\api\\productscontroller::update","subbly\\cms\\controllers\\api\\settingscontroller::__construct","subbly\\cms\\controllers\\api\\settingscontroller::index","subbly\\cms\\controllers\\api\\settingscontroller::update","subbly\\cms\\controllers\\api\\userscontroller::__construct","subbly\\cms\\controllers\\api\\userscontroller::index","subbly\\cms\\controllers\\api\\userscontroller::search","subbly\\cms\\controllers\\api\\userscontroller::show","subbly\\cms\\controllers\\api\\userscontroller::store","subbly\\cms\\controllers\\api\\userscontroller::update","subbly\\cms\\controllers\\api\\welcomecontroller::__construct","subbly\\cms\\controllers\\api\\welcomecontroller::index","subbly\\core\\container::load","subbly\\core\\container::has","subbly\\core\\container::get","subbly\\core\\installer\\installer::create","subbly\\core\\installer\\installer::__sleep","subbly\\core\\installer\\installer::__wakeup","subbly\\model\\collection::__construct","subbly\\model\\collection::total","subbly\\model\\collection::offset","subbly\\model\\collection::limit","subbly\\model\\concerns\\defaultvalues::bootifnotbooted","subbly\\model\\concerns\\subblymodel::getvisible","subbly\\model\\concerns\\subblymodel::save","subbly\\model\\concerns\\subblymodel::update","subbly\\model\\concerns\\subblymodel::delete","subbly\\model\\concerns\\subblymodel::setcaller","subbly\\model\\concerns\\subblymodel::setcallerfornext","subbly\\model\\concerns\\subblymodel::removecaller","subbly\\model\\concerns\\validable::isvalid","subbly\\model\\concerns\\validable::errormessages","subbly\\model\\exception\\unvalidmodelexception::__construct","subbly\\model\\exception\\unvalidmodelexception::model","subbly\\model\\exception\\unvalidmodelexception::firsterrormessage","subbly\\model\\modelinterface::isvalid","subbly\\model\\modelinterface::errormessages","subbly\\model\\modelinterface::setcaller","subbly\\model\\order::user","subbly\\model\\order::products","subbly\\model\\order::shipping_address","subbly\\model\\order::billing_address","subbly\\model\\orderaddress::order","subbly\\model\\orderproduct::order","subbly\\model\\orderproduct::product","subbly\\model\\product::images","subbly\\model\\product::options","subbly\\model\\product::categories","subbly\\model\\product::getpriceattribute","subbly\\model\\product::getsalepriceattribute","subbly\\model\\productcategory::parent","subbly\\model\\productcategory::children","subbly\\model\\productcategory::product","subbly\\model\\productimage::product","subbly\\model\\productoption::product","subbly\\model\\setting::setvalueattribute","subbly\\model\\setting::getvalueattribute","subbly\\model\\user::boot","subbly\\model\\user::orders","subbly\\model\\user::addresses","subbly\\model\\user::setfirstnameattribute","subbly\\model\\user::getfirstnameattribute","subbly\\model\\user::setlastnameattribute","subbly\\model\\user::getlastnameattribute","subbly\\model\\useraddress::user","subbly\\subbly::api","subbly\\subbly::events"],
        'info': [["Subbly","","Subbly.html","","",3],["Subbly\\Api","","Subbly\/Api.html","","",3],["Subbly\\Api\\Service","","Subbly\/Api\/Service.html","","",3],["Subbly\\CMS","","Subbly\/CMS.html","","",3],["Subbly\\CMS\\Controllers","","Subbly\/CMS\/Controllers.html","","",3],["Subbly\\CMS\\Controllers\\Api","","Subbly\/CMS\/Controllers\/Api.html","","",3],["Subbly\\Core","","Subbly\/Core.html","","",3],["Subbly\\Core\\Installer","","Subbly\/Core\/Installer.html","","",3],["Subbly\\Model","","Subbly\/Model.html","","",3],["Subbly\\Model\\Concerns","","Subbly\/Model\/Concerns.html","","",3],["Subbly\\Model\\Exception","","Subbly\/Model\/Exception.html","","",3],["Api","Subbly\\Api","Subbly\/Api\/Api.html","","",1],["Exception","Subbly\\Api","Subbly\/Api\/Exception.html"," < Exception","",1],["CartService","Subbly\\Api\\Service","Subbly\/Api\/Service\/CartService.html"," < Service","",1],["Exception","Subbly\\Api\\Service","Subbly\/Api\/Service\/Exception.html"," < Exception","",1],["OrderService","Subbly\\Api\\Service","Subbly\/Api\/Service\/OrderService.html"," < Service","",1],["ProductService","Subbly\\Api\\Service","Subbly\/Api\/Service\/ProductService.html"," < Service","",1],["Service","Subbly\\Api\\Service","Subbly\/Api\/Service\/Service.html","","",1],["SettingService","Subbly\\Api\\Service","Subbly\/Api\/Service\/SettingService.html"," < Service","",1],["UserService","Subbly\\Api\\Service","Subbly\/Api\/Service\/UserService.html"," < Service","",1],["AuthController","Subbly\\CMS\\Controllers\\Api","Subbly\/CMS\/Controllers\/Api\/AuthController.html"," < BaseController","",1],["BaseController","Subbly\\CMS\\Controllers\\Api","Subbly\/CMS\/Controllers\/Api\/BaseController.html"," < Controller","",1],["OrdersController","Subbly\\CMS\\Controllers\\Api","Subbly\/CMS\/Controllers\/Api\/OrdersController.html"," < BaseController","",1],["ProductsController","Subbly\\CMS\\Controllers\\Api","Subbly\/CMS\/Controllers\/Api\/ProductsController.html"," < BaseController","",1],["SettingsController","Subbly\\CMS\\Controllers\\Api","Subbly\/CMS\/Controllers\/Api\/SettingsController.html"," < BaseController","",1],["UsersController","Subbly\\CMS\\Controllers\\Api","Subbly\/CMS\/Controllers\/Api\/UsersController.html"," < BaseController","",1],["WelcomeController","Subbly\\CMS\\Controllers\\Api","Subbly\/CMS\/Controllers\/Api\/WelcomeController.html"," < BaseController","",1],["Container","Subbly\\Core","Subbly\/Core\/Container.html"," < Container","",1],["EventDispatcher","Subbly\\Core","Subbly\/Core\/EventDispatcher.html"," < Dispatcher","",1],["Installer","Subbly\\Core\\Installer","Subbly\/Core\/Installer\/Installer.html","","",1],["Collection","Subbly\\Model","Subbly\/Model\/Collection.html"," < Collection","",1],["AddressTrait","Subbly\\Model\\Concerns","Subbly\/Model\/Concerns\/AddressTrait.html","","",1],["DefaultValues","Subbly\\Model\\Concerns","Subbly\/Model\/Concerns\/DefaultValues.html","","",1],["SubblyModel","Subbly\\Model\\Concerns","Subbly\/Model\/Concerns\/SubblyModel.html","","",1],["Validable","Subbly\\Model\\Concerns","Subbly\/Model\/Concerns\/Validable.html","","",1],["UnvalidModelException","Subbly\\Model\\Exception","Subbly\/Model\/Exception\/UnvalidModelException.html"," < Exception","",1],["ModelInterface","Subbly\\Model","Subbly\/Model\/ModelInterface.html","","",1],["Order","Subbly\\Model","Subbly\/Model\/Order.html"," < Model","",1],["OrderAddress","Subbly\\Model","Subbly\/Model\/OrderAddress.html"," < Model","",1],["OrderProduct","Subbly\\Model","Subbly\/Model\/OrderProduct.html"," < Model","",1],["Product","Subbly\\Model","Subbly\/Model\/Product.html"," < Model","",1],["ProductCategory","Subbly\\Model","Subbly\/Model\/ProductCategory.html"," < Model","",1],["ProductImage","Subbly\\Model","Subbly\/Model\/ProductImage.html"," < Model","",1],["ProductOption","Subbly\\Model","Subbly\/Model\/ProductOption.html"," < Model","",1],["Setting","Subbly\\Model","Subbly\/Model\/Setting.html"," < Model","",1],["User","Subbly\\Model","Subbly\/Model\/User.html"," < User","",1],["UserAddress","Subbly\\Model","Subbly\/Model\/UserAddress.html"," < Model","",1],["Subbly","Subbly","Subbly\/Subbly.html","","",1],["Api::__construct","Subbly\\Api\\Api","Subbly\/Api\/Api.html#method___construct","(<a href=\"Subbly\/Core\/Container.html\"><abbr title=\"Subbly\\Core\\Container\">Container<\/abbr><\/a> $container)","The constructor.",2],["Api::service","Subbly\\Api\\Api","Subbly\/Api\/Api.html#method_service","(string $name)","Get a service.",2],["Api::registerServices","Subbly\\Api\\Api","Subbly\/Api\/Api.html#method_registerServices","(array $servicesToRegister)","Process to the services registration.",2],["Api::registerService","Subbly\\Api\\Api","Subbly\/Api\/Api.html#method_registerService","(string $className)","Process the registration of one service.",2],["CartService::access","Subbly\\Api\\Service\\CartService","Subbly\/Api\/Service\/CartService.html#method_access","()","Access to the cart",2],["CartService::name","Subbly\\Api\\Service\\CartService","Subbly\/Api\/Service\/CartService.html#method_name","()","Name of the service Must be unique",2],["OrderService::newOrder","Subbly\\Api\\Service\\OrderService","Subbly\/Api\/Service\/OrderService.html#method_newOrder","()","Return an empty model",2],["OrderService::all","Subbly\\Api\\Service\\OrderService","Subbly\/Api\/Service\/OrderService.html#method_all","(array $options = array())","Get all Order",2],["OrderService::find","Subbly\\Api\\Service\\OrderService","Subbly\/Api\/Service\/OrderService.html#method_find","(string $id, array $options = array())","Find a Order by $id",2],["OrderService::searchBy","Subbly\\Api\\Service\\OrderService","Subbly\/Api\/Service\/OrderService.html#method_searchBy","(array|string $searchQuery, array $options = array(), string $statementsType = null)","Search a Order by options",2],["OrderService::create","Subbly\\Api\\Service\\OrderService","Subbly\/Api\/Service\/OrderService.html#method_create","(<a href=\"Subbly\/Model\/Order.html\"><abbr title=\"Subbly\\Model\\Order\">Order<\/abbr><\/a>|array $order)","Create a new Order",2],["OrderService::update","Subbly\\Api\\Service\\OrderService","Subbly\/Api\/Service\/OrderService.html#method_update","()","Update a Order",2],["OrderService::name","Subbly\\Api\\Service\\OrderService","Subbly\/Api\/Service\/OrderService.html#method_name","()","Name of the service Must be unique",2],["ProductService::newProduct","Subbly\\Api\\Service\\ProductService","Subbly\/Api\/Service\/ProductService.html#method_newProduct","()","Return an empty model",2],["ProductService::all","Subbly\\Api\\Service\\ProductService","Subbly\/Api\/Service\/ProductService.html#method_all","(array $options = array())","Get all Product",2],["ProductService::find","Subbly\\Api\\Service\\ProductService","Subbly\/Api\/Service\/ProductService.html#method_find","(string $sku, array $options = array())","Find a Product by $id",2],["ProductService::searchBy","Subbly\\Api\\Service\\ProductService","Subbly\/Api\/Service\/ProductService.html#method_searchBy","(array|string $searchQuery, array $options = array(), string $statementsType = null)","Search a Product by options",2],["ProductService::create","Subbly\\Api\\Service\\ProductService","Subbly\/Api\/Service\/ProductService.html#method_create","(<a href=\"Subbly\/Model\/Product.html\"><abbr title=\"Subbly\\Model\\Product\">Product<\/abbr><\/a>|array $product)","Create a new Product",2],["ProductService::update","Subbly\\Api\\Service\\ProductService","Subbly\/Api\/Service\/ProductService.html#method_update","()","Update a Product",2],["ProductService::name","Subbly\\Api\\Service\\ProductService","Subbly\/Api\/Service\/ProductService.html#method_name","()","Name of the service Must be unique",2],["Service::__construct","Subbly\\Api\\Service\\Service","Subbly\/Api\/Service\/Service.html#method___construct","(<a href=\"Subbly\/Api\/Api.html\"><abbr title=\"Subbly\\Api\\Api\">Api<\/abbr><\/a> $api)","The constructor.",2],["Service::name","Subbly\\Api\\Service\\Service","Subbly\/Api\/Service\/Service.html#method_name","()","Name of the service Must be unique",2],["SettingService::registerDefaultSettings","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_registerDefaultSettings","(string $filename)","Register a new default settings file",2],["SettingService::all","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_all","()","Get all Setting",2],["SettingService::get","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_get","(string $key)","Get a Setting value",2],["SettingService::has","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_has","(string $key)","Ask if a setting key exists or not",2],["SettingService::update","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_update","(string $key, mixed $value)","Update a setting value",2],["SettingService::defaults","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_defaults","(string|null $key = null)","Get defaults settings",2],["SettingService::refresh","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_refresh","(boolean $force = false)","Refresh the settings",2],["SettingService::name","Subbly\\Api\\Service\\SettingService","Subbly\/Api\/Service\/SettingService.html#method_name","()","Name of the service Must be unique",2],["UserService::newUser","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_newUser","()","Return an empty model",2],["UserService::authenticate","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_authenticate","(array $credentials, bool $remember = false)","Attempts to authenticate the given user according to",2],["UserService::check","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_check","()","Check to see if the user is logged in and activated,",2],["UserService::currentUser","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_currentUser","()","Returns the current user being used by Sentry, if any.",2],["UserService::all","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_all","(array $options = array())","Get all User",2],["UserService::find","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_find","(string $uid, array $options = array())","Find a User by $id",2],["UserService::searchBy","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_searchBy","(array|string $searchQuery, array $options = array(), string $statementsType = null)","Search a User by options",2],["UserService::create","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_create","(<a href=\"Subbly\/Model\/User.html\"><abbr title=\"Subbly\\Model\\User\">User<\/abbr><\/a>|array $user)","Create a new User",2],["UserService::update","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_update","()","Update a User",2],["UserService::delete","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_delete","(<a href=\"Subbly\/Model\/User.html\"><abbr title=\"Subbly\\Model\\User\">User<\/abbr><\/a>|string $user)","Delete a User",2],["UserService::name","Subbly\\Api\\Service\\UserService","Subbly\/Api\/Service\/UserService.html#method_name","()","Name of the service Must be unique",2],["AuthController::__construct","Subbly\\CMS\\Controllers\\Api\\AuthController","Subbly\/CMS\/Controllers\/Api\/AuthController.html#method___construct","()","The constructor.",2],["AuthController::testCredentials","Subbly\\CMS\\Controllers\\Api\\AuthController","Subbly\/CMS\/Controllers\/Api\/AuthController.html#method_testCredentials","()","Test user credentials",2],["BaseController::__construct","Subbly\\CMS\\Controllers\\Api\\BaseController","Subbly\/CMS\/Controllers\/Api\/BaseController.html#method___construct","()","The constructor.",2],["BaseController::processAuthentication","Subbly\\CMS\\Controllers\\Api\\BaseController","Subbly\/CMS\/Controllers\/Api\/BaseController.html#method_processAuthentication","(mixed $route, <abbr title=\"Illuminate\\Support\\Facades\\Request\">Request<\/abbr> $request)","Controller filter to process to the authentication.",2],["BaseController::callAction","Subbly\\CMS\\Controllers\\Api\\BaseController","Subbly\/CMS\/Controllers\/Api\/BaseController.html#method_callAction","(string $method, array $parameters)","Execute an action on the controller.",2],["BaseController::jsonCollectionResponse","Subbly\\CMS\\Controllers\\Api\\BaseController","Subbly\/CMS\/Controllers\/Api\/BaseController.html#method_jsonCollectionResponse","(string $key, <a href=\"Subbly\/Model\/Collection.html\"><abbr title=\"Subbly\\Model\\Collection\">Collection<\/abbr><\/a> $collection, array $extras = array())","Format a json collection Response",2],["OrdersController::__construct","Subbly\\CMS\\Controllers\\Api\\OrdersController","Subbly\/CMS\/Controllers\/Api\/OrdersController.html#method___construct","()","The constructor.",2],["OrdersController::index","Subbly\\CMS\\Controllers\\Api\\OrdersController","Subbly\/CMS\/Controllers\/Api\/OrdersController.html#method_index","()","Get Order list",2],["OrdersController::search","Subbly\\CMS\\Controllers\\Api\\OrdersController","Subbly\/CMS\/Controllers\/Api\/OrdersController.html#method_search","()","Search one or many Order",2],["OrdersController::show","Subbly\\CMS\\Controllers\\Api\\OrdersController","Subbly\/CMS\/Controllers\/Api\/OrdersController.html#method_show","($sku)","Get Order datas",2],["OrdersController::store","Subbly\\CMS\\Controllers\\Api\\OrdersController","Subbly\/CMS\/Controllers\/Api\/OrdersController.html#method_store","()","Create a new Order",2],["OrdersController::update","Subbly\\CMS\\Controllers\\Api\\OrdersController","Subbly\/CMS\/Controllers\/Api\/OrdersController.html#method_update","($sku)","Update a Order",2],["ProductsController::__construct","Subbly\\CMS\\Controllers\\Api\\ProductsController","Subbly\/CMS\/Controllers\/Api\/ProductsController.html#method___construct","()","The constructor.",2],["ProductsController::index","Subbly\\CMS\\Controllers\\Api\\ProductsController","Subbly\/CMS\/Controllers\/Api\/ProductsController.html#method_index","()","Get Product list",2],["ProductsController::search","Subbly\\CMS\\Controllers\\Api\\ProductsController","Subbly\/CMS\/Controllers\/Api\/ProductsController.html#method_search","()","Search one or many Product",2],["ProductsController::show","Subbly\\CMS\\Controllers\\Api\\ProductsController","Subbly\/CMS\/Controllers\/Api\/ProductsController.html#method_show","($sku)","Get Product datas",2],["ProductsController::store","Subbly\\CMS\\Controllers\\Api\\ProductsController","Subbly\/CMS\/Controllers\/Api\/ProductsController.html#method_store","()","Create a new Product",2],["ProductsController::update","Subbly\\CMS\\Controllers\\Api\\ProductsController","Subbly\/CMS\/Controllers\/Api\/ProductsController.html#method_update","($sku)","Update a Product",2],["SettingsController::__construct","Subbly\\CMS\\Controllers\\Api\\SettingsController","Subbly\/CMS\/Controllers\/Api\/SettingsController.html#method___construct","()","The constructor.",2],["SettingsController::index","Subbly\\CMS\\Controllers\\Api\\SettingsController","Subbly\/CMS\/Controllers\/Api\/SettingsController.html#method_index","()","Get Setting list",2],["SettingsController::update","Subbly\\CMS\\Controllers\\Api\\SettingsController","Subbly\/CMS\/Controllers\/Api\/SettingsController.html#method_update","($setting_key)","Update a Setting",2],["UsersController::__construct","Subbly\\CMS\\Controllers\\Api\\UsersController","Subbly\/CMS\/Controllers\/Api\/UsersController.html#method___construct","()","The constructor.",2],["UsersController::index","Subbly\\CMS\\Controllers\\Api\\UsersController","Subbly\/CMS\/Controllers\/Api\/UsersController.html#method_index","()","Get User list",2],["UsersController::search","Subbly\\CMS\\Controllers\\Api\\UsersController","Subbly\/CMS\/Controllers\/Api\/UsersController.html#method_search","()","Search one or many User",2],["UsersController::show","Subbly\\CMS\\Controllers\\Api\\UsersController","Subbly\/CMS\/Controllers\/Api\/UsersController.html#method_show","($uid)","Get User datas",2],["UsersController::store","Subbly\\CMS\\Controllers\\Api\\UsersController","Subbly\/CMS\/Controllers\/Api\/UsersController.html#method_store","()","Create a new User",2],["UsersController::update","Subbly\\CMS\\Controllers\\Api\\UsersController","Subbly\/CMS\/Controllers\/Api\/UsersController.html#method_update","($uid)","Update a User",2],["WelcomeController::__construct","Subbly\\CMS\\Controllers\\Api\\WelcomeController","Subbly\/CMS\/Controllers\/Api\/WelcomeController.html#method___construct","()","The constructor.",2],["WelcomeController::index","Subbly\\CMS\\Controllers\\Api\\WelcomeController","Subbly\/CMS\/Controllers\/Api\/WelcomeController.html#method_index","()","Return stats for the dashboard",2],["Container::load","Subbly\\Core\\Container","Subbly\/Core\/Container.html#method_load","()","Load services",2],["Container::has","Subbly\\Core\\Container","Subbly\/Core\/Container.html#method_has","(string $name)","Ask if named service exists",2],["Container::get","Subbly\\Core\\Container","Subbly\/Core\/Container.html#method_get","(string $name)","Get a service from is name",2],["Installer::create","Subbly\\Core\\Installer\\Installer","Subbly\/Core\/Installer\/Installer.html#method_create","()","",2],["Installer::__sleep","Subbly\\Core\\Installer\\Installer","Subbly\/Core\/Installer\/Installer.html#method___sleep","()","",2],["Installer::__wakeup","Subbly\\Core\\Installer\\Installer","Subbly\/Core\/Installer\/Installer.html#method___wakeup","()","",2],["Collection::__construct","Subbly\\Model\\Collection","Subbly\/Model\/Collection.html#method___construct","(<abbr title=\"Illuminate\\Database\\Eloquent\\Builder\">Builder<\/abbr> $query)","The constructor.",2],["Collection::total","Subbly\\Model\\Collection","Subbly\/Model\/Collection.html#method_total","()","Get the total query entries without limit and offset",2],["Collection::offset","Subbly\\Model\\Collection","Subbly\/Model\/Collection.html#method_offset","()","Get the offset used for the query",2],["Collection::limit","Subbly\\Model\\Collection","Subbly\/Model\/Collection.html#method_limit","()","Get the limit used for the query",2],["DefaultValues::bootIfNotBooted","Subbly\\Model\\Concerns\\DefaultValues","Subbly\/Model\/Concerns\/DefaultValues.html#method_bootIfNotBooted","()","Override Eloquent method",2],["SubblyModel::getVisible","Subbly\\Model\\Concerns\\SubblyModel","Subbly\/Model\/Concerns\/SubblyModel.html#method_getVisible","()","Get visible fields",2],["SubblyModel::save","Subbly\\Model\\Concerns\\SubblyModel","Subbly\/Model\/Concerns\/SubblyModel.html#method_save","(array $options = array())","Save the model to the database.",2],["SubblyModel::update","Subbly\\Model\\Concerns\\SubblyModel","Subbly\/Model\/Concerns\/SubblyModel.html#method_update","(array $attributes = array())","Update the model in the database.",2],["SubblyModel::delete","Subbly\\Model\\Concerns\\SubblyModel","Subbly\/Model\/Concerns\/SubblyModel.html#method_delete","()","Delete the model from the database.",2],["SubblyModel::setCaller","Subbly\\Model\\Concerns\\SubblyModel","Subbly\/Model\/Concerns\/SubblyModel.html#method_setCaller","(<a href=\"Subbly\/Api\/Service\/Service.html\"><abbr title=\"Subbly\\Api\\Service\\Service\">Service<\/abbr><\/a> $service)","",2],["SubblyModel::setCallerForNext","Subbly\\Model\\Concerns\\SubblyModel","Subbly\/Model\/Concerns\/SubblyModel.html#method_setCallerForNext","(<a href=\"Subbly\/Api\/Service\/Service.html\"><abbr title=\"Subbly\\Api\\Service\\Service\">Service<\/abbr><\/a> $service)","",2],["SubblyModel::removeCaller","Subbly\\Model\\Concerns\\SubblyModel","Subbly\/Model\/Concerns\/SubblyModel.html#method_removeCaller","()","",2],["Validable::isValid","Subbly\\Model\\Concerns\\Validable","Subbly\/Model\/Concerns\/Validable.html#method_isValid","()","Is model valid",2],["Validable::errorMessages","Subbly\\Model\\Concerns\\Validable","Subbly\/Model\/Concerns\/Validable.html#method_errorMessages","()","Get the error messages",2],["UnvalidModelException::__construct","Subbly\\Model\\Exception\\UnvalidModelException","Subbly\/Model\/Exception\/UnvalidModelException.html#method___construct","(<a href=\"Subbly\/Model\/ModelInterface.html\"><abbr title=\"Subbly\\Model\\ModelInterface\">ModelInterface<\/abbr><\/a> $model)","The constructor.",2],["UnvalidModelException::model","Subbly\\Model\\Exception\\UnvalidModelException","Subbly\/Model\/Exception\/UnvalidModelException.html#method_model","()","Get the model",2],["UnvalidModelException::firstErrorMessage","Subbly\\Model\\Exception\\UnvalidModelException","Subbly\/Model\/Exception\/UnvalidModelException.html#method_firstErrorMessage","()","Return the first unvalid error messages",2],["ModelInterface::isValid","Subbly\\Model\\ModelInterface","Subbly\/Model\/ModelInterface.html#method_isValid","()","Is model valid",2],["ModelInterface::errorMessages","Subbly\\Model\\ModelInterface","Subbly\/Model\/ModelInterface.html#method_errorMessages","()","Get the error messages",2],["ModelInterface::setCaller","Subbly\\Model\\ModelInterface","Subbly\/Model\/ModelInterface.html#method_setCaller","(<a href=\"Subbly\/Api\/Service\/Service.html\"><abbr title=\"Subbly\\Api\\Service\\Service\">Service<\/abbr><\/a> $service)","Set the caller Service",2],["Order::user","Subbly\\Model\\Order","Subbly\/Model\/Order.html#method_user","()","Relashionship",2],["Order::products","Subbly\\Model\\Order","Subbly\/Model\/Order.html#method_products","()","",2],["Order::shipping_address","Subbly\\Model\\Order","Subbly\/Model\/Order.html#method_shipping_address","()","",2],["Order::billing_address","Subbly\\Model\\Order","Subbly\/Model\/Order.html#method_billing_address","()","",2],["OrderAddress::order","Subbly\\Model\\OrderAddress","Subbly\/Model\/OrderAddress.html#method_order","()","Relashionship",2],["OrderProduct::order","Subbly\\Model\\OrderProduct","Subbly\/Model\/OrderProduct.html#method_order","()","Relashionship",2],["OrderProduct::product","Subbly\\Model\\OrderProduct","Subbly\/Model\/OrderProduct.html#method_product","()","",2],["Product::images","Subbly\\Model\\Product","Subbly\/Model\/Product.html#method_images","()","Relashionship",2],["Product::options","Subbly\\Model\\Product","Subbly\/Model\/Product.html#method_options","()","",2],["Product::categories","Subbly\\Model\\Product","Subbly\/Model\/Product.html#method_categories","()","",2],["Product::getPriceAttribute","Subbly\\Model\\Product","Subbly\/Model\/Product.html#method_getPriceAttribute","()","",2],["Product::getSalePriceAttribute","Subbly\\Model\\Product","Subbly\/Model\/Product.html#method_getSalePriceAttribute","()","",2],["ProductCategory::parent","Subbly\\Model\\ProductCategory","Subbly\/Model\/ProductCategory.html#method_parent","()","Relashionship",2],["ProductCategory::children","Subbly\\Model\\ProductCategory","Subbly\/Model\/ProductCategory.html#method_children","()","",2],["ProductCategory::product","Subbly\\Model\\ProductCategory","Subbly\/Model\/ProductCategory.html#method_product","()","",2],["ProductImage::product","Subbly\\Model\\ProductImage","Subbly\/Model\/ProductImage.html#method_product","()","Relashionship",2],["ProductOption::product","Subbly\\Model\\ProductOption","Subbly\/Model\/ProductOption.html#method_product","()","Relashionship",2],["Setting::setValueAttribute","Subbly\\Model\\Setting","Subbly\/Model\/Setting.html#method_setValueAttribute","($value)","",2],["Setting::getValueAttribute","Subbly\\Model\\Setting","Subbly\/Model\/Setting.html#method_getValueAttribute","()","",2],["User::boot","Subbly\\Model\\User","Subbly\/Model\/User.html#method_boot","()","Boot",2],["User::orders","Subbly\\Model\\User","Subbly\/Model\/User.html#method_orders","()","Relashionship",2],["User::addresses","Subbly\\Model\\User","Subbly\/Model\/User.html#method_addresses","()","",2],["User::setFirstnameAttribute","Subbly\\Model\\User","Subbly\/Model\/User.html#method_setFirstnameAttribute","($value)","Aliases",2],["User::getFirstnameAttribute","Subbly\\Model\\User","Subbly\/Model\/User.html#method_getFirstnameAttribute","()","",2],["User::setLastnameAttribute","Subbly\\Model\\User","Subbly\/Model\/User.html#method_setLastnameAttribute","($value)","",2],["User::getLastnameAttribute","Subbly\\Model\\User","Subbly\/Model\/User.html#method_getLastnameAttribute","()","",2],["UserAddress::user","Subbly\\Model\\UserAddress","Subbly\/Model\/UserAddress.html#method_user","()","",2],["Subbly::api","Subbly\\Subbly","Subbly\/Subbly.html#method_api","(null|string $serviceName = null)","Access to the Subbly Api",2],["Subbly::events","Subbly\\Subbly","Subbly\/Subbly.html#method_events","()","Access to the Subbly events",2]]
    }
}
search_data['index']['longSearchIndex'] = search_data['index']['searchIndex']