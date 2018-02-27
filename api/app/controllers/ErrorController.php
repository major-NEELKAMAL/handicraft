<?php
/**
 * Created by PhpStorm.
 * User: fincorp
 * Date: 21/2/18
 * Time: 4:12 PM
 */
use Phalcon\Mvc\Controller;
use Phalcon\Mvc\views;
use Phalcon\Http\Response;

class ErrorController extends Controller
{
    public function show404Action()
    {
        print_r('hi');die;
        //$response = new Response();
        $this->response->setStatusCode(404, "Not Found");
        //$response->redirect("/error/show404/");

    }
}