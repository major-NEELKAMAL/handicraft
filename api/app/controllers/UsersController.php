<?php
/**
 * Created by PhpStorm.
 * User: fincorp
 * Date: 14/2/18
 * Time: 11:52 AM
 */

use Phalcon\Mvc\Controller;


class UsersController extends Controller
{

    public function signUpAction(){

        if(isset($_POST['user_name']) && isset($_POST['email']) && isset( $_POST['password']) && isset($_POST['password_repeat'])){
            $this->registerAction($this->request->getPost());

        }

    }

    public function logInAction(){
         if(isset($_POST['password'])) {
           $users = new Users();

           $success = $users->logInAuthentication($this->request->getPost());
             if ($success) {
                 echo "Thanks for login!";
             } else {
                 echo "Sorry, the following problems were generated: ";

                 $messages = $users->getMessages();

                 foreach ($messages as $message) {
                     echo $message->getMessage(), "<br/>";
                 }
             }

        }
    }

    public function registerAction($data)
    {
        $user = new Users();

            // Store and check for errors
            $success = $user->save(
                $data,
                [
                    "user_name",
                    "email",
                    "password",
                ]
            );

            if ($success) {
                echo "Thanks for registering!";
            } else {
                echo "Sorry, the following problems were generated: ";

                $messages = $user->getMessages();

                foreach ($messages as $message) {
                    echo $message->getMessage(), "<br/>";
                }
            }


    }

    public  function dashboardAction(){}


}