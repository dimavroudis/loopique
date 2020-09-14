<?php

/**
 * Rest API Endpoints: Registration and implementation
 *
 * @package loopique
 */

add_action('rest_api_init', function () {
    register_rest_route('loopique/v1', 'form', array(
        'methods' => 'POST',
        'callback' => 'submit_form',
        'args' => array(
            'fname' => array(
                'description' => __('First name', 'agp'),
                'required' => true,
                'validate_callback' => function ($param, $request, $key) {
                    return is_string($param);
                }
            ),
            'lname' => array(
                'description' => __('Last Name', 'agp'),
                'required' => true,
                'validate_callback' => function ($param, $request, $key) {
                    return is_string($param);
                }
            ),
            'email' => array(
                'description' => __('Email', 'agp'),
                'required' => true,
                'validate_callback' => function ($param, $request, $key) {
                    return is_email($param);
                }
            ),
            'message' => array(
                'description' => __('Message', 'agp'),
                'required' => true,
                'validate_callback' => function ($param, $request, $key) {
                    return is_string($param);
                }
            ),
            'gdpr' => array(
                'description' => __('Terms and Condtions', 'agp'),
                'required' => true,
                'validate_callback' => function ($param, $request, $key) {
                    return $param === 'on';
                }
            ),
        ),
        'permission_callback' => function () {
            return true;
        }
    ));
});

function submit_form($data)
{

    $fname = isset($data['fname']) ? $data['fname'] : '';
    $lname = isset($data['lname']) ? $data['lname'] : '';
    $email = isset($data['email']) ? $data['email'] : '';
    $message = isset($data['message']) ? $data['message'] : '';

    $to = get_bloginfo('admin_email');
    $subject = __('Form Submission', 'loopique');
    $body =  sprintf(__('<p>From: %1$s %2$s <a href="mailto:%3$s">%3$s</a></p><p>%4$s</p>', 'loopique'), $fname, $lname, $email, $message);
    $headers = array('Content-Type: text/html; charset=UTF-8');

    $mail_sent = wp_mail($to, $subject, $body, $headers);

    // if(!$mail_sent){
    //     return new WP_Error('email_not_sent', __('Oops! Something went wrong.', 'loopique'));
    // }

    return array('message' => __('Thank you for contacting us.', 'loopique'));

}
