<?php
/**
 * Created by PhpStorm.
 * User: fincorp
 * Date: 14/2/18
 * Time: 2:36 PM
 */

use Phalcon\Loader;
use Phalcon\Mvc\View;
use Phalcon\Mvc\Application;
use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Url as UrlProvider;

use Phalcon\Db\Adapter\Pdo\Mysql as DbAdapter;



// Define some absolute path constants to aid in locating resources
define('BASE_PATH', dirname(__DIR__));
define('APP_PATH', BASE_PATH . '/api');

// Register an autoloader
$loader = new Loader();

$loader->registerDirs(
    [
        APP_PATH . '/app/controllers/',
        APP_PATH . '/app/models/',
    ]
);

$loader->register();

// Create a DI
$di = new FactoryDefault();

// Setup the view component
$di->set(
    'view',
    function () {
        $view = new View();
        $view->setViewsDir(APP_PATH . '/app/views/');
        return $view;
    }
);

// Setup a base URI
$di->set(
    'url',
    function () {
        $url = new UrlProvider();
        $url->setBaseUri('/');
        return $url;
    }
);

// Setup the database service
$di->set(
    'db',
    function () {
        return new DbAdapter(
            [
                'host'     => '127.0.0.1',
                'username' => 'root',
                'password' => 'root',
                'dbname'   => 'zodhpur',
            ]
        );
    }
);

$di->set('dispatcher', function () {
    //Create/Get an EventManager
    $eventsManager = new \Phalcon\Events\Manager();
    //Attach a listener
    $eventsManager->attach("dispatch", function ($event, $dispatcher, $exception) {
        //controller or action doesn't exist
        if ($event->getType() == 'beforeException') {
            switch ($exception->getCode()) {
                case \Phalcon\Dispatcher::EXCEPTION_HANDLER_NOT_FOUND:
                case \Phalcon\Dispatcher::EXCEPTION_ACTION_NOT_FOUND:
                if ($dispatcher->getControllerName() != 'products') {
                    $dispatcher->forward(array(
                        'controller' => 'products',
                        'action' => 'comingsoon'
                    ));

                    return false;
                }
                return;
            }
        }
    });

    $dispatcher = new \Phalcon\Mvc\Dispatcher();
    //Set default namespace to backend module
    $dispatcher->setDefaultNamespace("");
    //Bind the EventsManager to the dispatcher
    $dispatcher->setEventsManager($eventsManager);

    return $dispatcher;
});


$application = new Application($di);

try {
    // Handle the request
    $response = $application->handle();

    $response->send();
} catch (\Exception $e) {
    echo 'Exception: ', $e->getMessage();
}
