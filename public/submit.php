<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

header('Content-Type: application/json');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

// Read JSON body
$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

// Honeypot — bots fill hidden fields, humans don't
if (!empty($data['_honey'])) {
    // Pretend success to fool bots
    echo json_encode(['success' => true]);
    exit;
}

// Sanitise
function s($v) { return htmlspecialchars(trim((string)($v ?? '')), ENT_QUOTES, 'UTF-8'); }

$name     = s($data['name']);
$company  = s($data['company']);
$phone    = s($data['phone']);
$email    = s($data['email']);
$product  = s($data['product']);
$quantity = s($data['quantity']);
$message  = s($data['message']);

// Validate required fields
if ($name === '' || $phone === '' || $product === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$replyTo = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL)
    ? $data['email']
    : 'enquiry@ushakiranecoplast.com';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'mail.ushakiranecoplast.com'; // from hPanel → Email → Configure email client
    $mail->SMTPAuth   = true;
    $mail->Username   = 'enquiry@ushakiranecoplast.com';
    $mail->Password   = 'FediV]K0:u';        // replace with actual password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('enquiry@ushakiranecoplast.com', 'Ushakiran Ecoplast Website');
    $mail->addAddress('enquiry@ushakiranecoplast.com');
    $mail->addReplyTo($replyTo);

    $mail->isHTML(true);
    $mail->Subject = "Quote Request: $product — $name";
    $mail->Body    = '<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:580px;margin:0 auto">
<div style="background:#2d6a4f;padding:24px 32px">
  <h2 style="color:#fff;margin:0;font-size:20px">New Quote Request — Ushakiran Ecoplast</h2>
</div>
<div style="padding:24px 32px;background:#f9f9f9">
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    <tr><td style="padding:10px 12px;font-weight:700;width:130px;vertical-align:top">Name</td><td style="padding:10px 12px">' . $name . '</td></tr>
    <tr style="background:#fff"><td style="padding:10px 12px;font-weight:700;vertical-align:top">Company</td><td style="padding:10px 12px">' . ($company ?: '—') . '</td></tr>
    <tr><td style="padding:10px 12px;font-weight:700;vertical-align:top">Phone</td><td style="padding:10px 12px">' . $phone . '</td></tr>
    <tr style="background:#fff"><td style="padding:10px 12px;font-weight:700;vertical-align:top">Email</td><td style="padding:10px 12px">' . ($email ?: '—') . '</td></tr>
    <tr><td style="padding:10px 12px;font-weight:700;vertical-align:top">Product</td><td style="padding:10px 12px">' . $product . '</td></tr>
    <tr style="background:#fff"><td style="padding:10px 12px;font-weight:700;vertical-align:top">Quantity</td><td style="padding:10px 12px">' . ($quantity ?: '—') . '</td></tr>
    <tr><td style="padding:10px 12px;font-weight:700;vertical-align:top">Requirements</td><td style="padding:10px 12px;white-space:pre-wrap">' . ($message ?: '—') . '</td></tr>
  </table>
</div>
<div style="padding:16px 32px;font-size:12px;color:#888">
  Submitted from ushakiranecoplast.com
</div>
</body></html>';

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail error']);
}
