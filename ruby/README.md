# USB Vendor Lookup API - Ruby Gem

USB Vendor Lookup allows you to identify USB device manufacturers and products by their vendor ID and product ID. It uses the Linux USB ID Repository, which contains thousands of USB vendor and product identifiers.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_usbvendorlookup'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_usbvendorlookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_usbvendorlookup'

# Initialize the client
client = APIVerve::Usbvendorlookup::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  vendorid: "05AC",
  productid: "8290"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ vendorid: "05AC", productid: "8290" })
  puts response["data"]
rescue APIVerve::Usbvendorlookup::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Usbvendorlookup::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Usbvendorlookup::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/usbvendorlookup?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/usbvendorlookup?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/usbvendorlookup?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
