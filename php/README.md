# USB Vendor Lookup API - PHP Package

USB Vendor Lookup allows you to identify USB device manufacturers and products by their vendor ID and product ID. It uses the Linux USB ID Repository, which contains thousands of USB vendor and product identifiers.

## Installation

Install via Composer:

```bash
composer require apiverve/usbvendorlookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Usbvendorlookup\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'vendorid' => '05AC',
    'productid' => '8290'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Usbvendorlookup\Client;
use APIVerve\Usbvendorlookup\Exceptions\APIException;
use APIVerve\Usbvendorlookup\Exceptions\ValidationException;

try {
    $response = $client->execute(['vendorid' => '05AC', 'productid' => '8290']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "vendorId": "05AC",
    "productId": "8290",
    "found": true,
    "vendor": "Apple, Inc.",
    "product": "iPhone"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/usbvendorlookup?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/usbvendorlookup?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/usbvendorlookup?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
