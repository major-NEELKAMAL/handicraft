<?php
/**
 * Created by PhpStorm.
 * User: fincorp
 * Date: 14/2/18
 * Time: 11:51 AM
 */

use Phalcon\Mvc\Model;


class Users extends Model
{

    public $first_name;
    public $email;
    public $password;

    public function logInAuthentication($data){
        $password = $data['password'];
        $username = $data['username'];
        $check= Users::find([ "password = '$password' AND (user_name = '$username' OR email = '$username') "]);
        if(false != $check->toArray() ){
            //print_r("authenticated");
            //echo "Thanks for registering!";
            return true;

        }
        else{
            //print_r("not authenticated");
            //echo "Sorry, the following problems were generated: ";

//            $messages = $user->getMessages();
//
//            foreach ($messages as $message) {
//                echo $message->getMessage(), "<br/>";
//            }
            return false;
        }
    }

}